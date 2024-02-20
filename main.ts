
console.log("entry-point") // main()
/* node main.js */

/* npm run ts-watch */
/* tsc main.ts --watch */

class Box {
    protected x: number
    protected y: number
    protected z: number

    constructor(x: number, y: number, z: number) {
        this.x = x
        this.y = y
        this.z = z
    }

    get volume(): number {
        return this.x * this.y * this.z
    }
}

class BoxWeight extends Box {
    protected weight: number

    constructor(x: number, y: number, z: number, weight: number) {
        super(x, y, z)
        this.weight = weight
    }

}

function main() {
    let box1 = new BoxWeight(10, 10, 10, 60)
    console.log("box1 volume", box1.volume)
}

main()
