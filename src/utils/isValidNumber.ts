export function isValidNumber(str:string) {
    const regex = /^-?\d+(.\d+)?$/; // This will match both integer and floating point numbers
    return regex.test(str);
}