export function isObjectEmpty(data: Record<string | number | symbol, unknown>): boolean {
    return Object.keys(data)?.length === 0;
};