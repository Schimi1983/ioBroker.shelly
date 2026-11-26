import type { DeviceDefinition } from '../../deviceTypes';
/**
 * Shelly Sense / SHSEN-1 / shellysense
 * CoAP:
 *  {"blk":[{"I":1,"D":"sensors"}],"sen":[{"I":11,"D":"motion","T":"S","R":"0/1","L":1},{"I":22,"D":"charger","T":"S","R":"0/1","L":1},{"I":33,"D":"temperature","T":"T","R":"-40/125","L":1},{"I":44,"D":"humidity","T":"H","R":"0/100","L":1},{"I":66,"D":"lux","T":"L","R":"0/1","L":1},{"I":77,"D":"battery","T":"H","R":"0/100","L":1}]}
 *
 * CoAP Version >= 1.8
 *  Shelly Sense SHSEN-1:    {"blk":[{"I":1,"D":"sensor_0"},{"I":2,"D":"device"}],"sen":[{"I":9103,"T":"EVC","D":"cfgChanged","R":"U16","L":2},{"I":3101,"T":"T","D":"extTemp","U":"C","R":["-55/125","999"],"L":1},{"I":3102,"T":"T","D":"extTemp","U":"F","R":["-67/257","999"],"L":1},{"I":3103,"T":"H","D":"humidity","R":["0/100","999"],"L":1},{"I":6107,"T":"A","D":"motion","R":["0/1","-1"],"L":1},{"I":3106,"T":"L","D":"luminosity","U":"lux","R":["U32","-1"],"L":1},{"I":3112,"T":"S","D":"charger","R":["0/1","-1"],"L":2},{"I":3111,"T":"B","D":"battery","R":["0/100","-1"],"L":2}]}
 */
declare const shellysense: DeviceDefinition;
export { shellysense };
