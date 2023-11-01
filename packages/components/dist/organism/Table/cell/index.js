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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/cell/index.tsx";
/* eslint-disable react/jsx-key */
import classNames from "classnames";
import { DEFAULT_ALIGN } from "..";
import { Text } from "../../../atoms/text";
import { useStyles } from "./style";
var Cell = function (_a) {
    var children = _a.children, onPress = _a.onPress, _b = _a.align, align = _b === void 0 ? DEFAULT_ALIGN : _b, rest = __rest(_a, ["children", "onPress", "align"]);
    var classes = useStyles();
    return (_jsxDEV("td", __assign({}, rest, { style: { height: "inherit" }, onClick: onPress, className: classNames(align === "start" && classes["start"], align === "center" && classes["center"], align === "end" && classes["end"]) }, { children: typeof children !== "object" ? (_jsxDEV(Text, __assign({ theme: "Regular", size: "small", color: "red" }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 32, columnNumber: 40 }, _this)) : (children) }), void 0, false, { fileName: _jsxFileName, lineNumber: 21, columnNumber: 11 }, _this));
};
export { Cell };
//# sourceMappingURL=index.js.map