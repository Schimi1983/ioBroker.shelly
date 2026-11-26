import type { DeviceDefinition } from '../../deviceTypes';
/**
 * Shelly Door/Windows Sensor / SHDW-1 / shellydw
 * CoAP:
 *  {"blk":[{"I":1,"D":"sensors"}],"sen":[{"I":66,"D":"lux","T":"L","R":"0/100000","L":1},{"I":55,"D":"State","T":"S","R":"0/1","L":1},{"I":77,"D":"battery","T":"B","R":"0/100","L":1},{"I":88,"D":"tilt","T":"S","R":"0/180","L":1},{"I":99,"D":"vibration","T":"S","R":"0/1","L":1}]}
 *
 * CoAP Version >= 1.8
 *  Shelly Door Window SHDW-1:    {"blk":[{"I":1,"D":"sensor_0"},{"I":2,"D":"device"}],"sen":[{"I":9103,"T":"EVC","D":"cfgChanged","R":"U16","L":2},{"I":3108,"T":"S","D":"dwIsOpened","R":["0/1","-1"],"L":1},{"I":3109,"T":"S","D":"tilt","U":"deg","R":["0/180","-1"],"L":1},{"I":6110,"T":"A","D":"vibration","R":["0/1","-1"],"L":1},{"I":3106,"T":"L","D":"luminosity","U":"lux","R":["U32","-1"],"L":1},{"I":3110,"T":"S","D":"luminosityLevel","R":["dark/twilight/bright","unknown"],"L":1},{"I":3115,"T":"S","D":"sensorError","R":"0/1","L":1},{"I":3111,"T":"B","D":"battery","R":["0/100","-1"],"L":2},{"I":9102,"T":"EV","D":"wakeupEvent","R":["battery/button/periodic/poweron/sensor/alarm","unknown"],"L":2}]}
 */
declare const shellydw: DeviceDefinition;
export { shellydw };
