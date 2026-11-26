import type { EventEmitter } from 'node:events';
import type { DeviceDefinition, DeviceState, ShellyClient } from '../deviceTypes';
import type { ShellyAdapter } from '../../main';
import type { ShellyAdapterConfig } from '../types';
import type ObjectHelper from '../objectHelper';
/**
 * Base class shared by the MQTT and CoAP protocol clients. Holds the per-device state and
 * implements the generic state<->device mapping: it walks the device definition, wires up the
 * `*_publish_funct`/`*_cmd_funct` callbacks, polls HTTP, and creates/deletes ioBroker objects.
 * Abstract pieces (serial id, device class/type, value publishing) are implemented by subclasses.
 */
export declare class BaseClient implements ShellyClient {
    type: 'mqtt' | 'coap';
    config: ShellyAdapterConfig;
    adapter: ShellyAdapter;
    /**
     * The shared object/state queue helper (build/lib/objectHelper). Heterogeneous partial-object
     * factory whose `setOrUpdateObject(id, { type?, common, native? }, …)` fills in defaults, so it is
     * deliberately left untyped here rather than fighting its loose contract.
     */
    objectHelper: ObjectHelper;
    eventEmitter: EventEmitter;
    httpIoBrokerStateTimeout: NodeJS.Timeout | null;
    msgId: number;
    /** Last value written per full state id, used to suppress duplicate updates. */
    stateValueCache: Record<string, ioBroker.StateValue | undefined>;
    /** The resolved device definition for the connected device. */
    device: DeviceDefinition;
    /** Map of HTTP poll url -> list of state ids served by that url. */
    http: Record<string, string[]>;
    deviceId: string | undefined;
    ip: string | undefined;
    httpEndpoint: string | undefined;
    id: string | undefined;
    deviceType: string | undefined;
    deviceMode: string | undefined;
    deviceFirmwareVersion: string | undefined;
    deviceClass: string | undefined;
    serialId: string | undefined;
    deviceGen: number | undefined;
    nonceCount: number;
    lastNonce: string | undefined;
    httpTimeout: number;
    timezoneChecked: boolean;
    constructor(type: 'mqtt' | 'coap', adapter: ShellyAdapter, objectHelper: ObjectHelper, eventEmitter: EventEmitter);
    /**
     * Perform an HTTP request to the device. Without `postData` a GET request is sent, otherwise the
     * data is sent as JSON body of a POST request - which is required for RPC calls with a payload
     * too large for the URL (e.g. `Script.PutCode`).
     *
     * @param url path of the request, e.g. `/rpc/Script.List`
     * @param postData body of a POST request. If omitted, a GET request is performed.
     */
    requestAsync(url: string, postData?: unknown): Promise<string>;
    /**
     * Parse a Gen2+ "WWW-Authenticate: Digest ..." challenge header into a key/value map.
     * The value is split on the FIRST "=" only so Base64 nonces (which end in "=" padding per
     * RFC 7616) are kept intact.
     *
     * @param header the raw www-authenticate header value
     */
    private parseDigestChallenge;
    /**
     * Build a Gen2+ digest Authorization header for the given challenge.
     *
     * @param authDetails parsed challenge (realm/nonce/...)
     * @param method the HTTP method of the request
     * @param url the request URI
     */
    buildDigestAuthHeader(authDetails: Record<string, string>, method: string, url: string): string;
    getNextMsgId(): number;
    /**
     * Returns the polltime for a device (in seconds)
     */
    getPollTime(): number;
    /**
     * ID of the Shelly device
     * Example: shellyplug-s-12345
     *
     * @returns
     */
    getId(): string | undefined;
    /**
     * Serial id of the Shelly device
     * Example: shellyplug-s-12345
     */
    getSerialId(): string;
    /**
     * @returns
     */
    getDeviceClass(): string;
    /**
     * @returns
     */
    getDeviceType(): string | undefined;
    /** MQTT topic prefix for this device; implemented by the MQTT client subclass. */
    getMqttPrefix(): string;
    publishStateValue(cmd: string, value: unknown): void;
    getDirectoryName(): string;
    getDeviceMode(): string | undefined;
    setDeviceMode(newDeviceMode: string): Promise<void>;
    initDeviceModeFromState(): Promise<void>;
    initDeviceFirmwareVersionFromState(): Promise<void>;
    /**
     * Parse a semver string from a Shelly firmware version string.
     * Input example: "20250924-062655/1.7.1-gd336f31" or "1.7.1-gd336f31"
     * Returns the semver string (e.g. "1.7.1") or undefined if not parseable.
     *
     * @param rawVersion - raw firmware version string
     */
    static parseFirmwareSemver(rawVersion: string): string | undefined;
    /**
     * Compare two semver strings. Returns true if a >= b.
     *
     * @param a - semver string
     * @param b - semver string
     */
    static isSemverAtLeast(a: string, b: string): boolean;
    getDeviceFirmwareVersion(): string | undefined;
    setDeviceFirmwareVersion(rawVersionString: string): Promise<void>;
    /**
     * IP of Shelly device
     * Example 192.168.1.2
     *
     * @returns
     */
    getIP(): string | undefined;
    getHttpEndpoint(): string | undefined;
    setHttpEndpoint(endpoint: string, source: string): Promise<void>;
    setIP(ip: string | undefined, source: string, skipDefaultEndpoint?: boolean): Promise<void>;
    initIPFromState(): Promise<void>;
    /**
     * Returns a string for logging with the IP address, name of device and type
     *
     * @returns
     */
    getLogInfo(): string;
    /**
     * Change Device ID from #2 to #1 (firmware version >= 1.8)
     * Example SHRGBW2#1234#2 will change to SHRGBW2#1234#1
     *
     * @param deviceId
     */
    getOldDeviceInfo(deviceId: string | undefined): string | undefined;
    /**
     * Get the Shelly Device type with the serial number of the device back.
     * Device type could be for example SHRGBW2. The serial number of the
     * device like 1234 will be added
     * Example: SHRGBW2#1234#1
     */
    getDeviceId(): string | undefined;
    /**
     * Shelly device configuration exists
     * If missing: Add the configuration in the ./lib/devices directory (see docs)
     */
    deviceExists(): boolean;
    /**
     * Checks if Shelly supports rpc api
     * you have to add a configuration in the ./lib/devices directory
     */
    getDeviceGen(): number;
    /**
     * Returns the url to Shelly knowledge base
     */
    getKnowledgeBaseUrl(): string | undefined;
    isOnline(): boolean;
    getAllTypePublishStates(): DeviceState[];
    /**
     * Missing data will be pulled by HTTP
     */
    httpIoBrokerState(): Promise<void>;
    /**
     * Create objects in shelly.X. for a new Shelly device
     * The Shelly device must exist in the ./lib/devices/gen<X>/ directory
     */
    createObjects(): Promise<boolean>;
    /**
     * delete old states in objects unter shelly.X.
     * For example if the configuration for the device change
     */
    deleteOldStates(): Promise<void>;
    firmwareUpdate(): Promise<void>;
    downloadAllScripts(): Promise<void>;
    /**
     * Look for the ioBroker BLE gateway script on the device and read its version out of the code.
     *
     * @returns information about the installed script or `null` if it is not installed
     */
    /**
     * Perform an HTTP request and retry it if the device answers with 429 (too many requests).
     * Shelly devices reject a request which arrives while they are still busy with another one - and
     * the adapter polls the same device over HTTP in parallel, so that happens easily.
     *
     * @param url path of the request, e.g. `/rpc/Script.List`
     * @param postData body of a POST request. If omitted, a GET request is performed.
     */
    protected requestWithRetry(url: string, postData?: unknown): Promise<string>;
    getBleGatewayScript(): Promise<{
        id: number;
        version: string | null;
        running: boolean;
    } | null>;
    /**
     * All scripts on the device which forward BLE advertisements to this adapter. There is normally
     * one, but a device can end up with several - e.g. if the script was added manually twice. They
     * all have to be found, otherwise an old one keeps running and keeps reporting its version.
     */
    private getBleGatewayScripts;
    /**
     * Read the complete code of a script. The device answers `Script.GetCode` with a limited amount
     * of data and reports the remainder in `left`, so it has to be read in several requests.
     *
     * @param id id of the script on the device
     */
    private getScriptCode;
    /**
     * Install or update the ioBroker BLE gateway script on a Gen2+ device. An already installed
     * script with the current version is not touched, so this can be called for every device.
     *
     * Bluetooth is enabled first if required, because the script refuses to start without it. The
     * code is uploaded in chunks (the device rejects a single large request) and read back
     * afterwards - a `Script.PutCode` which is aborted in the middle leaves an incomplete script on
     * the device, and that must not be reported as success.
     *
     * @param force upload the code even if the installed version is already the expected one
     */
    installBleGatewayScript(force?: boolean): Promise<{
        status: 'installed' | 'updated' | 'uptodate' | 'error';
        version?: string;
        message: string;
        /** Bluetooth was switched on and the device must be restarted before the script can work */
        restartRequired?: boolean;
    }>;
    /**
     * Enable Bluetooth on the device if it is disabled - the gateway script does not run without it.
     *
     * @returns `true` if the device must be restarted to apply the change
     */
    private enableBle;
    private setBleGatewayScriptVersionState;
    destroy(): void;
}
/** Base class shared by the MQTT and CoAP servers (holds adapter/objectHelper/eventEmitter). */
export declare class BaseServer {
    adapter: ShellyAdapter;
    objectHelper: ObjectHelper;
    eventEmitter: EventEmitter;
    constructor(adapter: ShellyAdapter, objectHelper: ObjectHelper, eventEmitter: EventEmitter);
    destroy(): void;
}
