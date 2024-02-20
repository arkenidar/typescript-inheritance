"use strict";
console.log("entry-point"); // main()
/* node main.js */
/* npm run ts-watch */
/* tsc main.ts --watch */
class Box {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    get volume() {
        return this.x * this.y * this.z;
    }
}
class BoxWeight extends Box {
    constructor(x, y, z, weight) {
        super(x, y, z);
        this.weight = weight;
    }
}
function main() {
    let box1 = new BoxWeight(10, 10, 10, 60);
    console.log("box1 volume", box1.volume);
}
main();
