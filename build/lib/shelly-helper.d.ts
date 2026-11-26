import type { ShellyClient } from './deviceTypes';
export declare const RELAYED_NONE = 0;
export declare const RELAYED_RANGE_EXTENDER = 1;
export declare const RELAYED_VPN = 2;
declare function getIcon(key: string): string;
/**
 * Celsius to Fahrenheit
 *
 * @param celsius - 10
 */
declare function celsiusToFahrenheit(celsius: number): number | undefined;
/**
 * Fahrenheit to Celsius
 *
 * @param fahrenheit - 20
 */
declare function fahrenheitToCelsius(fahrenheit: number): number | undefined;
/**
 *
 * @param self
 * @param name - Name of the device
 */
declare function setDeviceName(self: ShellyClient, name: string): Promise<string>;
/**
 *
 * @param self
 * @param id - channel id like Relay0
 * @param name - Name of the channel
 */
declare function setChannelName(self: ShellyClient, id: string, name: string): Promise<string>;
/** Parsed device payload carrying external temperature sensors, e.g. `{ ext_temperature: { '0': { tC, tF } } }`. */
interface ExtTemperaturePayload {
    ext_temperature?: Record<string, Record<string, number>>;
}
/** Parsed device payload carrying external humidity sensors, e.g. `{ ext_humidity: { '0': { hum } } }`. */
interface ExtHumidityPayload {
    ext_humidity?: Record<string, {
        hum: number;
    }>;
}
/**
 * Get external temperature for a device with a key in unit C or F
 *
 * @param value - like JSON.parse(value)
 * @param key  - '0', '1', ....
 * @param unit . 'C' or 'F'
 */
declare function getExtTemp(value: ExtTemperaturePayload | null | undefined, key: string, unit: string): number | null;
/**
 * Get external humidity for the device with key
 *
 * @param value - like JSON.parse(value)
 * @param key  - '0', '1', ....
 */
declare function getExtHum(value: ExtHumidityPayload | null | undefined, key: string): number | null;
/**
 *
 * @param self
 */
declare function getLightsObjectColor(self: ShellyClient): Promise<Record<string, ioBroker.StateValue | undefined>>;
declare function getLightsObjectWhite(self: ShellyClient): Promise<Record<string, ioBroker.StateValue | undefined>>;
/**
 * get the hex value for an integer value
 *
 * @param number like 10 or 99
 */
declare function intToHex(number: number): string;
/**
 * get the integer value for a hex value
 *
 * @param hex like 0A or FF
 */
declare function hextoInt(hex: string): number;
/**
 * get the RGBW value for red, green, blue, white value
 *
 * @param self
 */
declare function getRGBW(self: ShellyClient): Promise<string>;
declare function getColorsFromRGBW(value?: string): {
    red: number;
    green: number;
    blue: number;
    white: number;
};
declare function getHsvFromRgb(self: ShellyClient): Promise<{
    hue: number;
    saturation: number;
    brightness: number;
}>;
declare function getColorsFromHue(self: ShellyClient): Promise<{
    red: number;
    green: number;
    blue: number;
}>;
declare function getPowerFactor(self: ShellyClient, channel: number | string): Promise<number>;
/**
 * For EM3, it was not a good idea to implement this function. To far away from a standard
 *
 * @param self
 */
declare function getTotalSumm(self: ShellyClient): Promise<number>;
declare function getTotalReturnedSumm(self: ShellyClient): Promise<number>;
/**
 * For EM3, it was not a good idea to implement this function. To far away from a standard
 *
 * @param self
 */
declare function getCurrentSumm(self: ShellyClient): Promise<number>;
/**
 * For EM3, it was not a good idea to implement this function. To far away from a standard
 *
 * @param self
 */
declare function getPowerSumm(self: ShellyClient): Promise<number>;
/**
 * For EM3, it was not a good idea to implement this function. To far away from a standard
 *
 * @param self
 * @param vtype
 */
declare function getVoltageCalc(self: ShellyClient, vtype: string): Promise<number>;
/**
 * Timer
 *
 * @param self
 * @param id - e.g. 'Relay0.Timer'
 * @param [newVal] - e.g. 10
 */
declare function getSetDuration(self: ShellyClient, id: string, newVal?: number): Promise<number | undefined>;
/**
 * Get a favorite position
 *
 * @param self
 * @param id
 */
declare function getFavoritePosition(self: ShellyClient, id: string): Promise<ioBroker.StateValue | undefined>;
/**
 * Get state
 *
 * @param self
 * @param id
 */
declare function getState(self: ShellyClient, id: string): Promise<ioBroker.StateValue | undefined>;
/**
 * Creates/updates dynamic apClients.{mac}.* states from a WiFi.ListAPClients response.
 * Returns the number of currently connected clients (used as the WiFi.apClientCount state value).
 *
 * @param self - the live ShellyClient
 * @param value - raw JSON response body from /rpc/WiFi.ListAPClients
 */
declare function updateWifiApClients(self: ShellyClient, value: string): Promise<number | undefined>;
/**
 * Splits a hostname state value into host and port. A device behind a range extender
 * is stored as "address:port", everything else answers on port 80.
 *
 * @param hostname value of the hostname state
 */
declare function parseHostnameWithPort(hostname: string): {
    hostname: string;
    port: number;
};
export { getIcon, parseHostnameWithPort, celsiusToFahrenheit, fahrenheitToCelsius, setDeviceName, setChannelName, getExtTemp, getExtHum, getLightsObjectColor, getLightsObjectWhite, intToHex, hextoInt, getHsvFromRgb, getColorsFromHue, getColorsFromRGBW, getPowerFactor, getTotalSumm, getTotalReturnedSumm, getCurrentSumm, getPowerSumm, getVoltageCalc, getSetDuration, getFavoritePosition, getRGBW, getState, updateWifiApClients, };
