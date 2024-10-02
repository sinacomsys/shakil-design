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
exports.Calendar = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "F:/shakil-design/packages/components/src/molecules/datepicker/components/calendar/index.tsx";
var react_1 = require("react");
var style_1 = require("./style");
var context_1 = require("../../context");
var header_1 = require("../header");
var daysOfWeek_1 = require("../daysOfWeek");
var matrix_1 = require("../matrix");
var Calendar = function () {
    var classes = (0, style_1.useStyles)();
    var isMatrixOpen = (0, react_1.useContext)(context_1.DatePickerContext).isMatrixOpen;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["calendar-wrapper"], style: {
            height: isMatrixOpen ? "auto" : 0,
        } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(header_1.Header, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 19, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["matrix"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(daysOfWeek_1.DaysOfWeekTitle, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 21, columnNumber: 9 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(matrix_1.Matrix, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 22, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 20, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 12, columnNumber: 11 }, _this));
};
exports.Calendar = Calendar;
//# sourceMappingURL=index.js.map