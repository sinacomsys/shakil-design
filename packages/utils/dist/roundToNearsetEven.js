"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRoundToNearestEven = void 0;
var utils_1 = require("@shakil-design/utils");
function useRoundToNearestEven() {
  var height = (0, utils_1.useWindowSize)().height;
  var round = function (number) {
    var rounded = Math.ceil(number);
    var isRoundedOdd = rounded % 2 !== 0;
    if (isRoundedOdd) {
      return rounded + 1;
    } else return rounded;
  };
  function roundToNearestEven(value) {
    var vh = height / 100;
    return round(vh * (0, utils_1.pxToVh)(value));
  }
  return {
    roundToNearestEven: roundToNearestEven,
  };
}
exports.useRoundToNearestEven = useRoundToNearestEven;
//# sourceMappingURL=roundToNearsetEven.js.map
