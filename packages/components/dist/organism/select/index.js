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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "/home/amir/project/TML/amir-shakil-design/shakil-design/packages/components/src/organism/select/index.tsx";
var multiSelect_1 = require("./components/multiSelect");
var singleSelect_1 = require("./components/singleSelect");
function Select(props) {
    return ((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: props.mode === "multi" ? ((0, jsx_dev_runtime_1.jsxDEV)(multiSelect_1.MultiSelect, __assign({}, props), void 0, false, { fileName: _jsxFileName, lineNumber: 17, columnNumber: 34 }, this)) : props.mode === "single" ? ((0, jsx_dev_runtime_1.jsxDEV)(singleSelect_1.SingleSelect, __assign({}, props), void 0, false, { fileName: _jsxFileName, lineNumber: 19, columnNumber: 38 }, this)) : null }, void 0, false, { fileName: _jsxFileName, lineNumber: 15, columnNumber: 11 }, this));
}
exports.Select = Select;
//# sourceMappingURL=index.js.map