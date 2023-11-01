"use strict";
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
exports.CheckBox = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/checkbox/index.tsx";
const text_1 = require("../../atoms/text");
const indeterminate_1 = require("./indeterminate");
const customSquare_1 = require("./customSquare");
const style_1 = require("./style");
const utils_1 = require("@shakil-design/utils");
const CheckBox = (_a) => {
    var { checked, value, onChange, children, name, indeterminate, unit = "pixel" } = _a, rest = __rest(_a, ["checked", "value", "onChange", "children", "name", "indeterminate", "unit"]);
    const classes = (0, style_1.useStyles)();
    const onChangeHandler = (e) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    };
    return ((0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ style: { display: "inline-flex" } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["checkBoxWrapper"], style: Object.assign({}, (typeof children !== "undefined" && { marginInlineEnd: 4 })) }, { children: [indeterminate ? ((0, jsx_dev_runtime_1.jsxDEV)(indeterminate_1.Indeterminate, { unit: unit }, void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 27 }, this)) : ((0, jsx_dev_runtime_1.jsxDEV)(customSquare_1.CustomSquare, { checked: checked, unit: unit }, void 0, false, { fileName: _jsxFileName, lineNumber: 41, columnNumber: 14 }, this)), (0, jsx_dev_runtime_1.jsxDEV)("input", Object.assign({ className: classes["hiddenInput"], type: "checkbox", value: value, name: name, checked: checked, onChange: onChangeHandler }, rest), void 0, false, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 33, columnNumber: 7 }, this), typeof children === "string" ? ((0, jsx_dev_runtime_1.jsxDEV)(text_1.Text, Object.assign({ size: unit === "viewport" ? (0, utils_1.pxToVhString)(16) : 16 }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 40 }, this)) : (children)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 31, columnNumber: 11 }, this));
};
exports.CheckBox = CheckBox;
//# sourceMappingURL=index.js.map