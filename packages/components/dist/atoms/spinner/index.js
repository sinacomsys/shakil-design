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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/spinner/index.tsx";
import { pxToVh } from "@shakil-design/utils";
import { useTheme, Colors } from "../../theme";
import { useStyle } from "./style";
var SMALL_BORDER = 1;
var MEDIUM_BORDER = 2;
var LARGE_BORDER = 2;
var SMALL = 15;
var MEDIUM = 20;
var LARGE = 30;
var Spinner = function (_a) {
    var _b = _a.spinerColor, spinerColor = _b === void 0 ? Colors.primary : _b, size = _a.size, _c = _a.unit, unit = _c === void 0 ? "viewport" : _c;
    var primary = useTheme().primary;
    var classes = useStyle();
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
    var _width = unit === "viewport" ? "".concat(pxToVh(width), "vh") : width;
    return (_jsxDEV("div", __assign({ style: { width: _width, height: _width }, className: classes.ldsRing }, { children: [_jsxDEV("div", { style: {
                    borderColor: borderStyle,
                    borderWidth: borderWidth,
                    width: _width,
                    height: _width,
                } }, void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 7 }, _this), _jsxDEV("div", { style: {
                    borderColor: borderStyle,
                    borderWidth: borderWidth,
                    width: _width,
                    height: _width,
                } }, void 0, false, { fileName: _jsxFileName, lineNumber: 60, columnNumber: 7 }, _this), _jsxDEV("div", { style: {
                    borderColor: borderStyle,
                    borderWidth: borderWidth,
                    width: _width,
                    height: _width,
                } }, void 0, false, { fileName: _jsxFileName, lineNumber: 68, columnNumber: 7 }, _this), _jsxDEV("div", { style: {
                    borderColor: borderStyle,
                    borderWidth: borderWidth,
                    width: _width,
                    height: _width,
                } }, void 0, false, { fileName: _jsxFileName, lineNumber: 76, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 11 }, _this));
};
export { Spinner };
//# sourceMappingURL=index.js.map