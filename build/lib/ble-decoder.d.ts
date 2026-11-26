declare class BleDecoder {
    utoi(num: number, bitsz: number): number;
    getUInt8(buffer: Buffer): number;
    getInt8(buffer: Buffer): number;
    getUInt16LE(buffer: Buffer): number;
    getInt16LE(buffer: Buffer): number;
    getUInt24LE(buffer: Buffer): number;
    getInt24LE(buffer: Buffer): number;
    getUInt32LE(buffer: Buffer): number;
    getInt32LE(buffer: Buffer): number;
    getBufValue(type: number, buffer: Buffer): number | null;
    getByteSize(type: number): number;
    unpack(buffer: Buffer, encryptedPayload?: boolean): Record<string, unknown> | null;
}
export { BleDecoder };
