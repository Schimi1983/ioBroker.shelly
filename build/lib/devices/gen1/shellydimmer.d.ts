import type { DeviceDefinition } from '../../deviceTypes';
/**
 * Shelly Dimmer / SHDM-1 / shellydimmer
 * CoAP:
 *  {"3332":"SHDM-1#D47EBD#1"} / {"blk":[{"I":0,"D":"Dimmer"}],"sen":[{"I":111,"T":"S","D":"Brightness","R":"0/100","L":0},{"I":121,"T":"S","D":"State","R":"0/1","L":0},{"I":131,"T":"S","D":"Input","R":"0(off)/1(on)/2(longpush)","L":0},{"I":141,"T":"S","D":"Input","R":"0(off)/1(on)/2(longpush)","L":0},{"I":211,"T":"S","D":"Energy counter 0 [W-min]","L":0},{"I":212,"T":"S","D":"Energy counter 1 [W-min]","L":0},{"I":213,"T":"S","D":"Energy counter 2 [W-min]","L":0},{"I":214,"T":"S","D":"Energy counter total [W-min]","L":0},{"I":311,"T":"T","D":"Temperature C","R":"-40/300","L":0},{"I":312,"T":"T","D":"Temperature F","R":"-40/300","L":0},{"I":313,"T":"S","D":"Overtemp","R":"0/1","L":0}]}
 *
 * CoAP Version >= 1.8
 *  Shelly Dimmer SHDM-1:    {"blk":[{"I":1,"D":"light_0"},{"I":2,"D":"input_0"},{"I":3,"D":"input_1"},{"I":4,"D":"device"}],"sen":[{"I":9103,"T":"EVC","D":"cfgChanged","R":"U16","L":4},{"I":1101,"T":"S","D":"output","R":"0/1","L":1},{"I":5101,"T":"S","D":"brightness","R":"1/100","L":1},{"I":2101,"T":"S","D":"input","R":"0/1","L":2},{"I":2102,"T":"EV","D":"inputEvent","R":["S/L",""],"L":2},{"I":2103,"T":"EVC","D":"inputEventCnt","R":"U16","L":2},{"I":2201,"T":"S","D":"input","R":"0/1","L":3},{"I":2202,"T":"EV","D":"inputEvent","R":["S/L",""],"L":3},{"I":2203,"T":"EVC","D":"inputEventCnt","R":"U16","L":3},{"I":4101,"T":"P","D":"power","U":"W","R":["0/230","-1"],"L":1},{"I":4103,"T":"E","D":"energy","U":"Wmin","R":["U32","-1"],"L":1},{"I":6102,"T":"A","D":"overpower","R":["0/1","-1"],"L":1},{"I":6104,"T":"A","D":"loadError","R":"0/1","L":1},{"I":3104,"T":"T","D":"deviceTemp","U":"C","R":["-40/300","999"],"L":4},{"I":3105,"T":"T","D":"deviceTemp","U":"F","R":["-40/572","999"],"L":4},{"I":6101,"T":"A","D":"overtemp","R":["0/1","-1"],"L":4},{"I":9101,"T":"S","D":"mode","R":"color/white","L":4}]}
 */
declare const shellydimmer: DeviceDefinition;
export { shellydimmer };
