"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRoundToNearestEven = void 0;
var convertUnit_1 = require("./convertUnit");
var useWindowSize_1 = require("./useWindowSize");
function useRoundToNearestEven() {
    var height = (0, useWindowSize_1.useWindowSize)().height;
    var round = function (number) {
        var rounded = Math.ceil(number);
        var isRoundedOdd = rounded % 2 !== 0;
        if (isRoundedOdd) {
            return rounded + 1;
        }
        else
            return rounded;
    };
    function roundToNearestEven(value) {
        var vh = height / 100;
        return round(vh * (0, convertUnit_1.pxToVh)(value));
    }
    return {
        roundToNearestEven: roundToNearestEven,
    };
}
exports.useRoundToNearestEven = useRoundToNearestEven;
//# sourceMappingURL=roundToNearsetEven.js.map