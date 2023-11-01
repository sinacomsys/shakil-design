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
exports.Panel = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/panel/index.tsx";
var context_1 = require("../../context");
var react_1 = require("react");
var chuckDaysOfMonth_1 = require("../../utils/chuckDaysOfMonth");
var header_1 = require("../header");
var daysOfWeek_1 = require("../daysOfWeek");
var matrix_1 = require("../matrix");
var manualImportDate_1 = require("../manualImportDate");
var atoms_1 = require("../../../../atoms");
var style_1 = require("./style");
var Panel = function () {
    var _a = (0, react_1.useState)(), monthMatrix = _a[0], setMonthMatrix = _a[1];
    var _b = (0, react_1.useState)(false), isMatrixOpen = _b[0], setMatrixOpen = _b[1];
    var classes = (0, style_1.useStyle)();
    var _c = (0, react_1.useContext)(context_1.DatePickerContext), goToday = _c.goToday, onSetCurrentDate = _c.onSetCurrentDate, onSelectDate = _c.onSelectDate;
    var _d = (0, react_1.useContext)(context_1.DatePickerContext), currentDate = _d.currentDate, isCalendarExtended = _d.isCalendarExtended, handleExtendCalendar = _d.handleExtendCalendar;
    (0, react_1.useEffect)(function () {
        if (!currentDate)
            return;
        setMonthMatrix((0, chuckDaysOfMonth_1.chunkDaysOfMonth)(currentDate));
    }, [currentDate]);
    var onCollapseMatrix = function () {
        setMatrixOpen(function (prev) { return !prev; });
        handleExtendCalendar === null || handleExtendCalendar === void 0 ? void 0 : handleExtendCalendar();
    };
    // eslint-disable-next-line @typescript-eslint/naming-convention
    var _isCalendarExtended = isCalendarExtended !== undefined ? isCalendarExtended : isMatrixOpen;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["panel"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["matrixContainer"], style: {
                    height: _isCalendarExtended ? "auto" : 0,
                } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(header_1.Header, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 9 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["matrix"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(daysOfWeek_1.DaysOfWeekTitle, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 11 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(matrix_1.Matrix, { monthMatrix: monthMatrix }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["manualInput"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(manualImportDate_1.ManualImportDate, __assign({}, { goToday: goToday, onSelectDate: onSelectDate, onSetCurrentDate: onSetCurrentDate }), void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 9 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["expandIcon"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { color: "#eeeeee", name: "Every-Boxes-_-Flesh-Icon-for-more-choices", size: { height: 5, width: 9 }, wrapperStyle: { marginBottom: 5, justifyContent: "center" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 11 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { wrapperStyle: { cursor: "pointer" }, onClick: onCollapseMatrix, color: "#eeeeee", name: "Calendar-_-Calendar-Icon", size: {
                                    width: 18,
                                    height: 18,
                                } }, void 0, false, { fileName: _jsxFileName, lineNumber: 60, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 51, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 36, columnNumber: 11 }, _this));
};
exports.Panel = Panel;
//# sourceMappingURL=index.js.map