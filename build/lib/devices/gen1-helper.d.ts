import type { DeviceDefinition } from '../deviceTypes';
/**
 * Adds a generic switch definition for gen 1 devices
 *
 * @param deviceObj
 * @param relayId
 */
declare function addRelay(deviceObj: DeviceDefinition, relayId: number): void;
export { addRelay };
