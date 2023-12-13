"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerProvider = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName =
  "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/datePickerProvider/index.tsx";
var checkDateIsValid_1 = require("../../utils/checkDateIsValid");
var moment_jalaali_1 = __importDefault(require("moment-jalaali"));
var react_1 = require("react");
var context_1 = require("../../context");
var chuckDaysOfMonth_1 = require("../../utils/chuckDaysOfMonth");
var calendarMode_1 = require("../../utils/calendarMode");
var context_2 = require("../manualImportDate/context");
var DatePickerProvider = function (_a) {
  var onMonthChange = _a.onMonthChange,
    onDayChange = _a.onDayChange,
    onYearChange = _a.onYearChange,
    onChange = _a.onChange,
    children = _a.children,
    handleExtendCalendar = _a.handleExtendCalendar,
    isCalendarExtended = _a.isCalendarExtended,
    value = _a.value,
    _b = _a.calendarMode,
    calendarMode = _b === void 0 ? "persian" : _b;
  var setValue = context_2.ManualImportDateContext.useFormContext().setValue;
  var isPersian = calendarMode === "persian";
  var YEAR_FORMAT = isPersian
    ? calendarMode_1.PERSIAN_YEAR_FORMAT
    : calendarMode_1.GREGORIAN_YEAR_FORMAT;
  var MONTH_NAME_FORMAT = isPersian
    ? calendarMode_1.PERSIAN_MONTH_NAME_FORMAT
    : calendarMode_1.GREGORIAN_MONTH_NAME_FORMAT;
  var MONTH_NUMBER_FORMAT = isPersian
    ? calendarMode_1.PERSIAN_MONTH_NUMBER_FORMAT
    : calendarMode_1.GREGORIAN_MONTH_NUMBER_FORMAT;
  var DAY_FORMAT = isPersian
    ? calendarMode_1.PERSIAN_DAY_FORMAT
    : calendarMode_1.GREGORIAN_DAY_FORMAT;
  var FULL_DATE_FORMAT = isPersian
    ? calendarMode_1.PERSIAN_FULL_DATE_FORMAT
    : calendarMode_1.GREGORIAN_FULL_DATE_FORMAT;
  var FULL_TIME_FORMAT = isPersian
    ? calendarMode_1.PERSIAN_FULL_TIME_FORMAT
    : calendarMode_1.GREGORIAN_FULL_TIME_FORMAT;
  var MONTH = isPersian
    ? calendarMode_1.PERSIAN_MONTH
    : calendarMode_1.GREGORIAN_MONTH;
  var SHORT_DAY_FORMAT = isPersian
    ? calendarMode_1.PERSIAN_DAY_SHORT_FORMAT
    : calendarMode_1.GREGORIAN_DAY_SHORT_FORMAT;
  var _c = (0, react_1.useState)([]),
    monthMatrix = _c[0],
    setMonthMatrix = _c[1];
  var _d = (0, react_1.useState)(false),
    isMatrixOpen = _d[0],
    setMatrixOpen = _d[1];
  var _e = (0, react_1.useState)(null),
    selectedDate = _e[0],
    setSelectedDate = _e[1];
  var _f = (0, react_1.useState)(""),
    inputValue = _f[0],
    setInputValue = _f[1];
  var _g = (0, react_1.useState)((0, moment_jalaali_1.default)()),
    currentDate = _g[0],
    setCurrentDate = _g[1];
  var onCollapseMatrix = function () {
    setMatrixOpen(function (prev) {
      return !prev;
    });
    handleExtendCalendar === null || handleExtendCalendar === void 0
      ? void 0
      : handleExtendCalendar();
  };
  (0, react_1.useEffect)(
    function () {
      if (!currentDate) return;
      setMonthMatrix(
        (0, chuckDaysOfMonth_1.chunkDaysOfMonth)(currentDate, isPersian),
      );
    },
    [currentDate, isPersian],
  );
  (0, react_1.useEffect)(
    function () {
      var _a;
      setCurrentDate(
        value !== null && value !== void 0
          ? value
          : (0, moment_jalaali_1.default)(),
      );
      setSelectedDate(value);
      setInputValue(
        (_a =
          value === null || value === void 0
            ? void 0
            : value.format(FULL_TIME_FORMAT)) !== null && _a !== void 0
          ? _a
          : "",
      );
    },
    [FULL_TIME_FORMAT, value],
  );
  var handleMonthChange = function (value) {
    onMonthChange === null || onMonthChange === void 0
      ? void 0
      : onMonthChange({
          name:
            value === null || value === void 0 ? void 0 : value.format("jMMMM"),
          value: Number(
            value === null || value === void 0
              ? void 0
              : value.format(MONTH_NAME_FORMAT),
          ),
        });
  };
  var handleOnChangeYear = function (value) {
    onYearChange === null || onYearChange === void 0
      ? void 0
      : onYearChange(value);
  };
  var onAddMonth = function () {
    var newValue =
      currentDate === null || currentDate === void 0
        ? void 0
        : currentDate.clone().add(1, "jMonth");
    if (!newValue) return;
    setCurrentDate(newValue);
    handleMonthChange(newValue);
  };
  var onSubtractMonth = function () {
    var newValue =
      currentDate === null || currentDate === void 0
        ? void 0
        : currentDate.clone().subtract(1, "jMonth");
    setCurrentDate(newValue);
    if (!newValue) return;
    handleMonthChange(newValue);
  };
  var onAddYear = function () {
    var newValue =
      currentDate === null || currentDate === void 0
        ? void 0
        : currentDate.clone().add(1, "jYear");
    if (!newValue) return;
    setCurrentDate(newValue);
    handleOnChangeYear(newValue.format(YEAR_FORMAT));
  };
  var onSubtractYear = function () {
    var newValue =
      currentDate === null || currentDate === void 0
        ? void 0
        : currentDate.clone().subtract(1, "jYear");
    if (!newValue) return;
    setCurrentDate(newValue);
    handleOnChangeYear(newValue.format(YEAR_FORMAT));
  };
  var onSetCurrentDate = function (value) {
    setCurrentDate(value);
  };
  var onSelectDate = function (value) {
    setSelectedDate(value);
    onDayChange === null || onDayChange === void 0
      ? void 0
      : onDayChange(value.format(DAY_FORMAT));
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
  };
  var onChangeDateInputText = function (value) {
    setInputValue(value);
    var isValid = (0, checkDateIsValid_1.checkIsDateValid)(value);
    if (isValid) {
      setCurrentDate((0, moment_jalaali_1.default)(value, FULL_DATE_FORMAT));
      setSelectedDate((0, moment_jalaali_1.default)(value, FULL_DATE_FORMAT));
      return;
    }
    setCurrentDate((0, moment_jalaali_1.default)());
    setSelectedDate(null);
  };
  return (0, jsx_dev_runtime_1.jsxDEV)(
    context_1.DatePickerContext.Provider,
    __assign(
      {
        value: {
          onChange: onChange,
          currentDate: currentDate,
          onAddMonth: onAddMonth,
          onSubtractMonth: onSubtractMonth,
          onAddYear: onAddYear,
          onSubtractYear: onSubtractYear,
          onSetCurrentDate: onSetCurrentDate,
          onSelectDate: onSelectDate,
          selectedDate: selectedDate,
          isCalendarExtended: isCalendarExtended,
          monthMatrix: monthMatrix,
          onCollapseMatrix: onCollapseMatrix,
          isMatrixOpen: isMatrixOpen,
          calendarMode: calendarMode,
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
        },
      },
      {
        children:
          typeof children === "function"
            ? children({
                value: inputValue,
                onChangeDateInputText: onChangeDateInputText,
              })
            : children,
      },
    ),
    void 0,
    false,
    { fileName: _jsxFileName, lineNumber: 161, columnNumber: 11 },
    _this,
  );
};
var DatePickerProviderWrapper = function (props) {
  return (0, jsx_dev_runtime_1.jsxDEV)(
    context_2.ManualImportDateContext.Provider,
    __assign(
      { mode: "onChange" },
      {
        children: (0, jsx_dev_runtime_1.jsxDEV)(
          DatePickerProvider,
          __assign({}, props),
          void 0,
          false,
          { fileName: _jsxFileName, lineNumber: 203, columnNumber: 7 },
          _this,
        ),
      },
    ),
    void 0,
    false,
    { fileName: _jsxFileName, lineNumber: 201, columnNumber: 11 },
    _this,
  );
};
exports.DatePickerProvider = DatePickerProviderWrapper;
//# sourceMappingURL=index.js.map
