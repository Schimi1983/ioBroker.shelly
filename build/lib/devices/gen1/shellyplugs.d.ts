import type { DeviceDefinition } from '../../deviceTypes';
/**
 * Shelly Plug S / SHPLG-S, SHPLG2-1 / shellyplug-s
 * CoAP
 *  {"blk":[{"I":0,"D":"Relay0"}],"sen":[{"I":111,"T":"P","D":"Power","R":"0/2500","L":0},{"I":112,"T":"S","D":"State","R":"0/1","L":0},{"I":113,"T":"T","D":"Temperature C","R":"-40/300","L":0},{"I":114,"T":"T","D":"Temperature F","R":"-40/300","L":0},{"I":115,"T":"S","D":"Overtemp","R":"0/1","L":0},{"I":211,"T":"S","D":"Energy counter 0 [W-min]","L":0},{"I":212,"T":"S","D":"Energy counter 1 [W-min]","L":0},{"I":213,"T":"S","D":"Energy counter 2 [W-min]","L":0},{"I":214,"T":"S","D":"Energy counter total [W-min]","L":0}]}
 *
 * CoAP Version >= 1.8
 *  Shelly Plug S SHPLG-S:    {"blk":[{"I":1,"D":"relay_0"},{"I":2,"D":"device"}],"sen":[{"I":9103,"T":"EVC","D":"cfgChanged","R":"U16","L":2},{"I":1101,"T":"S","D":"output","R":"0/1","L":1},{"I":4101,"T":"P","D":"power","U":"W","R":["0/2500","-1"],"L":1},{"I":4103,"T":"E","D":"energy","U":"Wmin","R":["U32","-1"],"L":1},{"I":6102,"T":"A","D":"overpower","R":["0/1","-1"],"L":1},{"I":6109,"T":"P","D":"overpowerValue","U":"W","R":["U32","-1"],"L":1},{"I":3104,"T":"T","D":"deviceTemp","U":"C","R":["-40/300","999"],"L":2},{"I":3105,"T":"T","D":"deviceTemp","U":"F","R":["-40/572","999"],"L":2},{"I":6101,"T":"A","D":"overtemp","R":["0/1","-1"],"L":2}]}
 */
declare const shellyplugs: DeviceDefinition;
export { shellyplugs };
