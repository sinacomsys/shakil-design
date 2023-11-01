"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indeterminate = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/checkbox/indeterminate/index.tsx";
var usehooks_ts_1 = require("usehooks-ts");
var utils_1 = require("@shakil-design/utils");
var customSquare_1 = require("../customSquare");
var style_1 = require("./style");
var indeterminate = 6;
var Indeterminate = function (_a) {
    var unit = _a.unit;
    var classes = (0, style_1.useStyles)();
    var windowHeight = (0, usehooks_ts_1.useWindowSize)().height;
    var vh = windowHeight / 100;
    var width = unit === "pixel" ? customSquare_1.WIDTH : 2 * Math.round(((0, utils_1.pxToVh)(customSquare_1.WIDTH) * vh) / 2);
    var smallSquareWidth = unit === "pixel"
        ? indeterminate
        : 2 * Math.round(((0, utils_1.pxToVh)(indeterminate) * vh) / 2);
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["wrapper"], style: {
            width: width,
            height: width,
        } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", { className: classes["square"], style: {
                width: smallSquareWidth,
                height: smallSquareWidth,
            } }, void 0, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 27, columnNumber: 11 }, _this));
};
exports.Indeterminate = Indeterminate;
//# sourceMappingURL=index.js.map