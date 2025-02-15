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
exports.Calendar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var style_1 = require("./style");
var context_1 = require("../../context");
var header_1 = require("../header");
var daysOfWeek_1 = require("../daysOfWeek");
var matrix_1 = require("../matrix");
var Calendar = function () {
    var classes = (0, style_1.useStyles)();
    var isMatrixOpen = (0, react_1.useContext)(context_1.DatePickerContext).isMatrixOpen;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: classes["calendar-wrapper"], style: {
            height: isMatrixOpen ? "auto" : 0,
        } }, { children: [(0, jsx_runtime_1.jsx)(header_1.Header, {}), (0, jsx_runtime_1.jsxs)("div", __assign({ className: classes["matrix"] }, { children: [(0, jsx_runtime_1.jsx)(daysOfWeek_1.DaysOfWeekTitle, {}), (0, jsx_runtime_1.jsx)(matrix_1.Matrix, {})] }))] })));
};
exports.Calendar = Calendar;
//# sourceMappingURL=index.js.map