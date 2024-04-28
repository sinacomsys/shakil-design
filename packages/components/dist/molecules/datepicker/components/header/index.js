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
exports.Header = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/header/index.tsx";
var atoms_1 = require("../../../../atoms");
var context_1 = require("../../context");
var react_1 = require("react");
var style_1 = require("./style");
var moment_jalaali_1 = __importDefault(require("moment-jalaali"));
var Header = function () {
    var _a = (0, react_1.useContext)(context_1.DatePickerContext), currentDate = _a.currentDate, onAddMonth = _a.onAddMonth, onAddYear = _a.onAddYear, onSubtractMonth = _a.onSubtractMonth, onSubtractYear = _a.onSubtractYear, calendarMode = _a.calendarMode;
    var classes = (0, style_1.useStyle)();
    var date = currentDate &&
        new Date(Number((0, moment_jalaali_1.default)(currentDate).format("YYYY")), Number((0, moment_jalaali_1.default)(currentDate).format("MM")) - 1, Number((0, moment_jalaali_1.default)(currentDate).format("DD")));
    var month = date &&
        new Intl.DateTimeFormat(calendarMode === "persian" ? "fa-IR" : "en-US", {
            month: "short",
        }).format(date);
    var year = date &&
        new Intl.DateTimeFormat(calendarMode === "persian" ? "fa-IR" : "en-US", {
            year: "numeric",
        }).format(date);
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["wrapper"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["prevMonth"], onClick: onSubtractMonth }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { name: "Calendar-_-Month-_-Previous-Month", size: {
                        width: 19,
                        height: 13,
                    }, color: ["white"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 41, columnNumber: 9 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 40, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["nextMonth"], onClick: onAddMonth }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { onClick: onAddMonth, name: "Calendar-_-Month-_-Next-Month", size: {
                        width: 19,
                        height: 13,
                    }, color: ["white"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 51, columnNumber: 9 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["month"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ size: 14, color: "white", theme: "Regular" }, { children: month !== null && month !== void 0 ? month : "" }), void 0, false, { fileName: _jsxFileName, lineNumber: 63, columnNumber: 9 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { display: "flex", alignItems: "center" } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["change-year"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { name: "Calendar-_-Year-_-Previous-Year", size: { width: 13, height: 8 }, color: ["white"], onClick: onSubtractYear, wrapperStyle: { cursor: "pointer" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 68, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 67, columnNumber: 11 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ className: classes["year"], color: "white", size: 14 }, { children: year !== null && year !== void 0 ? year : "" }), void 0, false, { fileName: _jsxFileName, lineNumber: 77, columnNumber: 11 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["change-year"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { name: "Calendar-_-Year-_-Next-Year", size: { width: 13, height: 8 }, color: ["white"], onClick: onAddYear, wrapperStyle: { cursor: "pointer" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 81, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 80, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 66, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 62, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 11 }, _this));
};
exports.Header = Header;
//# sourceMappingURL=index.js.map