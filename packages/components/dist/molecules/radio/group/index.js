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
define(["require", "exports", "react/jsx-dev-runtime", "react", "../context"], function (require, exports, jsx_dev_runtime_1, react_1, context_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Group = void 0;
    react_1 = __importStar(react_1);
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/radio/group/index.tsx";
    const Group = react_1.default.forwardRef(({ children, value, name, onChange, onBlur, onFocus, wrapperStyle }, ref) => {
        const [internalValue, setInternalValue] = (0, react_1.useState)(undefined);
        (0, react_1.useEffect)(() => {
            setInternalValue(value);
        }, [value]);
        const hangleOnChange = (e) => {
            setInternalValue(e.target.value);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        };
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: Object.assign({}, wrapperStyle), onBlur: onBlur, onFocus: onFocus, ref: ref }, { children: (0, jsx_dev_runtime_1.jsxDEV)(context_1.RadioContext.Provider, Object.assign({ value: {
                    value: internalValue,
                    onChange: hangleOnChange,
                    name,
                } }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 34, columnNumber: 9 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 27, columnNumber: 13 }, this));
    });
    exports.Group = Group;
    Group.displayName = "Group";
});
//# sourceMappingURL=index.js.map