/**
 * Small, dependency-free color-space conversions used by the RGB(W) Shelly light devices.
 *
 * Both functions work with the ranges Shelly/ioBroker use in their states:
 *   - hue        `h` in [0, 360]
 *   - saturation `s` in [0, 100]
 *   - value      `v` in [0, 100]
 *   - r, g, b    in [0, 255]
 *
 * Adapted from the formulas at http://en.wikipedia.org/wiki/HSV_color_space.
 */
/** A red/green/blue or hue/saturation/value triple. */
export type ColorTriple = [number, number, number];
/**
 * Converts an RGB color value to HSV.
 *
 * @param r - red color value [0, 255]
 * @param g - green color value [0, 255]
 * @param b - blue color value [0, 255]
 * @returns `[hue (0-360), saturation (0-100), value (0-100)]`
 */
export declare function rgbToHsv(r: number, g: number, b: number): ColorTriple;
/**
 * Converts an HSV color value to RGB.
 *
 * @param h - hue [0, 360]
 * @param s - saturation [0, 100]
 * @param v - value [0, 100]
 * @returns `[red (0-255), green (0-255), blue (0-255)]`
 */
export declare function hsvToRgb(h: number, s: number, v: number): ColorTriple;
