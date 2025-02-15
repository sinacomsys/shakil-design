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
var jsx_runtime_1 = require("react/jsx-runtime");
var multiSelect_1 = require("./components/multiSelect");
var singleSelect_1 = require("./components/singleSelect");
function Select(props) {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props.mode === "multi" ? ((0, jsx_runtime_1.jsx)(multiSelect_1.MultiSelect, __assign({}, props))) : props.mode === "single" ? ((0, jsx_runtime_1.jsx)(singleSelect_1.SingleSelect, __assign({}, props))) : null }));
}
exports.Select = Select;
//# sourceMappingURL=index.js.map