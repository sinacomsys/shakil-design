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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalRadio = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/radio/internalRadio/index.tsx";
var framer_motion_1 = require("framer-motion");
var react_1 = __importStar(require("react"));
var usehooks_ts_1 = require("usehooks-ts");
var text_1 = require("../../../atoms/text");
var theme_1 = require("../../../theme");
var utils_1 = require("@shakil-design/utils");
var context_1 = require("../context");
var customCircle_1 = require("./customCircle");
var style_1 = require("./style");
var InternalRadio = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, value = _a.value, onFocus = _a.onFocus, onBlur = _a.onBlur, _b = _a.unit, unit = _b === void 0 ? "viewport" : _b, rest = __rest(_a, ["children", "value", "onFocus", "onBlur", "unit"]);
    var classes = (0, style_1.useStyles)();
    var _c = (0, theme_1.useTheme)(), _d = _c.radio, _e = _d === void 0 ? {} : _d, disableInnerCircleSelected = _e.disableInnerCircleSelected, disableInnerCricleUnselected = _e.disableInnerCricleUnselected, disableStroke = _e.disableStroke, enableInnerCircleSelected = _e.enableInnerCircleSelected, enableInnerCircleUnselected = _e.enableInnerCircleUnselected, enableStroke = _e.enableStroke, disableText = _c.disableText, primary = _c.primary;
    var _f = (0, react_1.useState)(false), isFocused = _f[0], setFocus = _f[1];
    var windowHeight = (0, usehooks_ts_1.useWindowSize)().height;
    var vh = windowHeight / 100;
    var _g = (0, react_1.useContext)(context_1.RadioContext), onChange = _g.onChange, contextValue = _g.value, 
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
    var fontSize = unit === "viewport" ? (0, utils_1.pxToVhString)(16) : 16;
    var rippleSize = unit === "viewport" ? 2 * Math.round(((0, utils_1.pxToVh)(20) * vh) / 2) : 20;
    return ((0, jsx_dev_runtime_1.jsxDEV)("label", __assign({ className: classes["label"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ ref: ref, className: classes["container"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(customCircle_1.CustomCircle, __assign({}, { borderColor: borderColor, backgroundColor: circleColor }), void 0, false, { fileName: _jsxFileName, lineNumber: 85, columnNumber: 11 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("input", __assign({ className: classes["input"], onFocus: focusHandler, onBlur: blurHandler, onChange: onChangeHandler, type: "radio", value: _value, name: name, checked: isChecked }, rest), void 0, false, { fileName: _jsxFileName, lineNumber: 88, columnNumber: 11 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.motion.div, { className: classes["ripple"], animate: {
                            width: isFocused ? rippleSize : 0,
                            height: isFocused ? rippleSize : 0,
                        } }, void 0, false, { fileName: _jsxFileName, lineNumber: 99, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 84, columnNumber: 9 }, _this), typeof children === "string" ? ((0, jsx_dev_runtime_1.jsxDEV)("span", { children: (0, jsx_dev_runtime_1.jsxDEV)(text_1.Text, __assign({ color: isDisabled ? disableText : primary, size: fontSize }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 110, columnNumber: 13 }, _this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 108, columnNumber: 42 }, _this)) : ((0, jsx_dev_runtime_1.jsxDEV)("span", { children: children }, void 0, false, { fileName: _jsxFileName, lineNumber: 114, columnNumber: 14 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 82, columnNumber: 13 }, _this));
});
exports.InternalRadio = InternalRadio;
InternalRadio.displayName = "InternalRadio";
//# sourceMappingURL=index.js.map