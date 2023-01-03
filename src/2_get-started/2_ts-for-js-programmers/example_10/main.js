function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj]; // (parameter) obj: string
    }
    return obj;
}
