import type { EventEmitter } from 'node:events';
import { type Connection, type MqttPacket } from 'mqtt-connection';
import * as net from 'node:net';
import { BaseClient, BaseServer } from './base';
import type { ShellyAdapter } from '../../main';
import type ObjectHelper from '../objectHelper';
/** A queued/awaited MQTT message kept for QoS>0 resends, keyed by message id. */
interface CachedMessage {
    ts: number;
    cmd: string;
    count: number;
    message?: MqttPacket;
    resendid?: NodeJS.Timeout;
}
declare class MQTTClient extends BaseClient {
    static clientlist: Record<string, MQTTClient>;
    /** The underlying TCP stream of this MQTT connection. */
    stream: net.Socket;
    /** MQTT topic prefix announced by the device (e.g. `shellyplus1-abc`). */
    mqttprefix: string | undefined;
    /** Running HTTP request for the mqtt prefix, so it is not requested several times in parallel */
    private mqttPrefixLookup;
    /** Pending fragmented/awaited messages by id. */
    messageCache: Record<string, CachedMessage>;
    messageId: number;
    /** The MQTT "last will" packet of the device, once known. */
    will: MqttPacket | undefined;
    /** True while delaying publishes right after a new connection. */
    initializing: boolean;
    /** Publish packets queued during initialization. */
    publishQueue: MqttPacket[];
    /** Commands to the device queued during initialization, because the mqtt prefix was not known yet. */
    commandQueue: {
        topic: string;
        value: any;
    }[];
    /** True while the publish queue is being drained. */
    processingQueue: boolean;
    /** True during destruction, to stop queuing new packets. */
    destroying: boolean;
    /** The mqtt-connection wrapper around the stream (assigned in `start()`, called from the ctor). */
    client: Connection;
    /** Resolve callback for waiting until real IP is received via iobroker-init/rpc (range extender support). */
    private pendingIpFromRpcResolve;
    /** Remote IP address of the TCP connection this MQTT client arrived on. */
    connectIp: string | undefined;
    constructor(adapter: ShellyAdapter, objectHelper: ObjectHelper, eventEmitter: EventEmitter, stream: net.Socket);
    start(): void;
    /**
     * to get sure, that an instance will be start more than one, we check for running instances
     * if an instance run with same name (shellyswitch-12345), we destroy the old instance
     *
     * @param self - my instance
     */
    static _registerRun(self: MQTTClient | undefined): void;
    /**
     * @inheritdoc
     */
    getSerialId(): string;
    /**
     * @inheritdoc
     */
    getDeviceClass(): string;
    /**
     * @inheritdoc
     */
    getDeviceType(): string | undefined;
    /**
     * @inheritdoc
     */
    getDeviceId(): string | undefined;
    getMqttPrefix(): string;
    /**
     * A Gen 2+ device connected through a range extender is reachable at the extender's
     * address and a mapped port only. Ask every extender candidate that shares the remote
     * address for its AP clients and find the entry whose IP matches the device's own IP.
     *
     * Uses `this.connectIp` (the TCP remote address of this device's MQTT connection) to
     * identify range extender candidates: another Gen2+ device whose own IP equals the
     * remote address this connection arrived from is a potential extender.
     *
     * @param deviceIp the device's own IP address (from Shelly.GetDeviceInfo)
     * @returns whether an endpoint was found
     */
    setRangeExtenderHttpEndpoint(deviceIp: string): Promise<boolean>;
    replacePrefixIn(topic: string): string;
    /**
     * Process queued publish packets sequentially
     */
    processPublishQueue(): Promise<void>;
    /**
     * Send the commands which were queued during initialization (mqtt prefix was not known yet)
     */
    processCommandQueue(): void;
    /**
     * Process a single publish packet
     *
     * @param packet - MQTT publish packet
     */
    processPublishPacket(packet: MqttPacket): Promise<void>;
    /**
     * Checks whether the running connect initialization has to be aborted.
     *
     * The connect handler is async, so a device can close the connection while objects are created or
     * HTTP requests are pending - this happens regularly with battery powered devices, which disconnect
     * right after publishing their values. In that case destroy() is already running (and waiting for
     * this initialization), so continuing would work on a half destroyed client.
     *
     * @param step - name of the initialization step (for logging)
     * @returns true if the caller has to stop the initialization
     */
    isInitAborted(step: string): boolean;
    destroy(): Promise<void>;
    /**
     * @inheritdoc
     */
    publishStateValue(topic: string, value: any): void;
    resendState2Client(cmd: string, messageId: number | undefined, message?: MqttPacket): void;
    deleteResendState2Client(messageId: number | undefined): void;
    deleteResendState2ClientFromTopic(topic: string): void;
    getCachedMessage(messageId: number | undefined): CachedMessage | undefined;
    /**
     * State changes from device will be saved in the ioBroker states
     *
     * @param topic
     * @param payload - object can be ervery type of value
     */
    createIoBrokerState(topic: string, payload: Buffer | string): Promise<void>;
    setMqttPrefixHttp(): Promise<string | undefined>;
    /** The actual HTTP request of {@link setMqttPrefixHttp}, without the "already running" handling. */
    private requestMqttPrefixHttp;
    setMqttPrefixByWill(topic: string): string | undefined;
    listener(): void;
}
export declare class MQTTServer extends BaseServer {
    /** The TCP server accepting MQTT connections. */
    private server;
    /** Active MQTT clients keyed by remote address. */
    private clients;
    constructor(adapter: ShellyAdapter, objectHelper: ObjectHelper, eventEmitter: EventEmitter);
    listen(): void;
    /**
     * Find the connected client of a device, e.g. to perform an HTTP request with the credentials
     * and the IP address known by the client.
     *
     * @param deviceId ioBroker device id, e.g. `SNSN-0013A#a1b2c3#1`
     */
    getClientByDeviceId(deviceId: string): MQTTClient | undefined;
    destroy(): void;
}
export {};
