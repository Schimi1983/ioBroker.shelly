import type { DeviceDefinition } from '../../deviceTypes';
/**
 * Frankever Smart Sprinkler Controller / irrigation
 *
 * Shelly XT1 based irrigation controller (product code S3XT-0S).
 * The device does not report a device type, so 'irrigation' is used as deviceId
 * (client-id reported by the device is e.g. 'irrigation-b08184ee0488').
 *
 * The irrigation functionality is provided by an XMOD service (owner "service:0")
 * exposing typed virtual components (Boolean/Number/Enum/Object) per role.
 *
 * https://shelly-api-docs.shelly.cloud/gen2/Devices/ShellyX/XT1/IrrigationController
 * https://www.shelly.com/products/frankever-smart-sprinkler-controller-fk-06x
 */
declare const irrigation: DeviceDefinition;
export { irrigation };
