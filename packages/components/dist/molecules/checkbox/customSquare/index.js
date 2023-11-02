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
exports.CustomSquare = exports.WIDTH = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/checkbox/customSquare/index.tsx";
var usehooks_ts_1 = require("usehooks-ts");
var theme_1 = require("../../../theme");
var utils_1 = require("@shakil-design/utils");
var style_1 = require("./style");
exports.WIDTH = 16;
var INNER_WIDTH = 10;
var CustomSquare = function (_a) {
    var checked = _a.checked, unit = _a.unit;
    var _b = (0, theme_1.useTheme)().checkbox, _c = _b === void 0 ? {} : _b, borderSelected = _c.borderSelected, 
    // deactive,
    squareSelected = _c.squareSelected, unselectedBorder = _c.unselectedBorder, unselectedSquare = _c.unselectedSquare;
    var classes = (0, style_1.useStyles)();
    var windowHeight = (0, usehooks_ts_1.useWindowSize)().height;
    var vh = windowHeight / 100;
    var borderColor = checked ? borderSelected : unselectedBorder;
    var backgroundColor = checked ? squareSelected : unselectedSquare;
    var width = unit === "pixel" ? exports.WIDTH : 2 * Math.round(((0, utils_1.pxToVh)(exports.WIDTH) * vh) / 2);
    var innderWidth = unit === "pixel"
        ? INNER_WIDTH
        : 2 * Math.round(((0, utils_1.pxToVh)(INNER_WIDTH) * vh) / 2);
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["wrapper"], style: {
            width: width,
            height: width,
            border: "1px solid ".concat(borderColor),
        } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", { className: classes["square"], style: {
                width: innderWidth,
                height: innderWidth,
                backgroundColor: backgroundColor,
            } }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 11 }, _this));
};
exports.CustomSquare = CustomSquare;
//# sourceMappingURL=index.js.map