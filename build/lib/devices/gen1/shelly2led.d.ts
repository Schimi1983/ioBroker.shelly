import type { DeviceDefinition } from '../../deviceTypes';
/**
 * Shelly LED / SH2LED / shelly2led
 * CoAP:
 *
 * CoAP Version >= 1.8
 *  Shelly 2LED SH2LED-1:    {"blk":[{"I":1,"D":"light_0"},{"I":2,"D":"light_1"},{"I":3,"D":"device"}],"sen":[{"I":9103,"T":"EVC","D":"cfgChanged","R":"U16","L":3},{"I":1101,"T":"S","D":"output","R":"0/1","L":1},{"I":5101,"T":"S","D":"brightness","R":"0/100","L":1},{"I":1201,"T":"S","D":"output","R":"0/1","L":2},{"I":5201,"T":"S","D":"brightness","R":"0/100","L":2}]}
 */
declare const shelly2led: DeviceDefinition;
export { shelly2led };
