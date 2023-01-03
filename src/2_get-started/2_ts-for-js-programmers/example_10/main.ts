function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj]; // (parameter) obj: string
    }
    return obj;
}
