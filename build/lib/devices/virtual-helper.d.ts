import type { DeviceDefinition } from '../deviceTypes';
/**
 * This module contains helpers to add VIRTUAL COMPONENTS
 *
 * see https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/
 *
 * Components can be added automatically by code or explicitly configured for devices.
 */
/**
 * Component Boolean
 * https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/Boolean
 *
 * Adds a virtual boolean component definition to Gen 2+ devices
 *
 * @param deviceObj
 * @param id
 * @param access ('crw', 'cr', ...)
 * @param addCommon (optional) - Object with additional properties to add to the .Value common object
 */
declare function addBoolean(deviceObj: DeviceDefinition, id: number, access: string, addCommon?: Partial<ioBroker.StateCommon>): void;
/**
 * Component Button
 * https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/Button
 *
 * Adds a virtual button component definition to Gen 2+ devices
 *
 * @param deviceObj
 * @param id
 * @param _access (unused)
 * @param addCommon (optional) - Object with additional properties to add to the .Value common object
 */
declare function addButton(deviceObj: DeviceDefinition, id: number, _access: string, addCommon?: Partial<ioBroker.StateCommon>): void;
/**
 * Component Number
 * https://shelly-api-docs.shelly.cloud/gen2/DynamicComponents/Virtual/Number
 *
 * Adds a virtual Number component definition to Gen 2+ devices
 *
 * @param deviceObj
 * @param id
 * @param access ('crw', 'cr', ...)
 * @param addCommon (optional) - Object with additional properties to add to the .Value common object
 */
declare function addNumber(deviceObj: DeviceDefinition, id: number, access: string, addCommon?: Partial<ioBroker.StateCommon>): void;
export { addBoolean, addButton, addNumber };
