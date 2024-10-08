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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangePickerPanel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var datePickerProvider_1 = require("../datePickerProvider");
var wrapperTemplate_1 = require("../wrapperTemplate");
var datePickerPanel_1 = require("../datePickerPanel");
var moment_jalaali_1 = __importDefault(require("moment-jalaali"));
var RangePickerPanel = function (_a) {
    var value = _a.value, onChange = _a.onChange, calendarMode = _a.calendarMode, testid = _a.testid;
    var _b = (0, react_1.useState)(undefined), startDate = _b[0], setStartDate = _b[1];
    var _c = (0, react_1.useState)(undefined), endDate = _c[0], setEndDate = _c[1];
    var _d = (0, react_1.useState)(false), isStartDateDisable = _d[0], setStartDateDisable = _d[1];
    var _e = (0, react_1.useState)(true), isEndDateDisable = _e[0], setEndDateDisable = _e[1];
    var _f = (0, react_1.useState)(false), isStartDateExtended = _f[0], setStartDateExtend = _f[1];
    var _g = (0, react_1.useState)(false), isEndDateExtended = _g[0], setEndDateExtend = _g[1];
    var handleSetFromDate = function (value) {
        setStartDate(value);
        setStartDateDisable(true);
        if (!endDate) {
            setEndDateDisable(false);
        }
        if (value === null || value === void 0 ? void 0 : value.isAfter(endDate, "minute")) {
            setEndDate(null);
        }
    };
    var handleSetEndDate = function (value) {
        setEndDate(value);
        setEndDateDisable(true);
        if (value === null || value === void 0 ? void 0 : value.isBefore(startDate, "minute")) {
            setEndDate(null);
        }
    };
    var onEditAgainFromDate = function () {
        if (!isEndDateDisable)
            return;
        setStartDateDisable(false);
        setEndDateDisable(true);
        setEndDateExtend(false);
    };
    var onEditAgainEndDate = function () {
        if (!startDate || !isStartDateDisable)
            return;
        setEndDateDisable(false);
        setStartDateDisable(true);
        setStartDateExtend(false);
    };
    var handleFinalConfirm = function () {
        onChange === null || onChange === void 0 ? void 0 : onChange({ from: startDate, to: endDate });
    };
    (0, react_1.useEffect)(function () {
        setStartDate(value === null || value === void 0 ? void 0 : value.from);
        setEndDate(value === null || value === void 0 ? void 0 : value.to);
    }, [value === null || value === void 0 ? void 0 : value.from, value === null || value === void 0 ? void 0 : value.to]);
    var handleExtendStartDate = function (_a) {
        var status = _a.status;
        if (status === "extend") {
            setStartDateExtend(true);
        }
        else if (status === "shrink") {
            setStartDateExtend(false);
        }
    };
    var handleExtendEndDate = function (_a) {
        var status = _a.status;
        if (status === "extend") {
            setEndDateExtend(true);
        }
        else if (status === "shrink") {
            setEndDateExtend(false);
        }
    };
    var isConfirmDisable = !isStartDateDisable || !isEndDateDisable || !startDate || !endDate;
    var handleOnGoToday = function () {
        if (!isStartDateDisable) {
            setStartDate((0, moment_jalaali_1.default)());
        }
        else if (isStartDateDisable && !isEndDateDisable) {
            setEndDate((0, moment_jalaali_1.default)());
        }
    };
    return ((0, jsx_runtime_1.jsxs)(wrapperTemplate_1.WrapperTemplate, __assign({ disable: isConfirmDisable, onFinalConfirm: handleFinalConfirm, onGoToday: handleOnGoToday, testid: testid }, { children: [(0, jsx_runtime_1.jsx)(datePickerProvider_1.DatePickerProvider, __assign({ testid: testid, isDisable: isStartDateDisable, onOkDate: handleSetFromDate, onEditAgain: onEditAgainFromDate, value: startDate, isCalendarExtended: isStartDateExtended, handleExtendCalendar: handleExtendStartDate, calendarMode: calendarMode }, { children: function () {
                    return (0, jsx_runtime_1.jsx)(datePickerPanel_1.DatePickerPanel, {});
                } })), (0, jsx_runtime_1.jsx)(datePickerProvider_1.DatePickerProvider, __assign({ testid: testid, disableDateFrom: startDate, isDisable: isEndDateDisable, onOkDate: handleSetEndDate, onEditAgain: onEditAgainEndDate, value: endDate, isCalendarExtended: isEndDateExtended, handleExtendCalendar: handleExtendEndDate, calendarMode: calendarMode }, { children: function () {
                    return (0, jsx_runtime_1.jsx)(datePickerPanel_1.DatePickerPanel, {});
                } }))] })));
};
exports.RangePickerPanel = RangePickerPanel;
//# sourceMappingURL=rangePickerPanel.js.map