import type { DeviceDefinition } from '../deviceTypes';
/**
 * Naming convention (for new entries)
 *
 * devices are named like shelly components, i.e. Light, EM, PM1, ...
 * id follows componentname without seperator if component does not end with a number (Light - Light0, EM - EM0, ...)
 * id follows componentname with seperator ':' if component ends with a number (EM1 - EM1:0, ...)
 */
/**
 * Adds a generic analog input sensor definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Input/
 *
 * @param deviceObj
 * @param inputId
 */
declare function addAnalogInput(deviceObj: DeviceDefinition, inputId: number): void;
/**
 * Adds a generic CCT light definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/CCT
 *
 * @param deviceObj
 * @param cctId
 * @param hasPowerMetering
 */
declare function addCCT(deviceObj: DeviceDefinition, cctId: number, hasPowerMetering: boolean): void;
/**
 * Adds a generic counter input definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Input/
 *
 * @param deviceObj
 * @param inputId
 */
declare function addCounterInput(deviceObj: DeviceDefinition, inputId: number): void;
/**
 * Adds a generic cover definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Cover
 *
 * @param deviceObj
 * @param coverId
 * @param hasSlat
 */
declare function addCover(deviceObj: DeviceDefinition, coverId: number, hasSlat: boolean): void;
/**
 * Adds a Cury component definition for Gen 2+ devices (Powered by Shelly)
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/Devices/PoweredByShelly/ShellyCury#cury-1
 *
 * @param deviceObj
 * @param curyId
 */
declare function addCury(deviceObj: DeviceDefinition, curyId: number): void;
/**
 * Adds a generic power definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/DevicePower
 *
 * @param deviceObj
 * @param devicePowerId
 * @param hasExternalPower
 */
declare function addDevicePower(deviceObj: DeviceDefinition, devicePowerId: number, hasExternalPower: boolean): void;
/**
 * Adds a generic energymeter definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/EM
 *
 * @param deviceObj
 * @param emId
 * @param phases
 */
declare function addEM(deviceObj: DeviceDefinition, emId: number, phases: (string | number)[]): void;
/**
 * Adds a generic energymeter definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/EM1
 *
 * @param deviceObj
 * @param emId
 * @param addEM1Data - NOTE: Only present for backwards compatibility, for new devices every component should be added individually
 */
declare function addEM1(deviceObj: DeviceDefinition, emId: number, addEM1Data: boolean): void;
/**
 * Adds a generic energymeter data definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/EM1Data
 *
 * @param deviceObj
 * @param emId
 */
declare function addEM1Data(deviceObj: DeviceDefinition, emId: number): void;
/**
 * Adds a generic energymeter data definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/EMData
 *
 * @param deviceObj
 * @param emId
 * @param phases
 */
declare function addEMData(deviceObj: DeviceDefinition, emId: number, phases: (string | number)[]): void;
/**
 * Adds a generic Temp-Sensor definition for Shelly Pro3EM63 devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Temperature
 *
 * @param deviceObj
 */
declare function addEMTemperatureSensor(deviceObj: DeviceDefinition): void;
/**
 * Adds a generic flood component definition for Shelly Gen2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Flood
 *
 * @param deviceObj
 * @param floodId
 */
declare function addFlood(deviceObj: DeviceDefinition, floodId: number): void;
/**
 * Adds a generic humidity sensor definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Humidity
 *
 * @param deviceObj
 * @param sensorId
 */
declare function addHumiditySensor(deviceObj: DeviceDefinition, sensorId: number): void;
/**
 * Adds a generic Illuminance sensor definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Illuminance
 *
 * @param deviceObj
 * @param sensorId
 */
declare function addIlluminanceSensor(deviceObj: DeviceDefinition, sensorId: number): void;
/**
 * Adds a generic digital (switch, button) input definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Input
 *
 * @param deviceObj
 * @param inputId
 */
declare function addInput(deviceObj: DeviceDefinition, inputId: number): void;
/**
 * Adds a generic light definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Light
 *
 * @param deviceObj
 * @param lightId
 * @param hasPowerMetering
 */
