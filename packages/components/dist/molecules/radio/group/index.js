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
var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/radio/group/index.tsx";
import React, { useEffect, useState } from "react";
import { RadioContext } from "../context";
var Group = React.forwardRef(function (_a, ref) {
    var children = _a.children, value = _a.value, name = _a.name, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, wrapperStyle = _a.wrapperStyle;
    var _b = useState(undefined), internalValue = _b[0], setInternalValue = _b[1];
    useEffect(function () {
        setInternalValue(value);
    }, [value]);
    var hangleOnChange = function (e) {
        setInternalValue(e.target.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    };
    return (_jsxDEV("div", __assign({ style: __assign({}, wrapperStyle), onBlur: onBlur, onFocus: onFocus, ref: ref }, { children: _jsxDEV(RadioContext.Provider, __assign({ value: {
                value: internalValue,
                onChange: hangleOnChange,
                name: name,
            } }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 34, columnNumber: 9 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 27, columnNumber: 13 }, _this));
});
Group.displayName = "Group";
export { Group };
//# sourceMappingURL=index.js.map