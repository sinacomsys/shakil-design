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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/select/components/option/index.tsx";
import { Text } from "../../../../atoms/text";
import { useStyles } from "./style";
import { CheckBox } from "../../../../molecules";
var Option = function (_a) {
    var children = _a.children, value = _a.value, onClick = _a.onClick, isSelected = _a.isSelected, multiple = _a.multiple;
    var classes = useStyles();
    var handleOnClick = function () {
        onClick(value.value);
    };
    return (_jsxDEV("div", __assign({ onClick: handleOnClick, className: classes["item"] }, { children: [multiple ? (_jsxDEV("div", __assign({ style: { marginInlineEnd: 5 } }, { children: _jsxDEV(CheckBox, { checked: isSelected }, void 0, false, { fileName: _jsxFileName, lineNumber: 22, columnNumber: 11 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 20, columnNumber: 20 }, _this)) : null, _jsxDEV(Text, __assign({ size: 16, theme: "Regular", color: "#575757" }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 25, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 18, columnNumber: 11 }, _this));
};
export { Option };
//# sourceMappingURL=index.js.map