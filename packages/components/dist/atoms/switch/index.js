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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/switch/index.tsx";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../theme";
import { useStyles } from "./style";
import { pxToVhString } from "@shakil-design/utils";
var CIRCLE_WIDTH = 12;
var SWITCH_WIDTH = 30;
var SWITCH_HEIGHT = 16;
var Switch = React.forwardRef(function (_a, ref) {
    var onChange = _a.onChange, checked = _a.checked, name = _a.name, onFocus = _a.onFocus, onBlur = _a.onBlur, _b = _a.unit, unit = _b === void 0 ? "viewport" : _b, rest = __rest(_a, ["onChange", "checked", "name", "onFocus", "onBlur", "unit"]);
    var classes = useStyles();
    var _c = useTheme().switch, _d = _c === void 0 ? {} : _c, checkedColor = _d.checked, unchecked = _d.unchecked;
    var _e = useState(false), isCheck = _e[0], setIsCheck = _e[1];
    var _f = useState(false), isFocused = _f[0], setFocus = _f[1];
    var handleOnChange = function (e) {
        setIsCheck(function (prev) { return !prev; });
        onChange === null || onChange === void 0 ? void 0 : onChange(!isCheck, e);
    };
    useEffect(function () {
        checked && setIsCheck(checked);
    }, [checked]);
    var focusHandler = function (e) {
        setFocus(true);
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
    };
    var blurHandler = function (e) {
        setFocus(false);
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    };
    var _width = unit === "viewport" ? pxToVhString(SWITCH_WIDTH) : SWITCH_WIDTH;
    var _height = unit === "viewport" ? pxToVhString(SWITCH_HEIGHT) : SWITCH_HEIGHT;
    var _circle = unit === "viewport" ? pxToVhString(CIRCLE_WIDTH) : "".concat(CIRCLE_WIDTH, "px");
    return (_jsxDEV("label", __assign({ style: { display: "inline-block", position: "relative" } }, { children: [_jsxDEV("div", __assign({ role: "switch", className: classes["wrapper"], style: {
                    backgroundColor: isCheck ? checkedColor : unchecked,
                    width: _width,
                    height: _height,
                } }, { children: [_jsxDEV("input", __assign({}, rest, { className: classes["hiddenCheckbox"], ref: ref, onChange: handleOnChange, onFocus: focusHandler, onBlur: blurHandler, checked: isCheck, type: "checkbox", name: name }), void 0, false, { fileName: _jsxFileName, lineNumber: 70, columnNumber: 11 }, _this), _jsxDEV("div", __assign({ style: { position: "relative", height: "100%" } }, { children: _jsxDEV(motion.div, { animate: { left: isCheck ? "calc(100% - ".concat(_circle, ")") : 0 }, style: {
                                width: _circle,
                                height: _circle,
                            }, className: classes["circle"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 82, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 81, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 61, columnNumber: 9 }, _this), _jsxDEV(motion.div, { className: classes["ripple"], style: {
                    backgroundColor: isCheck ? checkedColor : unchecked,
                }, animate: {
                    width: isFocused ? 30 : 0,
                    height: isFocused ? 20 : 0,
                } }, void 0, false, { fileName: _jsxFileName, lineNumber: 92, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 59, columnNumber: 13 }, _this));
});
Switch.displayName = "Switch";
export { Switch };
//# sourceMappingURL=index.js.map