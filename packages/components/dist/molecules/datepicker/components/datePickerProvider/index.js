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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/datePickerProvider/index.tsx";
var checkDateIsValid_1 = require("../../utils/checkDateIsValid");
var moment_jalaali_1 = __importDefault(require("moment-jalaali"));
var react_1 = require("react");
var context_1 = require("../../context");
moment_jalaali_1.default.loadPersian({ dialect: "persian-modern" });
var DatePickerProvider = function (_a) {
    var onMonthChange = _a.onMonthChange, onDayChange = _a.onDayChange, onYearChange = _a.onYearChange, onChange = _a.onChange, children = _a.children, handleExtendCalendar = _a.handleExtendCalendar, isCalendarExtended = _a.isCalendarExtended, value = _a.value;
    var _b = (0, react_1.useState)((0, moment_jalaali_1.default)()), currentDate = _b[0], setCurrentDate = _b[1];
    var _c = (0, react_1.useState)(null), selectedDate = _c[0], setSelectedDate = _c[1];
    var _d = (0, react_1.useState)(""), inputValue = _d[0], setInputValue = _d[1];
    (0, react_1.useEffect)(function () {
        var _a;
        setCurrentDate(value !== null && value !== void 0 ? value : (0, moment_jalaali_1.default)());
        setSelectedDate(value);
        setInputValue((_a = value === null || value === void 0 ? void 0 : value.format("jYYYY/jMM/jDD")) !== null && _a !== void 0 ? _a : "");
    }, [value]);
    var handleMonthChange = function (value) {
        onMonthChange === null || onMonthChange === void 0 ? void 0 : onMonthChange({
            name: value === null || value === void 0 ? void 0 : value.format("jMMMM"),
            value: Number(value === null || value === void 0 ? void 0 : value.format("jMM")),
        });
    };
    var handleOnChangeYear = function (value) {
        onYearChange === null || onYearChange === void 0 ? void 0 : onYearChange(value);
    };
    var onAddMonth = function () {
        var newValue = currentDate === null || currentDate === void 0 ? void 0 : currentDate.clone().add(1, "jMonth");
        if (!newValue)
            return;
        setCurrentDate(newValue);
        handleMonthChange(newValue);
    };
    var onSubtractMonth = function () {
        var newValue = currentDate === null || currentDate === void 0 ? void 0 : currentDate.clone().subtract(1, "jMonth");
        setCurrentDate(newValue);
        if (!newValue)
            return;
        handleMonthChange(newValue);
    };
    var onAddYear = function () {
        var newValue = currentDate === null || currentDate === void 0 ? void 0 : currentDate.clone().add(1, "jYear");
        if (!newValue)
            return;
        setCurrentDate(newValue);
        handleOnChangeYear(newValue.format("jYYYY"));
    };
    var onSubtractYear = function () {
        var newValue = currentDate === null || currentDate === void 0 ? void 0 : currentDate.clone().subtract(1, "jYear");
        if (!newValue)
            return;
        setCurrentDate(newValue);
        handleOnChangeYear(newValue.format("jYYYY"));
    };
    var goToday = function () {
        setCurrentDate((0, moment_jalaali_1.default)());
    };
    var onSetCurrentDate = function (value) {
        setCurrentDate(value);
    };
    var onSelectDate = function (value) {
        setSelectedDate(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
        onDayChange === null || onDayChange === void 0 ? void 0 : onDayChange(value.format("jDD"));
        setInputValue(value.format("jYYYY/jMM/jDD"));
    };
    var onChangeDateInputText = function (value) {
        setInputValue(value);
        var isValid = (0, checkDateIsValid_1.checkIsDateValid)(value);
        if (isValid) {
            setCurrentDate((0, moment_jalaali_1.default)(value, "jYYYY/jMM/jDD"));
            setSelectedDate((0, moment_jalaali_1.default)(value, "jYYYY/jMM/jDD"));
            return;
        }
        setCurrentDate((0, moment_jalaali_1.default)());
        setSelectedDate(null);
    };
    return ((0, jsx_dev_runtime_1.jsxDEV)(context_1.DatePickerContext.Provider, __assign({ value: {
            currentDate: currentDate,
            onAddMonth: onAddMonth,
            onSubtractMonth: onSubtractMonth,
            onAddYear: onAddYear,
            onSubtractYear: onSubtractYear,
            goToday: goToday,
            onSetCurrentDate: onSetCurrentDate,
            onSelectDate: onSelectDate,
            selectedDate: selectedDate,
            handleExtendCalendar: handleExtendCalendar,
            isCalendarExtended: isCalendarExtended,
        } }, { children: typeof children === "function"
            ? children({
                value: inputValue,
                onChangeDateInputText: onChangeDateInputText,
            })
            : children }), void 0, false, { fileName: _jsxFileName, lineNumber: 95, columnNumber: 11 }, _this));
};
exports.DatePickerProvider = DatePickerProvider;
//# sourceMappingURL=index.js.map