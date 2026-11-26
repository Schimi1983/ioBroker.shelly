import { Adapter, type AdapterOptions } from '@iobroker/adapter-core';
import type { BaseClient } from './lib/protocol/base';
import type { ShellyAdapterConfig } from './lib/types';
export declare class ShellyAdapter extends Adapter {
    config: ShellyAdapterConfig;
    private serverMqtt;
    private serverCoap;
    private firmwareUpdateTimeout;
    private onlineCheckTimeout;
    private deviceScanTimeout;
    private deviceManagement;
    /** Set of device ids currently considered online. */
    private onlineDevices;
    /** MQTT connection state per device id: true = connected, false = disconnected, undefined = not an MQTT device */
    private mqttConnectedDevices;
    /** Consecutive TCP ping failure count per device id. */
    private pingFailureCount;
    private onlineCheckIsStartup;
    private readonly eventEmitter;
    private readonly bleDecoder;
    isUnloaded: boolean;
    private readonly objectHelper;
    constructor(options?: Partial<AdapterOptions>);
    private onReady;
    /**
     * Validates and normalizes the QoS configuration value.
     * This is the central place where config.qos is retrieved and validated.
     * Note: This modifies config.qos as a runtime override only; it does not persist to the configuration file.
     */
    private validateQosConfig;
    private onObjectChange;
    private onStateChange;
    private onFileChange;
    /**
     * @param callback
     */
    private onUnload;
    /**
     * Online-Check via TCP ping (when using CoAP)
     */
    private onlineCheck;
    /**
     * Called by MQTTClient when a device connects or disconnects via MQTT.
     * Updates the Mqtt.connected state and gates online status on MQTT connectivity.
     *
     * @param deviceId - device id
     * @param connected - true when MQTT connection established, false when closed
     * @param ip - remote IP address of the MQTT connection
     */
    mqttConnectionUpdate(deviceId: string | undefined, connected: boolean, ip?: string): Promise<void>;
    deviceStatusUpdate(deviceId: string | undefined, status: boolean): Promise<void>;
    isOnline(deviceId: string | undefined): boolean;
    private getAllDeviceIds;
    private setOnlineFalse;
    private autoFirmwareUpdate;
    private firmwareNotify;
    private deviceScan;
    private convertFromHex;
    private classifyBleDevice;
    processBleMessage(val: unknown): Promise<void>;
    /**
     * Add a gateway to the `receivedBy` list of a BLE device. Gateways which did not receive the
     * device within `bleReceivedByTtlMs` are removed from the list, so a gateway which was switched
     * off or moved away does not stay in the list forever.
     *
     * @param mac MAC address of the BLE device
     * @param src Shelly device id of the gateway which received the message
     * @param rssi signal strength reported by the gateway
     * @param scriptVersion version of the BLE gateway script running on the gateway
     */
    private updateBleReceivedBy;
    /**
     * Connected MQTT client of a device, used by the device manager to talk to the device directly.
     * Only available for the MQTT protocol - Gen2+ devices are not supported by CoAP.
     *
     * @param deviceId ioBroker device id, e.g. `SNSN-0013A#a1b2c3#1`
     */
    getClientByDeviceId(deviceId: string): BaseClient | undefined;
    private removeNamespace;
    private migrateConfig;
}
