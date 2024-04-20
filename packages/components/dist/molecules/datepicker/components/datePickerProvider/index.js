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
exports.DatePickerProvider = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design/packages/components/src/molecules/datepicker/components/datePickerProvider/index.tsx";
var moment_jalaali_1 = __importDefault(require("moment-jalaali"));
var react_1 = require("react");
var context_1 = require("../../context");
var chuckDaysOfMonth_1 = require("../../utils/chuckDaysOfMonth");
var context_2 = require("../manualImportDate/context");
var generateMods_1 = require("../../utils/generateMods");
var DatePickerProvider = function (_a) {
    var handleExtendCalendar = _a.handleExtendCalendar, isMatrixOpenPorps = _a.isCalendarExtended, valueProps = _a.value, _b = _a.calendarMode, calendarMode = _b === void 0 ? "persian" : _b, onOkDate = _a.onOkDate, disableDateFrom = _a.disableDateFrom, children = _a.children, isDisableProps = _a.isDisable, onEditAgainProps = _a.onEditAgain, testid = _a.testid;
    var isPersian = calendarMode === "persian";
    var setValue = context_2.ManualImportDateContext.useFormContext().setValue;
    var _c = (0, react_1.useState)(false), isConfirmed = _c[0], setConfirm = _c[1];
    var _d = (0, react_1.useState)((0, chuckDaysOfMonth_1.chunkDaysOfMonth)((0, moment_jalaali_1.default)(), isPersian)), monthMatrix = _d[0], setMonthMatrix = _d[1];
    var _e = (0, react_1.useState)(false), isMatrixOpen = _e[0], setMatrixOpen = _e[1];
    var _f = (0, react_1.useState)(null), selectedDate = _f[0], setSelectedDate = _f[1];
    var _g = (0, react_1.useState)((0, moment_jalaali_1.default)()), currentDate = _g[0], setCurrentDate = _g[1];
    var _h = (0, generateMods_1.generateMods)(isPersian), DAY_FORMAT = _h.DAY_FORMAT, FULL_DATE_FORMAT = _h.FULL_DATE_FORMAT, FULL_TIME_FORMAT = _h.FULL_TIME_FORMAT, MONTH = _h.MONTH, MONTH_NAME_FORMAT = _h.MONTH_NAME_FORMAT, MONTH_NUMBER_FORMAT = _h.MONTH_NUMBER_FORMAT, SHORT_DAY_FORMAT = _h.SHORT_DAY_FORMAT, YEAR = _h.YEAR, YEAR_FORMAT = _h.YEAR_FORMAT;
    var onExtendMatrix = function () {
        setMatrixOpen(true);
        handleExtendCalendar === null || handleExtendCalendar === void 0 ? void 0 : handleExtendCalendar({ status: "extend" });
    };
    var onShrinkMatrix = function () {
        setMatrixOpen(false);
        handleExtendCalendar === null || handleExtendCalendar === void 0 ? void 0 : handleExtendCalendar({ status: "shrink" });
    };
    (0, react_1.useEffect)(function () {
        if (!valueProps) {
            setSelectedDate(null);
            setCurrentDate((0, moment_jalaali_1.default)());
            setValue("day", "");
            setValue("month", "");
            setValue("year", "");
            setValue("hour", "");
            setValue("minute", "");
            setConfirm(false);
        }
        else if (valueProps) {
            setSelectedDate(valueProps);
            setCurrentDate(valueProps);
            setMonthMatrix((0, chuckDaysOfMonth_1.chunkDaysOfMonth)(valueProps, isPersian));
            var day = valueProps.format(DAY_FORMAT);
            var month = valueProps.format(MONTH_NUMBER_FORMAT);
            var year = valueProps.format(YEAR_FORMAT);
            var hour = valueProps.format("HH");
            var minute = valueProps.format("mm");
            setValue("day", day);
            setValue("month", month);
            setValue("year", year);
            setValue("hour", hour === "00" ? "" : hour);
            setValue("minute", minute === "00" ? "" : minute);
        }
    }, [
        DAY_FORMAT,
        MONTH_NUMBER_FORMAT,
        YEAR_FORMAT,
        isPersian,
        setValue,
        valueProps,
    ]);
    var handleSelectDateFromMatrix = (0, react_1.useCallback)(function (value) {
        setSelectedDate(value);
        var day = value.format(DAY_FORMAT);
        var month = value.format(MONTH_NUMBER_FORMAT);
        var year = value.format(YEAR_FORMAT);
        var hour = (0, moment_jalaali_1.default)().format("HH");
        var minute = (0, moment_jalaali_1.default)().format("mm");
        setValue("day", day);
        setValue("month", month);
        setValue("year", year);
        setValue("hour", hour);
        setValue("minute", minute);
    }, [DAY_FORMAT, MONTH_NUMBER_FORMAT, YEAR_FORMAT, setValue]);
    var handleSetCurrentDate = function (value) {
        setMonthMatrix((0, chuckDaysOfMonth_1.chunkDaysOfMonth)(value, isPersian));
        setCurrentDate(value);
    };
    var onAddMonth = function () {
        var newValue = currentDate === null || currentDate === void 0 ? void 0 : currentDate.clone().add(1, MONTH);
        if (!newValue)
            return;
        handleSetCurrentDate(newValue);
    };
    var onSubtractMonth = function () {
        var newValue = currentDate === null || currentDate === void 0 ? void 0 : currentDate.clone().subtract(1, MONTH);
        if (!newValue)
            return;
        handleSetCurrentDate(newValue);
    };
    var onAddYear = function () {
        var newValue = currentDate === null || currentDate === void 0 ? void 0 : currentDate.clone().add(1, YEAR);
        if (!newValue)
            return;
        handleSetCurrentDate(newValue);
    };
    var onSubtractYear = function () {
        var newValue = currentDate === null || currentDate === void 0 ? void 0 : currentDate.clone().subtract(1, YEAR);
        if (!newValue)
            return;
        handleSetCurrentDate(newValue);
    };
    var handleSetSelectedDateFromInputs = function (value) {
        setSelectedDate(value);
    };
    var onConfirmDate = function () {
        setConfirm(true);
    };
    var onEditAgain = function () {
        setConfirm(false);
        onEditAgainProps === null || onEditAgainProps === void 0 ? void 0 : onEditAgainProps();
    };
    // eslint-disable-next-line @typescript-eslint/naming-convention
    var _isMatrixOpen = false;
    if (isMatrixOpenPorps !== undefined) {
        _isMatrixOpen = isMatrixOpenPorps;
    }
    else {
        _isMatrixOpen = isMatrixOpen;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    var _isConfirm = false;
    if (isDisableProps !== undefined) {
        _isConfirm = isDisableProps;
    }
    else {
        _isConfirm = isConfirmed;
    }
    var handleOnGoToday = function () {
        setMonthMatrix((0, chuckDaysOfMonth_1.chunkDaysOfMonth)((0, moment_jalaali_1.default)(), isPersian));
        setSelectedDate((0, moment_jalaali_1.default)());
        setCurrentDate((0, moment_jalaali_1.default)());
        var today = (0, moment_jalaali_1.default)();
        var day = today.format(DAY_FORMAT);
        var month = today.format(MONTH_NUMBER_FORMAT);
        var year = today.format(YEAR_FORMAT);
        var hour = today.format("HH");
        var minute = today.format("mm");
        setValue("day", day);
        setValue("month", month);
        setValue("year", year);
        setValue("hour", hour === "00" ? "" : hour);
        setValue("minute", minute === "00" ? "" : minute);
    };
    return ((0, jsx_dev_runtime_1.jsxDEV)(context_1.DatePickerContext.Provider, __assign({ value: {
            testid: testid,
            onEditAgain: onEditAgain,
            onConfirmDate: onConfirmDate,
            isConfirmed: _isConfirm,
            currentDate: currentDate,
            onAddMonth: onAddMonth,
            onSubtractMonth: onSubtractMonth,
            onAddYear: onAddYear,
            onSubtractYear: onSubtractYear,
            onSetCurrentDate: handleSetCurrentDate,
            handleSelectDateFromMatrix: handleSelectDateFromMatrix,
            handleSetSelectedDateFromInputs: handleSetSelectedDateFromInputs,
            selectedDate: selectedDate,
            monthMatrix: monthMatrix,
            isMatrixOpen: _isMatrixOpen,
            calendarMode: calendarMode,
            onOkDate: onOkDate,
            disableDateFrom: disableDateFrom,
            onExtendMatrix: onExtendMatrix,
            onShrinkMatrix: onShrinkMatrix,
            formats: {
                DAY_FORMAT: DAY_FORMAT,
                FULL_DATE_FORMAT: FULL_DATE_FORMAT,
                FULL_TIME_FORMAT: FULL_TIME_FORMAT,
                MONTH_NAME_FORMAT: MONTH_NAME_FORMAT,
                YEAR_FORMAT: YEAR_FORMAT,
                MONTH: MONTH,
                SHORT_DAY_FORMAT: SHORT_DAY_FORMAT,
                MONTH_NUMBER_FORMAT: MONTH_NUMBER_FORMAT,
            },
        } }, { children: children({
            value: selectedDate,
            disable: !_isConfirm,
            onGoToday: handleOnGoToday,
        }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 180, columnNumber: 11 }, _this));
};
var DatePickerProviderWrapper = function (props) {
    return ((0, jsx_dev_runtime_1.jsxDEV)(context_2.ManualImportDateContext.Provider, __assign({ mode: "onChange" }, { children: (0, jsx_dev_runtime_1.jsxDEV)(DatePickerProvider, __assign({}, props), void 0, false, { fileName: _jsxFileName, lineNumber: 227, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 225, columnNumber: 11 }, _this));
};
exports.DatePickerProvider = DatePickerProviderWrapper;
//# sourceMappingURL=index.js.map