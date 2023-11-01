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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/numberInput/index.tsx";
import { pxToVh, pxToVhString } from "@shakil-design/utils";
import { BaseIcon } from "../../atoms";
import { TextInput } from "../../molecules";
import { theming } from "../../theme";
import { useStyles } from "./style";
var useTheme = theming.useTheme;
var NumberInput = function (_a) {
    var wrapperStyle = _a.wrapperStyle, onDecrease = _a.onDecrease, onIncrease = _a.onIncrease, _b = _a.unit, unit = _b === void 0 ? "viewport" : _b, rest = __rest(_a, ["wrapperStyle", "onDecrease", "onIncrease", "unit"]);
    var classes = useStyles();
    var disableField = useTheme().disableField;
    var iconWidth = unit === "viewport" ? pxToVh(12) : 12;
    var iconHeight = unit === "viewport" ? pxToVh(7) : 7;
    var fontSize = unit === "viewport" ? pxToVhString(14) : 14;
    return (_jsxDEV("div", __assign({ style: __assign({ position: "relative" }, wrapperStyle) }, { children: [_jsxDEV(TextInput, __assign({}, rest, { unit: unit, className: classes["input"], style: __assign({ paddingInline: 24, textAlign: "center", fontSize: fontSize }, rest.style) }), void 0, false, { fileName: _jsxFileName, lineNumber: 28, columnNumber: 7 }, _this), _jsxDEV(BaseIcon, { name: "Amount-Boxes_Decrease", size: { height: iconHeight, width: iconWidth }, unit: unit, wrapperClassName: classes["arrowDown"], color: rest.disabled ? disableField : "#575757", onClick: onDecrease }, void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 7 }, _this), _jsxDEV(BaseIcon, { onClick: onIncrease, color: rest.disabled ? disableField : "#575757", name: "Amount-Boxes_Increase", size: { height: iconHeight, width: iconWidth }, unit: unit, wrapperClassName: classes["arrowUp"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 26, columnNumber: 11 }, _this));
};
export { NumberInput };
//# sourceMappingURL=index.js.map