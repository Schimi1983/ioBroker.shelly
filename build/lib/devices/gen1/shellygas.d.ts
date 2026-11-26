import type { DeviceDefinition } from '../../deviceTypes';
/**
 * Shelly Gas / SHGS-1 / shellygas
 * CoAP:
 *  {"blk":[{"I":0,"D":"Device"}],"sen":[{"I":118,"T":"S","D":"Sensor state","R":"unknown/warmup/normal/fault","L":0},{"I":119,"T":"S","D":"Alarm state","R":"unknown/none/mild/heavy/test","L":0},{"I":120,"T":"S","D":"Self-test state","R":"not_completed/completed/running/pending","L":0},{"I":122,"T":"S","D":"Concentration (ppm)","R":"0-65535","L":0}]}
 *
 * CoAP Version >= 1.8
 *  Shelly Gas SHGS-1:    {"blk":[{"I":1,"D":"sensor_0"},{"I":2,"D":"valve_0"},{"I":3,"D":"device"}],"sen":[{"I":9103,"T":"EVC","D":"cfgChanged","R":"U16","L":3},{"I":3113,"T":"S","D":"sensorOp","R":["warmup/normal/fault","unknown"],"L":1},{"I":3114,"T":"S","D":"selfTest","R":"not_completed/completed/running/pending","L":1},{"I":6108,"T":"A","D":"gas","R":["none/mild/heavy/test","unknown"],"L":1},{"I":3107,"T":"C","D":"concentration","U":"ppm","R":["U16","-1"],"L":1},{"I":1105,"T":"S","D":"valve","R":["closed/opened/not_connected/failure/closing/opening/checking","unknown"],"L":2}]}
 */
declare const shellygas: DeviceDefinition;
export { shellygas };
