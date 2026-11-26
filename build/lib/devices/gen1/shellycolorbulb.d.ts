import type { DeviceDefinition } from '../../deviceTypes';
/**
 * Shelly Color Bulb  / SHCB-1 / shellycolorbulb
 * CoAP:
 *  color: {"blk":[{"I":0,"D":"RGBW"}],"sen":[{"I":111,"T":"S","D":"Red","R":"0/255","L":0},{"I":121,"T":"S","D":"Green","R":"0/255","L":0},{"I":131,"T":"S","D":"Blue","R":"0/255","L":0},{"I":141,"T":"S","D":"White","R":"0/255","L":0},{"I":151,"T":"S","D":"Gain","R":"0/100","L":0},{"I":161,"T":"S","D":"Temp","R":"3000/6500","L":0},{"I":171,"T":"S","D":"Brightness","R":"0/100","L":0},{"I":181,"T":"S","D":"VSwitch","R":"0/1","L":0}]}
 *  white: {"blk":[{"I":0,"D":"RGBW"}],"sen":[{"I":111,"T":"S","D":"Red","R":"0/255","L":0},{"I":121,"T":"S","D":"Green","R":"0/255","L":0},{"I":131,"T":"S","D":"Blue","R":"0/255","L":0},{"I":141,"T":"S","D":"White","R":"0/255","L":0},{"I":151,"T":"S","D":"Gain","R":"0/100","L":0},{"I":161,"T":"S","D":"Temp","R":"3000/6500","L":0},{"I":171,"T":"S","D":"Brightness","R":"0/100","L":0},{"I":181,"T":"S","D":"VSwitch","R":"0/1","L":0}]}
 *
 * CoAP Version >= 1.8
 *  Shelly Bulb SHBLB-1 color-mode:   {"blk":[{"I":1,"D":"light_0"},{"I":2,"D":"device"}],"sen":[{"I":9103,"T":"EVC","D":"cfgChanged","R":"U16","L":2},{"I":1101,"T":"S","D":"output","R":"0/1","L":1},{"I":5105,"T":"S","D":"red","R":"0/255","L":1},{"I":5106,"T":"S","D":"green","R":"0/255","L":1},{"I":5107,"T":"S","D":"blue","R":"0/255","L":1},{"I":5108,"T":"S","D":"white","R":"0/255","L":1},{"I":5102,"T":"S","D":"gain","R":"0/100","L":1},{"I":5101,"T":"S","D":"brightness","R":"0/100","L":1},{"I":5103,"T":"S","D":"colorTemp","U":"K","R":"3000/6500","L":1},{"I":9101,"T":"S","D":"mode","R":"color/white","L":1}]}
 *  Shelly Bulb SHBLB-1 white-mode:	  {"blk":[{"I":1,"D":"light_0"},{"I":2,"D":"device"}],"sen":[{"I":9103,"T":"EVC","D":"cfgChanged","R":"U16","L":2},{"I":1101,"T":"S","D":"output","R":"0/1","L":1},{"I":5105,"T":"S","D":"red","R":"0/255","L":1},{"I":5106,"T":"S","D":"green","R":"0/255","L":1},{"I":5107,"T":"S","D":"blue","R":"0/255","L":1},{"I":5108,"T":"S","D":"white","R":"0/255","L":1},{"I":5102,"T":"S","D":"gain","R":"0/100","L":1},{"I":5101,"T":"S","D":"brightness","R":"0/100","L":1},{"I":5103,"T":"S","D":"colorTemp","U":"K","R":"3000/6500","L":1},{"I":9101,"T":"S","D":"mode","R":"color/white","L":1}]}
 */
declare const shellycolorbulb: DeviceDefinition;
export { shellycolorbulb };
