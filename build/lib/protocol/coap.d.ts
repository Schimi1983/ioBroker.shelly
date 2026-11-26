import { BaseClient, BaseServer } from './base';
import Shelly, { type CoapStatusPayload } from 'shelly-iot';
import type { EventEmitter } from 'node:events';
import type { ShellyAdapter } from '../../main';
import type ObjectHelper from '../objectHelper';
declare class CoAPClient extends BaseClient {
    /** The shared shelly-iot listener instance. */
    shelly: Shelly;
    listenerus?: (deviceId: string, payload: CoapStatusPayload) => void;
    listenerds?: (deviceId: string, connected: boolean) => void;
    constructor(adapter: ShellyAdapter, objectHelper: ObjectHelper, eventEmitter: EventEmitter, shelly: Shelly, deviceId: string, ip: string, payload: CoapStatusPayload, description: unknown);
    /**
     * @inheritdoc
     */
    getId(): string | undefined;
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
    destroy(): void;
    /**
     * State changes from device will be saved in the ioBroker states
     *
     * @param payload - object can be every type of value
     */
    createIoBrokerState(payload: CoapStatusPayload): Promise<void>;
    start(payload: CoapStatusPayload, description: unknown): Promise<void>;
    listener(): void;
}
export declare class CoAPServer extends BaseServer {
    /** Active CoAP clients by device id. */
    clients: Record<string, CoAPClient>;
    /** Device ids that matched a blacklist entry (cached). */
    blacklist: Record<string, string>;
    constructor(adapter: ShellyAdapter, objectHelper: ObjectHelper, eventEmitter: EventEmitter);
    isBlackListed(deviceId: string | undefined): boolean;
    listen(): void;
    destroy(): void;
}
export {};
