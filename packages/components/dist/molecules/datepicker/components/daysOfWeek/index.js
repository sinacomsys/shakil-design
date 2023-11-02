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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaysOfWeekTitle = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/daysOfWeek/index.tsx";
var atoms_1 = require("../../../../atoms");
var style_1 = require("./style");
var daysOfWeek = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
var DaysOfWeekTitle = function () {
    var classes = (0, style_1.useStyle)();
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["container"] }, { children: daysOfWeek.map(function (item, index) {
            return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["day"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ theme: "Regular", size: 14, color: "white" }, { children: item }), void 0, false, { fileName: _jsxFileName, lineNumber: 12, columnNumber: 13 }, _this) }), index, false, { fileName: _jsxFileName, lineNumber: 10, columnNumber: 17 }, _this));
        }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 7, columnNumber: 11 }, _this));
};
exports.DaysOfWeekTitle = DaysOfWeekTitle;
//# sourceMappingURL=index.js.map