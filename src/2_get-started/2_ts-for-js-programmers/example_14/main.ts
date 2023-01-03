// @errors: 2345
interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

// ---cut---
class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const newVPoint = new VirtualPoint(13, 56);

logPoint(newVPoint); // logs "13, 56"
