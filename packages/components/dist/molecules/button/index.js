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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var lodash_1 = __importDefault(require("lodash"));
var react_1 = __importStar(require("react"));
var atoms_1 = require("../../atoms");
var text_1 = require("../../atoms/text");
var theme_1 = require("../../theme");
var style_1 = require("./style");
var Button = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.mode, mode = _b === void 0 ? "main" : _b, _c = _a.htmlType, htmlType = _c === void 0 ? "button" : _c, form = _a.form, className = _a.className, isLoading = _a.isLoading, disabled = _a.disabled, onClick = _a.onClick, _d = _a.size, size = _d === void 0 ? "middle" : _d, ghost = _a.ghost, rest = __rest(_a, ["children", "mode", "htmlType", "form", "className", "isLoading", "disabled", "onClick", "size", "ghost"]);
    var _e = (0, theme_1.useTheme)().button, _f = _e === void 0 ? {} : _e, dangerColor = _f.danger, mainColor = _f.main, successColor = _f.success;
    var classes = (0, style_1.useStyles)();
    var _g = (0, react_1.useState)([]), ripples = _g[0], setRipples = _g[1];
    var showRipple = function (e) {
        if (isLoading)
            return;
        var rippleContainer = e.currentTarget;
        var size = rippleContainer.offsetWidth;
        var pos = rippleContainer.getBoundingClientRect();
        var x = e.pageX - pos.x - size / 2;
        var y = e.pageY - pos.y - size / 2;
        var spanStyles = {
            top: y + "px",
            left: x + "px",
            height: size + "px",
            width: size + "px",
            id: Date.now(),
        };
        setRipples(function (prev) {
            return __spreadArray(__spreadArray([], prev, true), [spanStyles], false);
        });
    };
    var handleOnClick = function (e) {
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    var renderRipple = function () {
        if (ripples.length > 0) {
            return ripples.map(function (_a) {
                var id = _a.id, rest = __rest(_a, ["id"]);
                return ((0, jsx_runtime_1.jsx)("span", { style: __assign({}, rest), className: classes["ripple"] }, id));
            });
        }
    };
    var onDebounce = (0, react_1.useMemo)(function () {
        return lodash_1.default.debounce(function () {
            setRipples([]);
        }, 1000);
    }, []);
    var isMainGhost = ghost && mode === "main";
    var isSuccessGhost = ghost && mode === "success";
    var isDangerGhost = ghost && mode === "danger";
    var spinnerColor = isMainGhost
        ? mainColor
        : isSuccessGhost
            ? successColor
            : isDangerGhost
                ? dangerColor
                : "black";
    return ((0, jsx_runtime_1.jsxs)("button", __assign({}, rest, { style: __assign(__assign({}, rest.style), { cursor: disabled || isLoading ? "not-allowed" : "pointer" }), ref: ref, form: form, type: htmlType, onMouseDown: showRipple, onMouseUp: onDebounce, onClick: handleOnClick, disabled: disabled || isLoading, className: (0, classnames_1.default)(classes["button"], mode === "main" && classes["buttonMain"], mode === "success" && classes["buttonSuccess"], mode === "danger" && classes["buttonDanger"], size === "small" && "".concat(classes["button"], "--small"), size === "middle" && "".concat(classes["button"], "--middle"), isMainGhost && classes["ghostMain"], isSuccessGhost && classes["ghostSuccess"], isDangerGhost && classes["ghostDanger"], className) }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: classes["textContainer"], style: {
                    visibility: isLoading ? "hidden" : "visible",
                } }, { children: typeof children !== "object" ? ((0, jsx_runtime_1.jsx)(text_1.Text, __assign({ style: { color: "inherit" }, size: 16 }, { children: children }))) : (children) })), isLoading ? ((0, jsx_runtime_1.jsx)("div", __assign({ className: classes["loadingContainer"] }, { children: (0, jsx_runtime_1.jsx)(atoms_1.Spinner, { spinerColor: spinnerColor, size: "medium" }) }))) : null, (isLoading || disabled) && (0, jsx_runtime_1.jsx)("div", { className: classes["cover"] }), renderRipple()] })));
});
exports.Button = Button;
Button.displayName = "Button";
//# sourceMappingURL=index.js.map