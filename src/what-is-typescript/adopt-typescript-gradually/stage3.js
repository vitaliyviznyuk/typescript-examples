// Using JSDoc to give type information

// @ts-check

/** @param {any[]} arr */
function compact(arr) {
    if (arr.length > 10)
        return arr.trim(0, 10) // Now TS has found a bad call. Arrays have slice, not trim

    return arr
}