declare function addLight(deviceObj: DeviceDefinition, lightId: number, hasPowerMetering: boolean): void;
/**
 * Adds a generic PM definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/PM1
 *
 * @param deviceObj
 * @param pmId
 */
declare function addPM1(deviceObj: DeviceDefinition, pmId: number): void;
/**
 * Adds states for the PLUGS_UI component used by Shelly Plug* (gen 2+)
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/0.14/Devices/ShellyPlusPlugS#plugs_ui
 *
 * @param deviceObj
 */
declare function addPlugsUI(deviceObj: DeviceDefinition): void;
/**
 * Adds states for the PLUGPM_UI component used by Shelly Plug PM (gen 3+)
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyPlugPMG3#plugpm_ui
 *
 * @param deviceObj
 */
declare function addPlugpmUI(deviceObj: DeviceDefinition): void;
/**
 * Adds states for the Shelly Plus AddOn
 * see
 * https://kb.shelly.cloud/knowledge-base/shelly-plus-add-on
 * https://shelly-api-docs.shelly.cloud/gen2/Addons/ShellySensorAddon
 *
 * @param deviceObj
 */
declare function addPlusAddon(deviceObj: DeviceDefinition): void;
/**
 * Adds a generic presence component definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Presence
 *
 * @param deviceObj
 */
declare function addPresence(deviceObj: DeviceDefinition): void;
/**
 * Adds states for the Shelly PresenceZone component
 * see https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/PresenceZone
 *
 * @param deviceObj
 * @param zoneId
 */
declare function addPresenceZone(deviceObj: DeviceDefinition, zoneId: number): void;
/**
 * Adds states for the Shelly Pro Output Add-On
 * see
 * https://kb.shelly.cloud/knowledge-base/shelly-pro-3em-switch-add-on
 * https://shelly-api-docs.shelly.cloud/gen2/Addons/ShellyProOutputAddon
 *
 * @param deviceObj
 */
declare function addProOutputAddon(deviceObj: DeviceDefinition): void;
/**
 * Adds a generic RGB light definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/RGB
 *
 * @param deviceObj
 * @param rgbId
 * @param hasPowerMetering
 */
declare function addRGB(deviceObj: DeviceDefinition, rgbId: number, hasPowerMetering: boolean): void;
/**
 * Adds a generic RGBW light definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/RGBW
 *
 * @param deviceObj
 * @param rgbwId
 * @param hasPowerMetering
 */
declare function addRGBW(deviceObj: DeviceDefinition, rgbwId: number, hasPowerMetering: boolean): void;
/**
 * Adds a generic RGBCCT light definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/RGBCCT
 *
 * @param deviceObj
 * @param rgbcctId
 * @param hasPowerMetering
 */
declare function addRGBCCT(deviceObj: DeviceDefinition, rgbcctId: number, hasPowerMetering: boolean): void;
/**
 * Adds a generic switch definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Switch
 *
 * @param deviceObj
 * @param switchId
 * @param hasPowerMetering
 */
declare function addSwitch(deviceObj: DeviceDefinition, switchId: number, hasPowerMetering: boolean): void;
/**
 * Adds a generic temperature sensor definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Temperature
 *
 * @param deviceObj
 * @param sensorId
 */
declare function addTemperatureSensor(deviceObj: DeviceDefinition, sensorId: number): void;
/**
 * Adds a generic voltmeter sensor definition for Gen 2+ devices
 * see
 * https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Voltmeter
 *
 * @param deviceObj
 * @param sensorId
 */
declare function addVoltmeterSensor(deviceObj: DeviceDefinition, sensorId: number): void;
export { addAnalogInput, addCCT, addCounterInput, addCover, addCury, addDevicePower, addEM, addEM1, addEM1Data, addEMData, addEMTemperatureSensor, addFlood, addHumiditySensor, addIlluminanceSensor, addInput, addLight, addPlugpmUI, addPlugsUI, addPlusAddon, addPM1, addPresence, addPresenceZone, addProOutputAddon, addRGB, addRGBCCT, addRGBW, addSwitch, addTemperatureSensor, addVoltmeterSensor, };
