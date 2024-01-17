export const clampStr = (str: string, max: number): string => {
    return (str.length >= max) ? str.substring(0, max) + "..." : str;
}
