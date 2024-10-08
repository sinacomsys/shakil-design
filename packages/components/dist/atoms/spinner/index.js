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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var src_1 = require("@shakil-design/utils/src");
var theme_1 = require("../../theme");
var style_1 = require("./style");
var context_1 = require("../../theme/context");
var react_1 = require("react");
var SMALL_BORDER = 1;
var MEDIUM_BORDER = 2;
var LARGE_BORDER = 2;
var SMALL = 15;
var MEDIUM = 20;
var LARGE = 30;
var Spinner = function (_a) {
    var _b = _a.spinerColor, spinerColor = _b === void 0 ? theme_1.Colors.primary : _b, size = _a.size;
    var primary = (0, theme_1.useTheme)().primary;
    var unit = (0, react_1.useContext)(context_1.UnitContext).unit;
    var classes = (0, style_1.useStyle)();
    var borderStyle = spinerColor
        ? "".concat(spinerColor, " transparent transparent transparent")
        : "".concat(primary, " transparent transparent transparent");
    var borderWidth = size === "small"
        ? SMALL_BORDER
        : size === "medium"
            ? MEDIUM_BORDER
            : size === "large"
                ? LARGE_BORDER
                : MEDIUM_BORDER;
    var width = size === "small"
        ? SMALL
        : size === "medium"
            ? MEDIUM
            : size === "large"
                ? LARGE
                : MEDIUM;
    var _width = unit === "viewport" ? "".concat((0, src_1.pxToVh)(width), "vh") : width;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: { width: _width, height: _width }, className: classes.ldsRing }, { children: [(0, jsx_runtime_1.jsx)("div", { style: {
                    borderColor: borderStyle,
                    borderWidth: borderWidth,
                    width: _width,
                    height: _width,
                } }), (0, jsx_runtime_1.jsx)("div", { style: {
                    borderColor: borderStyle,
                    borderWidth: borderWidth,
                    width: _width,
                    height: _width,
                } }), (0, jsx_runtime_1.jsx)("div", { style: {
                    borderColor: borderStyle,
                    borderWidth: borderWidth,
                    width: _width,
                    height: _width,
                } }), (0, jsx_runtime_1.jsx)("div", { style: {
                    borderColor: borderStyle,
                    borderWidth: borderWidth,
                    width: _width,
                    height: _width,
                } })] })));
};
exports.Spinner = Spinner;
//# sourceMappingURL=index.js.map