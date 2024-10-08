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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var context_1 = require("../context");
var Group = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, value = _a.value, name = _a.name, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, wrapperStyle = _a.wrapperStyle;
    var _b = (0, react_1.useState)(undefined), internalValue = _b[0], setInternalValue = _b[1];
    (0, react_1.useEffect)(function () {
        setInternalValue(value);
    }, [value]);
    var hangleOnChange = function (e) {
        setInternalValue(e.target.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: __assign({}, wrapperStyle), onBlur: onBlur, onFocus: onFocus, ref: ref }, { children: (0, jsx_runtime_1.jsx)(context_1.RadioContext.Provider, __assign({ value: {
                value: internalValue,
                onChange: hangleOnChange,
                name: name,
            } }, { children: children })) })));
});
exports.Group = Group;
Group.displayName = "Group";
//# sourceMappingURL=index.js.map