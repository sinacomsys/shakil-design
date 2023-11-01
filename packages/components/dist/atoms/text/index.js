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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/text/index.tsx";
import classNames from "classnames";
import * as React from "react";
import { BaseText } from "./baseText/baseText";
import { fonts, fontWeights, useFonts } from "./style";
var Text = React.memo(React.forwardRef(function (_a, ref) {
    var _b = _a.theme, theme = _b === void 0 ? "Regular" : _b, className = _a.className, color = _a.color, style = _a.style, size = _a.size, weight = _a.weight, variant = _a.variant, lineHeight = _a.lineHeight, rest = __rest(_a, ["theme", "className", "color", "style", "size", "weight", "variant", "lineHeight"]);
    var fonts = useFonts();
    var fontWeight = typeof weight === "string" ? fontWeights[weight] : weight;
    var setVariant = function () {
        if (typeof size !== "number" && (size === null || size === void 0 ? void 0 : size.match(/h(1|2|3|4|5|6)/g))) {
            return size;
        }
        return "p";
    };
    return (_jsxDEV(BaseText, __assign({ ref: ref, variant: variant || setVariant(), className: classNames(fonts[theme], className), style: __assign({ color: color, fontSize: size, fontWeight: fontWeight, lineHeight: lineHeight }, style) }, rest), void 0, false, { fileName: _jsxFileName, lineNumber: 40, columnNumber: 15 }, _this));
}));
export { Text, fonts };
//# sourceMappingURL=index.js.map