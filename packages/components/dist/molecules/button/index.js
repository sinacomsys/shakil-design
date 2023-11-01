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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/button/index.tsx";
const classnames_1 = __importDefault(require("classnames"));
const lodash_1 = __importDefault(require("lodash"));
const react_1 = __importStar(require("react"));
const atoms_1 = require("../../atoms");
const text_1 = require("../../atoms/text");
const theme_1 = require("../../theme");
const style_1 = require("./style");
const utils_1 = require("@shakil-design/utils");
const Button = react_1.default.forwardRef((_a, ref) => {
    var { children, mode = "main", htmlType = "button", form, className, isLoading, disabled, onClick, unit = "pixel", size, ghost } = _a, rest = __rest(_a, ["children", "mode", "htmlType", "form", "className", "isLoading", "disabled", "onClick", "unit", "size", "ghost"]);
    const { button: { danger: dangerColor, main: mainColor, success: successColor, } = {}, } = (0, theme_1.useTheme)();
    const classes = (0, style_1.useStyles)();
    const [ripples, setRipples] = (0, react_1.useState)([]);
    const showRipple = (e) => {
        if (isLoading)
            return;
        const rippleContainer = e.currentTarget;
        const size = rippleContainer.offsetWidth;
        const pos = rippleContainer.getBoundingClientRect();
        const x = e.pageX - pos.x - size / 2;
        const y = e.pageY - pos.y - size / 2;
        const spanStyles = {
            top: y + "px",
            left: x + "px",
            height: size + "px",
            width: size + "px",
            id: Date.now(),
        };
        setRipples((prev) => {
            return [...prev, spanStyles];
        });
    };
    const handleOnClick = (e) => {
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    const renderRipple = () => {
        if (ripples.length > 0) {
            return ripples.map((_a) => {
                var { id } = _a, rest = __rest(_a, ["id"]);
                return ((0, jsx_dev_runtime_1.jsxDEV)("span", { style: Object.assign({}, rest), className: classes["ripple"] }, id, false, { fileName: _jsxFileName, lineNumber: 91, columnNumber: 19 }, this));
            });
        }
    };
    const onDebounce = (0, react_1.useMemo)(() => lodash_1.default.debounce(() => {
        setRipples([]);
    }, 1000), []);
    const height = size === "small" ? 32 : 40;
    const fontSize = unit === "viewport" ? `${(0, utils_1.pxToVh)(16)}vh` : 16;
    const isMainGhost = ghost && mode === "main";
    const isSuccessGhost = ghost && mode === "success";
    const isDangerGhost = ghost && mode === "danger";
    const spinnerColor = isMainGhost
        ? mainColor
        : isSuccessGhost
            ? successColor
            : isDangerGhost
                ? dangerColor
                : "black";
    return ((0, jsx_dev_runtime_1.jsxDEV)("button", Object.assign({}, rest, { style: Object.assign(Object.assign({}, rest.style), { height: unit === "viewport" ? `${(0, utils_1.pxToVh)(height)}vh` : height, cursor: disabled || isLoading ? "not-allowed" : "pointer" }), ref: ref, form: form, type: htmlType, onMouseDown: showRipple, onMouseUp: onDebounce, onClick: handleOnClick, disabled: disabled || isLoading, className: (0, classnames_1.default)(classes["button"], mode === "main" && classes["buttonMain"], mode === "success" && classes["buttonSuccess"], mode === "danger" && classes["buttonDanger"], isMainGhost && classes["ghostMain"], isSuccessGhost && classes["ghostSuccess"], isDangerGhost && classes["ghostDanger"], className) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["textContainer"], style: {
                    visibility: isLoading ? "hidden" : "visible",
                } }, { children: typeof children !== "object" ? ((0, jsx_dev_runtime_1.jsxDEV)(text_1.Text, Object.assign({ style: { color: "inherit" }, size: fontSize }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 153, columnNumber: 44 }, this)) : (children) }), void 0, false, { fileName: _jsxFileName, lineNumber: 147, columnNumber: 9 }, this), isLoading ? ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["loadingContainer"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Spinner, { spinerColor: spinnerColor, size: "medium" }, void 0, false, { fileName: _jsxFileName, lineNumber: 163, columnNumber: 13 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 161, columnNumber: 23 }, this)) : null, (isLoading || disabled) && (0, jsx_dev_runtime_1.jsxDEV)("div", { className: classes["cover"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 166, columnNumber: 36 }, this), renderRipple()] }), void 0, true, { fileName: _jsxFileName, lineNumber: 121, columnNumber: 13 }, this));
});
exports.Button = Button;
Button.displayName = "Button";
//# sourceMappingURL=index.js.map