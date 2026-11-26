import { DeviceManagement, type ActionContext, type DeviceDetails, type DeviceLoadContext, type DeviceRefresh, type InstanceDetails } from '@iobroker/dm-utils';
import type { ShellyAdapter } from '../main';
/**
 * DeviceManager Class
 */
export default class ShellyDeviceManagement extends DeviceManagement<ShellyAdapter> {
    private config;
    private readonly states;
    private readonly objects;
    constructor(adapter: ShellyAdapter);
    private init;
    protected getInstanceInfo(): InstanceDetails;
    onStateChange(id: string, state: ioBroker.State | null): void;
    /**
     * Connection, signal strength and battery of a device, as shown in the header of its card.
     *
     * @param shortDeviceId device id without the namespace, e.g. `SNSN-0013A#a1b2c3#1`
     */
    private buildDeviceStatus;
    onObjectChange(id: string, obj: ioBroker.DeviceObject | ioBroker.StateObject | ioBroker.ChannelObject | null): void;
    /**
     * Load all shelly devices
     *
     * @param context
     */
    loadDevices(context: DeviceLoadContext<string>): Promise<void>;
    getDeviceDetails(deviceId: string): DeviceDetails<string> | null;
    /**
     * Build customInfo/details items for energy-related states (power, voltage, current, energy,
     * frequency) of a device, based on the state's ioBroker role. Works for any channel naming
     * scheme, so it applies automatically to every device generation that reports these values.
     *
     * @param shortDeviceId device id without adapter namespace
     * @param allowedRoles roles to include (a subset of the keys of ENERGY_ROLE_DIGITS)
     * @param excludedUnits units to skip, e.g. to keep apparent power off the main tile
     */
    private buildEnergyValueItems;
    /**
     * Compose the label of an energy item as `<channel> <datapoint name>`.
     *
     * common.name of a created object is always a translation object (objectHelper resolves the
     * English key on creation), so the channel prefix has to be merged into every language.
     * Multi-phase meters name all phases alike (VoltageA/B/C are all called "Voltage"), therefore a
     * trailing phase letter of the state id is appended unless the name already carries it ('Current N').
     *
     * @param channelLabel readable channel name, e.g. 'EM 0'
     * @param suffix state id without the device prefix, e.g. 'EM0.VoltageA'
     * @param name common.name of the state object
     */
    private buildEnergyLabel;
    private getBleDeviceDetails;
    private classifyBleDevice;
    private getDeviceGroup;
    /**
     * Age of a timestamp in a short readable form: `45 s`, `12 min`, `3 h`, `2 d`.
     *
     * @param ts timestamp in milliseconds
     */
    private static formatAge;
    private buildCustomInfo;
    private buildControls;
    getIcon(deviceId: string): string;
    /**
     *
     * @param id ID to rename
     * @param context context sendet from Backend
     */
    handleRenameDevice(id: string, context: ActionContext): Promise<{
        refresh: DeviceRefresh;
    }>;
    /**
     * Delete an unreachable device and all of its objects/states.
     * Only offered for offline devices – a reachable device would just recreate its objects.
     *
     * @param id full object id of the device (e.g. shelly.0.shellyplus1-xxxxxx)
     * @param context context sent from the backend, used to confirm the destructive action
     */
    handleDeleteDevice(id: string, context: ActionContext): Promise<{
        refresh: DeviceRefresh;
    } | {
        delete: string;
    }>;
    /**
     * While a progress dialog is open, the device manager GUI waits only five seconds for the next
     * message from the adapter and otherwise reports "No response from the backend". Installing a
     * script takes longer than that, so the dialog is updated regularly - every update is such a
     * message. The returned function stops the heartbeat again.
     *
     * @param progress the open progress dialog
     * @param label text to show in the dialog
     */
    private static startProgressHeartbeat;
    /**
     * Install or update the BLE gateway script on one device.
     *
     * @param id full object id of the device
     * @param context action context of the device manager
     */
    handleBleScriptInstall(id: string, context: ActionContext): Promise<{
        refresh: DeviceRefresh;
    }>;
    /**
     * Update the BLE gateway script on every device which already has it installed. Devices without
     * the script are not touched - installing it everywhere is done per device on purpose.
     *
     * @param context action context of the device manager
     */
    handleUpdateAllBleScripts(context: ActionContext): Promise<{
        refresh: boolean;
    }>;
    /**
     * Run the script installation on the connected client of a device.
     *
     * @param shortDeviceId device id without the namespace, e.g. `SNSN-0013A#a1b2c3#1`
     */
    private installBleGatewayScript;
    handleFirmwareUpdate(id: string, context: ActionContext): Promise<{
        refresh: DeviceRefresh;
    }>;
    private mdnsScan;
    private buildMdnsQuery;
    private parseDnsName;
    handleDiscoverDevices(context: ActionContext): Promise<{
        refresh: boolean;
    }>;
    /**
     * Extract device type prefix from mDNS name, e.g. "ShellyPlusI4-841FE8F9D9E8" → "shellyplusi4-"
     *
     * @param name
     */
    private getDevicePrefix;
    /**
     * Determine if a device found via mDNS is a Gen 1 device.
     * Gen 1 devices use CoAP and should not be offered for MQTT provisioning via the Device Manager.
     * Returns true only if the device is positively identified as Gen 1 in the known device list.
     * Unknown devices return false (they will pass through and fail gracefully at provisioning if needed).
     *
     * @param name mDNS device name (e.g. "shelly1-AABBCC" or "ShellyPlus1-XXXXXXXXXXXX")
     */
    private isGen1DeviceByName;
    /**
     * Compute the MQTT ID from device mDNS name and custom name.
     * Returns empty string if no custom name is provided.
     *
     * @param deviceName mDNS device name (e.g. "ShellyPlus1-44179394D4D4")
     * @param customName User-provided custom name
     */
    private computeMqttId;
    private provisionDevices;
    private provisionSingleDevice;
    private provisionGen1;
    private provisionGen2;
    private getLocalIp;
    /**
     * Fetch the device name from the device. Try without auth first, then with configured password.
     * Returns empty string if the name cannot be read.
     *
     * @param ip
     * @param httpPass
     */
    private fetchDeviceName;
    private detectDeviceGen;
    private httpGet;
    private httpPost;
    /**
     * Scan for new Shelly devices and return names/IPs of unknown ones.
     */
    scanForNewDevices(): Promise<{
        name: string;
        ip: string;
    }[]>;
    destroy(): Promise<void>;
}
