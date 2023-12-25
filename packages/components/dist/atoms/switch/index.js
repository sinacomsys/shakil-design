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
exports.Switch = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/switch/index.tsx";
var framer_motion_1 = require("framer-motion");
var react_1 = __importStar(require("react"));
var theme_1 = require("../../theme");
var style_1 = require("./style");
var utils_1 = require("@shakil-design/utils");
var CIRCLE_WIDTH = 12;
var SWITCH_WIDTH = 30;
var SWITCH_HEIGHT = 16;
var Switch = react_1.default.forwardRef(function (_a, ref) {
    var testId = _a.testId, onChange = _a.onChange, checked = _a.checked, name = _a.name, onFocus = _a.onFocus, onBlur = _a.onBlur, _b = _a.unit, unit = _b === void 0 ? "viewport" : _b, rest = __rest(_a, ["testId", "onChange", "checked", "name", "onFocus", "onBlur", "unit"]);
    var classes = (0, style_1.useStyles)();
    var _c = (0, theme_1.useTheme)().switch, _d = _c === void 0 ? {} : _c, checkedColor = _d.checked, unchecked = _d.unchecked;
    // const [isCheck, setIsCheck] = useState<boolean>(false);
    var _e = (0, react_1.useState)(false), isFocused = _e[0], setFocus = _e[1];
    var handleOnChange = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    };
    var focusHandler = function (e) {
        setFocus(true);
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
    };
    var blurHandler = function (e) {
        setFocus(false);
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    };
    var _width = unit === "viewport" ? (0, utils_1.pxToVhString)(SWITCH_WIDTH) : SWITCH_WIDTH;
    var _height = unit === "viewport" ? (0, utils_1.pxToVhString)(SWITCH_HEIGHT) : SWITCH_HEIGHT;
    var _circle = unit === "viewport" ? (0, utils_1.pxToVhString)(CIRCLE_WIDTH) : "".concat(CIRCLE_WIDTH, "px");
    return ((0, jsx_dev_runtime_1.jsxDEV)("label", __assign({ style: { display: "inline-block", position: "relative" } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ "data-testid": testId, role: "switch", className: classes["wrapper"], style: {
                    backgroundColor: checked ? checkedColor : unchecked,
                    width: _width,
                    height: _height,
                } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("input", __assign({}, rest, { className: classes["hiddenCheckbox"], ref: ref, onChange: handleOnChange, onFocus: focusHandler, onBlur: blurHandler, "aria-checked": checked, checked: checked, type: "checkbox", name: name }), void 0, false, { fileName: _jsxFileName, lineNumber: 73, columnNumber: 11 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { position: "relative", height: "100%" } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.motion.div, { animate: { left: checked ? "calc(100% - ".concat(_circle, ")") : 0 }, style: {
                                width: _circle,
                                height: _circle,
                            }, className: classes["circle"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 86, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 85, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 63, columnNumber: 9 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.motion.div, { className: classes["ripple"], style: {
                    backgroundColor: checked ? checkedColor : unchecked,
                }, animate: {
                    width: isFocused ? 30 : 0,
                    height: isFocused ? 20 : 0,
                } }, void 0, false, { fileName: _jsxFileName, lineNumber: 96, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 61, columnNumber: 13 }, _this));
});
exports.Switch = Switch;
Switch.displayName = "Switch";
//# sourceMappingURL=index.js.map