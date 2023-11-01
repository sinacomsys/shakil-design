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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/panel/index.tsx";
import { DatePickerContext } from "../../context";
import { useState, useContext, useEffect } from "react";
import { chunkDaysOfMonth } from "../../utils/chuckDaysOfMonth";
import { Header } from "../header";
import { DaysOfWeekTitle } from "../daysOfWeek";
import { Matrix } from "../matrix";
import { ManualImportDate } from "../manualImportDate";
import { BaseIcon } from "../../../../atoms";
import { useStyle } from "./style";
export var Panel = function () {
    var _a = useState(), monthMatrix = _a[0], setMonthMatrix = _a[1];
    var _b = useState(false), isMatrixOpen = _b[0], setMatrixOpen = _b[1];
    var classes = useStyle();
    var _c = useContext(DatePickerContext), goToday = _c.goToday, onSetCurrentDate = _c.onSetCurrentDate, onSelectDate = _c.onSelectDate;
    var _d = useContext(DatePickerContext), currentDate = _d.currentDate, isCalendarExtended = _d.isCalendarExtended, handleExtendCalendar = _d.handleExtendCalendar;
    useEffect(function () {
        if (!currentDate)
            return;
        setMonthMatrix(chunkDaysOfMonth(currentDate));
    }, [currentDate]);
    var onCollapseMatrix = function () {
        setMatrixOpen(function (prev) { return !prev; });
        handleExtendCalendar === null || handleExtendCalendar === void 0 ? void 0 : handleExtendCalendar();
    };
    // eslint-disable-next-line @typescript-eslint/naming-convention
    var _isCalendarExtended = isCalendarExtended !== undefined ? isCalendarExtended : isMatrixOpen;
    return (_jsxDEV("div", __assign({ className: classes["panel"] }, { children: [_jsxDEV("div", __assign({ className: classes["matrixContainer"], style: {
                    height: _isCalendarExtended ? "auto" : 0,
                } }, { children: [_jsxDEV(Header, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 9 }, _this), _jsxDEV("div", __assign({ className: classes["matrix"] }, { children: [_jsxDEV(DaysOfWeekTitle, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 11 }, _this), _jsxDEV(Matrix, { monthMatrix: monthMatrix }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 7 }, _this), _jsxDEV("div", __assign({ className: classes["manualInput"] }, { children: [_jsxDEV(ManualImportDate, __assign({}, { goToday: goToday, onSelectDate: onSelectDate, onSetCurrentDate: onSetCurrentDate }), void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 9 }, _this), _jsxDEV("div", __assign({ className: classes["expandIcon"] }, { children: [_jsxDEV(BaseIcon, { color: "#eeeeee", name: "Every-Boxes-_-Flesh-Icon-for-more-choices", size: { height: 5, width: 9 }, wrapperStyle: { marginBottom: 5, justifyContent: "center" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 11 }, _this), _jsxDEV(BaseIcon, { wrapperStyle: { cursor: "pointer" }, onClick: onCollapseMatrix, color: "#eeeeee", name: "Calendar-_-Calendar-Icon", size: {
                                    width: 18,
                                    height: 18,
                                } }, void 0, false, { fileName: _jsxFileName, lineNumber: 60, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 51, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 36, columnNumber: 11 }, _this));
};
//# sourceMappingURL=index.js.map