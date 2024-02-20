var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("entry-point"); // main()
/* node main.js */
/* npm run ts-watch */
/* tsc main.ts --watch */
var Box = /** @class */ (function () {
    function Box(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Object.defineProperty(Box.prototype, "volume", {
        get: function () {
            return this.x * this.y * this.z;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var BoxWeight = /** @class */ (function (_super) {
    __extends(BoxWeight, _super);
    function BoxWeight(x, y, z, weight) {
        var _this = _super.call(this, x, y, z) || this;
        _this.weight = weight;
        return _this;
    }
    return BoxWeight;
}(Box));
function main() {
    var box1 = new BoxWeight(10, 10, 10, 60);
    console.log("box1 volume", box1.volume);
}
main();
