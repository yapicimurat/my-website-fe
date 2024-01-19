export const clampStr = (str: string, max: number): string => {
    return (str.length >= max) ? str.substring(0, max) + "..." : str;
}

export const clamp = (val: number, min: number, max: number): number => {
    return Math.min(Math.max(val, min), max);
}
