function logPoint(p) {
    console.log(`${p.x}, ${p.y}`);
}
// ---cut---
class VirtualPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
