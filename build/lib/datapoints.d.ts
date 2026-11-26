import type { DeviceDefinition } from './deviceTypes';
declare const devices: Record<string, DeviceDefinition>;
declare const deviceGen: Record<string, number>;
/** Map device class to group key */
declare const deviceGroupMap: Record<string, string>;
declare const deviceIcons: Record<string, string>;
declare const deviceKnowledgeBase: Record<string, string | undefined>;
declare const deviceTypes: Record<string, string[]>;
/**
 * Poll time of battery-powered devices (sec)
 */
declare const pollTime: Record<string, number>;
declare function getDeviceByClass(deviceClass: string, protocol: 'coap' | 'mqtt', mode?: string, firmwareVersion?: string): DeviceDefinition | undefined;
declare function getDeviceClassByType(deviceType: string | undefined): string | undefined;
declare function getDeviceIcon(deviceClass: string): string;
declare function getDeviceGen(deviceClass: string): number;
declare function getDeviceGroupByClass(deviceClass: string): string;
declare function getDeviceTypeByClass(deviceClass: string): string | undefined;
declare function getKnowledgeBaseUrlByClass(deviceClass: string): string | undefined;
declare function getPollTime(deviceClass: string): number | undefined;
declare function getAllDeviceDefinitions(): Record<string, DeviceDefinition>;
export { getAllDeviceDefinitions, getDeviceByClass, getDeviceClassByType, getDeviceGroupByClass, getDeviceGen, getDeviceIcon, getDeviceTypeByClass, getKnowledgeBaseUrlByClass, getPollTime, devices, deviceGen, deviceGroupMap, deviceIcons, deviceKnowledgeBase, deviceTypes, pollTime, };
