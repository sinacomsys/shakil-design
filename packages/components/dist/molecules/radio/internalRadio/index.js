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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/radio/internalRadio/index.tsx";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { Text } from "../../../atoms/text";
import { useTheme } from "../../../theme";
import { pxToVh, pxToVhString } from "@shakil-design/utils";
import { RadioContext } from "../context";
import { CustomCircle } from "./customCircle";
import { useStyles } from "./style";
var InternalRadio = React.forwardRef(function (_a, ref) {
    var children = _a.children, value = _a.value, onFocus = _a.onFocus, onBlur = _a.onBlur, _b = _a.unit, unit = _b === void 0 ? "viewport" : _b, rest = __rest(_a, ["children", "value", "onFocus", "onBlur", "unit"]);
    var classes = useStyles();
    var _c = useTheme(), _d = _c.radio, _e = _d === void 0 ? {} : _d, disableInnerCircleSelected = _e.disableInnerCircleSelected, disableInnerCricleUnselected = _e.disableInnerCricleUnselected, disableStroke = _e.disableStroke, enableInnerCircleSelected = _e.enableInnerCircleSelected, enableInnerCircleUnselected = _e.enableInnerCircleUnselected, enableStroke = _e.enableStroke, disableText = _c.disableText, primary = _c.primary;
    var _f = useState(false), isFocused = _f[0], setFocus = _f[1];
    var windowHeight = useWindowSize().height;
    var vh = windowHeight / 100;
    var _g = useContext(RadioContext), onChange = _g.onChange, contextValue = _g.value, 
    // mode,
    name = _g.name;
    var onChangeHandler = function (e) {
        onChange(e);
    };
    var focusHandler = function (e) {
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
        setFocus(true);
    };
    var blurHandler = function (e) {
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
        setFocus(false);
    };
    var _value = value
        ? value
        : undefined;
    var isChecked = _value === contextValue || rest.checked;
    var isDisabled = rest.disabled;
    var isCheckedEnable = isChecked && !isDisabled;
    var isCheckedDisable = isChecked && isDisabled;
    var isUncheckedEnable = !isChecked && !isDisabled;
    var isUncheckedDisable = !isChecked && isDisabled;
    var borderColor = isDisabled ? disableStroke : enableStroke;
    var circleColor = isCheckedEnable
        ? enableInnerCircleSelected
        : isCheckedDisable
            ? disableInnerCircleSelected
            : (isUncheckedEnable || isUncheckedDisable) &&
                (enableInnerCircleUnselected || disableInnerCricleUnselected);
    var fontSize = unit === "viewport" ? pxToVhString(16) : 16;
    var rippleSize = unit === "viewport" ? 2 * Math.round((pxToVh(20) * vh) / 2) : 20;
    return (_jsxDEV("label", __assign({ className: classes["label"] }, { children: [_jsxDEV("div", __assign({ ref: ref, className: classes["container"] }, { children: [_jsxDEV(CustomCircle, __assign({}, { borderColor: borderColor, backgroundColor: circleColor }), void 0, false, { fileName: _jsxFileName, lineNumber: 85, columnNumber: 11 }, _this), _jsxDEV("input", __assign({ className: classes["input"], onFocus: focusHandler, onBlur: blurHandler, onChange: onChangeHandler, type: "radio", value: _value, name: name, checked: isChecked }, rest), void 0, false, { fileName: _jsxFileName, lineNumber: 88, columnNumber: 11 }, _this), _jsxDEV(motion.div, { className: classes["ripple"], animate: {
                            width: isFocused ? rippleSize : 0,
                            height: isFocused ? rippleSize : 0,
                        } }, void 0, false, { fileName: _jsxFileName, lineNumber: 99, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 84, columnNumber: 9 }, _this), typeof children === "string" ? (_jsxDEV("span", { children: _jsxDEV(Text, __assign({ color: isDisabled ? disableText : primary, size: fontSize }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 110, columnNumber: 13 }, _this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 108, columnNumber: 42 }, _this)) : (_jsxDEV("span", { children: children }, void 0, false, { fileName: _jsxFileName, lineNumber: 114, columnNumber: 14 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 82, columnNumber: 13 }, _this));
});
InternalRadio.displayName = "InternalRadio";
export { InternalRadio };
//# sourceMappingURL=index.js.map