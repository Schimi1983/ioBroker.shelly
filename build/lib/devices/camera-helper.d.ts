import type { DeviceDefinition } from '../deviceTypes';
/**
 * Adds a generic camera definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Camera
 *
 * @param deviceObj
 * @param cameraId
 */
declare function addCamera(deviceObj: DeviceDefinition, cameraId: number): void;
/**
 * Adds a generic camera zone definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/CameraZone
 *
 * @param deviceObj
 * @param zoneId
 */
declare function addCameraZone(deviceObj: DeviceDefinition, zoneId: number): void;
/**
 * Adds a generic streamer definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Streamer
 *
 * The Streamer component only exposes WebRTC action methods (Offer/Answer/GetAnswer/
 * SetStreamSource/StopStream) and has no status or config states of its own; the streamer
 * state and version are published by (and located at) the Camera component. This is a
 * placeholder for future streamer states.
 *
 * @param _deviceObj
 * @param _streamerId
 */
declare function addStreamer(_deviceObj: DeviceDefinition, _streamerId: number): void;
/**
 * Adds a generic storage definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Storage
 *
 * @param deviceObj
 * @param storageId
 */
declare function addStorage(deviceObj: DeviceDefinition, storageId: number): void;
export { addCamera, addCameraZone, addStreamer, addStorage };
