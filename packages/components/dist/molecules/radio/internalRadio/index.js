var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
define(["require", "exports", "react/jsx-dev-runtime", "framer-motion", "react", "usehooks-ts", "../../../atoms/text", "../../../theme", "@shakil-design/utils", "../context", "./customCircle", "./style"], function (require, exports, jsx_dev_runtime_1, framer_motion_1, react_1, usehooks_ts_1, text_1, theme_1, utils_1, context_1, customCircle_1, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InternalRadio = void 0;
    react_1 = __importStar(react_1);
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/radio/internalRadio/index.tsx";
    const InternalRadio = react_1.default.forwardRef((_a, ref) => {
        var { children, value, onFocus, onBlur, unit = "viewport" } = _a, rest = __rest(_a, ["children", "value", "onFocus", "onBlur", "unit"]);
        const classes = (0, style_1.useStyles)();
        const { radio: { disableInnerCircleSelected, disableInnerCricleUnselected, disableStroke, enableInnerCircleSelected, enableInnerCircleUnselected, enableStroke, } = {}, disableText, primary, } = (0, theme_1.useTheme)();
        const [isFocused, setFocus] = (0, react_1.useState)(false);
        const { height: windowHeight } = (0, usehooks_ts_1.useWindowSize)();
        const vh = windowHeight / 100;
        const { onChange, value: contextValue, 
        // mode,
        name, } = (0, react_1.useContext)(context_1.RadioContext);
        const onChangeHandler = (e) => {
            onChange(e);
        };
        const focusHandler = (e) => {
            onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
            setFocus(true);
        };
        const blurHandler = (e) => {
            onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
            setFocus(false);
        };
        const _value = value
            ? value
            : undefined;
        const isChecked = _value === contextValue || rest.checked;
        const isDisabled = rest.disabled;
        const isCheckedEnable = isChecked && !isDisabled;
        const isCheckedDisable = isChecked && isDisabled;
        const isUncheckedEnable = !isChecked && !isDisabled;
        const isUncheckedDisable = !isChecked && isDisabled;
        const borderColor = isDisabled ? disableStroke : enableStroke;
        const circleColor = isCheckedEnable
            ? enableInnerCircleSelected
            : isCheckedDisable
                ? disableInnerCircleSelected
                : (isUncheckedEnable || isUncheckedDisable) &&
                    (enableInnerCircleUnselected || disableInnerCricleUnselected);
        const fontSize = unit === "viewport" ? (0, utils_1.pxToVhString)(16) : 16;
        const rippleSize = unit === "viewport" ? 2 * Math.round(((0, utils_1.pxToVh)(20) * vh) / 2) : 20;
        return ((0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ className: classes["label"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ ref: ref, className: classes["container"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(customCircle_1.CustomCircle, Object.assign({}, { borderColor, backgroundColor: circleColor }), void 0, false, { fileName: _jsxFileName, lineNumber: 85, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)("input", Object.assign({ className: classes["input"], onFocus: focusHandler, onBlur: blurHandler, onChange: onChangeHandler, type: "radio", value: _value, name: name, checked: isChecked }, rest), void 0, false, { fileName: _jsxFileName, lineNumber: 88, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.motion.div, { className: classes["ripple"], animate: {
                                width: isFocused ? rippleSize : 0,
                                height: isFocused ? rippleSize : 0,
                            } }, void 0, false, { fileName: _jsxFileName, lineNumber: 99, columnNumber: 11 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 84, columnNumber: 9 }, this), typeof children === "string" ? ((0, jsx_dev_runtime_1.jsxDEV)("span", { children: (0, jsx_dev_runtime_1.jsxDEV)(text_1.Text, Object.assign({ color: isDisabled ? disableText : primary, size: fontSize }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 110, columnNumber: 13 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 108, columnNumber: 42 }, this)) : ((0, jsx_dev_runtime_1.jsxDEV)("span", { children: children }, void 0, false, { fileName: _jsxFileName, lineNumber: 114, columnNumber: 14 }, this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 82, columnNumber: 13 }, this));
    });
    exports.InternalRadio = InternalRadio;
    InternalRadio.displayName = "InternalRadio";
});
//# sourceMappingURL=index.js.map