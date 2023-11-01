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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/baseIcon/index.tsx";
import classNames from "classnames";
import React from "react";
import icomoonJson from "@shakil-design/asset/src/icomoon/selection.json";
import { createIcomoonIconSet, } from "./createIconSet";
var IconMoon = createIcomoonIconSet(icomoonJson);
var BaseIcon = React.forwardRef(function (_a, ref) {
    var name = _a.name, color = _a.color, size = _a.size, wrapperStyle = _a.wrapperStyle, wrapperClassName = _a.wrapperClassName, _b = _a.unit, unit = _b === void 0 ? "pixel" : _b, rest = __rest(_a, ["name", "color", "size", "wrapperStyle", "wrapperClassName", "unit"]);
    return (_jsxDEV("div", __assign({ ref: ref, className: classNames(wrapperClassName), style: __assign({ display: "inline-flex" }, wrapperStyle) }, rest, { children: _jsxDEV(IconMoon, { name: name, color: color, size: { height: size.height, width: size.width }, unit: unit }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 9 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 40, columnNumber: 13 }, _this));
});
BaseIcon.displayName = "BaseIcon";
export { BaseIcon };
//# sourceMappingURL=index.js.map