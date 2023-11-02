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
exports.CheckBox = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/checkbox/index.tsx";
var text_1 = require("../../atoms/text");
var indeterminate_1 = require("./indeterminate");
var customSquare_1 = require("./customSquare");
var style_1 = require("./style");
var utils_1 = require("@shakil-design/utils");
var CheckBox = function (_a) {
    var checked = _a.checked, value = _a.value, onChange = _a.onChange, children = _a.children, name = _a.name, indeterminate = _a.indeterminate, _b = _a.unit, unit = _b === void 0 ? "pixel" : _b, rest = __rest(_a, ["checked", "value", "onChange", "children", "name", "indeterminate", "unit"]);
    var classes = (0, style_1.useStyles)();
    var onChangeHandler = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    };
    return ((0, jsx_dev_runtime_1.jsxDEV)("label", __assign({ style: { display: "inline-flex" } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["checkBoxWrapper"], style: __assign({}, (typeof children !== "undefined" && { marginInlineEnd: 4 })) }, { children: [indeterminate ? ((0, jsx_dev_runtime_1.jsxDEV)(indeterminate_1.Indeterminate, { unit: unit }, void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 27 }, _this)) : ((0, jsx_dev_runtime_1.jsxDEV)(customSquare_1.CustomSquare, { checked: checked, unit: unit }, void 0, false, { fileName: _jsxFileName, lineNumber: 41, columnNumber: 14 }, _this)), (0, jsx_dev_runtime_1.jsxDEV)("input", __assign({ className: classes["hiddenInput"], type: "checkbox", value: value, name: name, checked: checked, onChange: onChangeHandler }, rest), void 0, false, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 33, columnNumber: 7 }, _this), typeof children === "string" ? ((0, jsx_dev_runtime_1.jsxDEV)(text_1.Text, __assign({ size: unit === "viewport" ? (0, utils_1.pxToVhString)(16) : 16 }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 40 }, _this)) : (children)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 31, columnNumber: 11 }, _this));
};
exports.CheckBox = CheckBox;
//# sourceMappingURL=index.js.map