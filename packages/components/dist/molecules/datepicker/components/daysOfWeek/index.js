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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaysOfWeekTitle = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "/home/amir/project/TML/amir-shakil-design/shakil-design/packages/components/src/molecules/datepicker/components/daysOfWeek/index.tsx";
var react_1 = require("react");
var atoms_1 = require("../../../../atoms");
var context_1 = require("../../context");
var style_1 = require("./style");
var classnames_1 = __importDefault(require("classnames"));
var persianDaysOfWeek = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
var gregorianDaysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var DaysOfWeekTitle = function () {
    var classes = (0, style_1.useStyle)();
    var calendarMode = (0, react_1.useContext)(context_1.DatePickerContext).calendarMode;
    var daysOfWeek = calendarMode === "persian" ? persianDaysOfWeek : gregorianDaysOfWeek;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)(classes["container"], calendarMode === "gregorian" && "".concat(classes["container"], "--gregorian")) }, { children: daysOfWeek.map(function (item, index) {
            return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["day"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ theme: "Regular", size: 14, color: "white" }, { children: item }), void 0, false, { fileName: _jsxFileName, lineNumber: 27, columnNumber: 13 }, _this) }), index, false, { fileName: _jsxFileName, lineNumber: 25, columnNumber: 17 }, _this));
        }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 17, columnNumber: 11 }, _this));
};
exports.DaysOfWeekTitle = DaysOfWeekTitle;
//# sourceMappingURL=index.js.map