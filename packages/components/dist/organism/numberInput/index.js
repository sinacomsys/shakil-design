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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberInput = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/numberInput/index.tsx";
var utils_1 = require("@shakil-design/utils");
var atoms_1 = require("../../atoms");
var molecules_1 = require("../../molecules");
var theme_1 = require("../../theme");
var style_1 = require("./style");
var useTheme = theme_1.theming.useTheme;
var NumberInput = function (_a) {
    var wrapperStyle = _a.wrapperStyle, onDecrease = _a.onDecrease, onIncrease = _a.onIncrease, _b = _a.unit, unit = _b === void 0 ? "viewport" : _b, rest = __rest(_a, ["wrapperStyle", "onDecrease", "onIncrease", "unit"]);
    var classes = (0, style_1.useStyles)();
    var disableField = useTheme().disableField;
    var iconWidth = unit === "viewport" ? (0, utils_1.pxToVh)(12) : 12;
    var iconHeight = unit === "viewport" ? (0, utils_1.pxToVh)(7) : 7;
    var fontSize = unit === "viewport" ? (0, utils_1.pxToVhString)(14) : 14;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: __assign({ position: "relative" }, wrapperStyle) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(molecules_1.TextInput, __assign({}, rest, { unit: unit, className: classes["input"], style: __assign({ paddingInline: 24, textAlign: "center", fontSize: fontSize }, rest.style) }), void 0, false, { fileName: _jsxFileName, lineNumber: 28, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { name: "Amount-Boxes_Decrease", size: { height: iconHeight, width: iconWidth }, unit: unit, wrapperClassName: classes["arrowDown"], color: rest.disabled ? disableField : "#575757", onClick: onDecrease }, void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { onClick: onIncrease, color: rest.disabled ? disableField : "#575757", name: "Amount-Boxes_Increase", size: { height: iconHeight, width: iconWidth }, unit: unit, wrapperClassName: classes["arrowUp"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 26, columnNumber: 11 }, _this));
};
exports.NumberInput = NumberInput;
//# sourceMappingURL=index.js.map