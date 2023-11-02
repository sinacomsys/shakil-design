"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pxToVwString = exports.pxToVw = exports.pxToVhString = exports.pxToVh = void 0;
var pxToVh = function (value) {
    return value / 10.8;
};
exports.pxToVh = pxToVh;
var pxToVhString = function (value) {
    return "".concat(value / 10.8, "vh");
};
exports.pxToVhString = pxToVhString;
var pxToVw = function (value) {
    return value / 19.2;
};
exports.pxToVw = pxToVw;
var pxToVwString = function (value) {
    return "".concat(value / 19.2, "vw");
};
exports.pxToVwString = pxToVwString;
//# sourceMappingURL=convertUnit.js.map