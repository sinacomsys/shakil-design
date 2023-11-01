"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/switch/index.tsx";
const framer_motion_1 = require("framer-motion");
const react_1 = __importStar(require("react"));
const theme_1 = require("../../theme");
const style_1 = require("./style");
const utils_1 = require("@shakil-design/utils");
const CIRCLE_WIDTH = 12;
const SWITCH_WIDTH = 30;
const SWITCH_HEIGHT = 16;
const Switch = react_1.default.forwardRef((_a, ref) => {
    var { onChange, checked, name, onFocus, onBlur, unit = "viewport" } = _a, rest = __rest(_a, ["onChange", "checked", "name", "onFocus", "onBlur", "unit"]);
    const classes = (0, style_1.useStyles)();
    const { switch: { checked: checkedColor, unchecked } = {} } = (0, theme_1.useTheme)();
    const [isCheck, setIsCheck] = (0, react_1.useState)(false);
    const [isFocused, setFocus] = (0, react_1.useState)(false);
    const handleOnChange = (e) => {
        setIsCheck((prev) => !prev);
        onChange === null || onChange === void 0 ? void 0 : onChange(!isCheck, e);
    };
    (0, react_1.useEffect)(() => {
        checked && setIsCheck(checked);
    }, [checked]);
    const focusHandler = (e) => {
        setFocus(true);
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
    };
    const blurHandler = (e) => {
        setFocus(false);
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    };
    const _width = unit === "viewport" ? (0, utils_1.pxToVhString)(SWITCH_WIDTH) : SWITCH_WIDTH;
    const _height = unit === "viewport" ? (0, utils_1.pxToVhString)(SWITCH_HEIGHT) : SWITCH_HEIGHT;
    const _circle = unit === "viewport" ? (0, utils_1.pxToVhString)(CIRCLE_WIDTH) : `${CIRCLE_WIDTH}px`;
    return ((0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ style: { display: "inline-block", position: "relative" } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ role: "switch", className: classes["wrapper"], style: {
                    backgroundColor: isCheck ? checkedColor : unchecked,
                    width: _width,
                    height: _height,
                } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("input", Object.assign({}, rest, { className: classes["hiddenCheckbox"], ref: ref, onChange: handleOnChange, onFocus: focusHandler, onBlur: blurHandler, checked: isCheck, type: "checkbox", name: name }), void 0, false, { fileName: _jsxFileName, lineNumber: 70, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { position: "relative", height: "100%" } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.motion.div, { animate: { left: isCheck ? `calc(100% - ${_circle})` : 0 }, style: {
                                width: _circle,
                                height: _circle,
                            }, className: classes["circle"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 82, columnNumber: 13 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 81, columnNumber: 11 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 61, columnNumber: 9 }, this), (0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.motion.div, { className: classes["ripple"], style: {
                    backgroundColor: isCheck ? checkedColor : unchecked,
                }, animate: {
                    width: isFocused ? 30 : 0,
                    height: isFocused ? 20 : 0,
                } }, void 0, false, { fileName: _jsxFileName, lineNumber: 92, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 59, columnNumber: 13 }, this));
});
exports.Switch = Switch;
Switch.displayName = "Switch";
//# sourceMappingURL=index.js.map