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
var moment_jalaali_1 = __importDefault(require("moment-jalaali"));
var react_1 = require("react");
var context_1 = require("../../context");
var chuckDaysOfMonth_1 = require("../../utils/chuckDaysOfMonth");
var calendarMode_1 = require("../../utils/calendarMode");
var context_2 = require("../manualImportDate/context");
// import { DatePickerPanel } from "../datePickerPanel";
var DatePickerProvider = function (_a) {
  var handleExtendCalendar = _a.handleExtendCalendar,
    isCalendarExtended = _a.isCalendarExtended,
    value = _a.value,
    _b = _a.calendarMode,
    calendarMode = _b === void 0 ? "persian" : _b,
    onOkDate = _a.onOkDate,
    disableDateFrom = _a.disableDateFrom,
    onEditAgain = _a.onEditAgain,
    isDisable = _a.isDisable,
    children = _a.children;
  var setValue = context_2.ManualImportDateContext.useFormContext().setValue;
  var _c = (0, react_1.useState)(false),
    isConfirmed = _c[0],
    setConfirm = _c[1];
  var isPersian = calendarMode === "persian";
  var YEAR_FORMAT = isPersian
    ? calendarMode_1.PERSIAN_YEAR_FORMAT
    : calendarMode_1.GREGORIAN_YEAR_FORMAT;
  var YEAR = isPersian
    ? calendarMode_1.PERSIAN_YEAR
    : calendarMode_1.GREGORIAN_YEAR;
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
  var _d = (0, react_1.useState)([]),
    monthMatrix = _d[0],
    setMonthMatrix = _d[1];
  var _e = (0, react_1.useState)(false),
    isMatrixOpen = _e[0],
    setMatrixOpen = _e[1];
  var _f = (0, react_1.useState)(null),
    selectedDate = _f[0],
    setSelectedDate = _f[1];
  var _g = (0, react_1.useState)((0, moment_jalaali_1.default)()),
    currentDate = _g[0],
    setCurrentDate = _g[1];
  var onExtendMatrix = function () {
    setMatrixOpen(true);
    handleExtendCalendar === null || handleExtendCalendar === void 0
      ? void 0
      : handleExtendCalendar({ status: "extend" });
  };
  var onShrinkMatrix = function () {
    setMatrixOpen(false);
    handleExtendCalendar === null || handleExtendCalendar === void 0
      ? void 0
      : handleExtendCalendar({ status: "shrink" });
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
      setCurrentDate(
        value !== null && value !== void 0
          ? value
          : (0, moment_jalaali_1.default)(),
      );
      setSelectedDate(value);
      if (!value) {
        setValue("day", "");
        setValue("month", "");
        setValue("year", "");
        setValue("hour", "");
        setValue("minute", "");
        // onEditAgain?.();
        setConfirm(false);
      }
    },
    [FULL_TIME_FORMAT, setValue, value],
  );
  var onAddMonth = function () {
    //@ts-ignore
    var newValue =
      currentDate === null || currentDate === void 0
        ? void 0
        : currentDate.clone().add(1, MONTH);
    if (!newValue) return;
    setCurrentDate(newValue);
  };
  var onSubtractMonth = function () {
    //@ts-ignore
    var newValue =
      currentDate === null || currentDate === void 0
        ? void 0
        : currentDate.clone().subtract(1, MONTH);
    setCurrentDate(newValue);
  };
  var onAddYear = function () {
    //@ts-ignore
    var newValue =
      currentDate === null || currentDate === void 0
        ? void 0
        : currentDate.clone().add(1, YEAR);
    if (!newValue) return;
    setCurrentDate(newValue);
  };
  var onSubtractYear = function () {
    //@ts-ignore
    var newValue =
      currentDate === null || currentDate === void 0
        ? void 0
        : currentDate.clone().subtract(1, YEAR);
    if (!newValue) return;
    setCurrentDate(newValue);
  };
  var onSetCurrentDate = function (value) {
    setCurrentDate(value);
  };
  var handleSelectDateFromMatrix = function (value) {
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
  };
  var handleSetSelectedDateFromInputs = function (value) {
    setSelectedDate(value);
  };
  var onConfirmDate = function (confirm) {
    setConfirm(confirm);
  };
  var handleOnEditAgain = function () {
    onEditAgain === null || onEditAgain === void 0 ? void 0 : onEditAgain();
    setConfirm(false);
  };
  return (0, jsx_dev_runtime_1.jsxDEV)(
    context_1.DatePickerContext.Provider,
    __assign(
      {
        value: {
          onConfirmDate: onConfirmDate,
          isDisable: isDisable,
          currentDate: currentDate,
          onAddMonth: onAddMonth,
          onSubtractMonth: onSubtractMonth,
          onAddYear: onAddYear,
          onSubtractYear: onSubtractYear,
          onSetCurrentDate: onSetCurrentDate,
          handleSelectDateFromMatrix: handleSelectDateFromMatrix,
          handleSetSelectedDateFromInputs: handleSetSelectedDateFromInputs,
          selectedDate: selectedDate,
          isCalendarExtended: isCalendarExtended,
          monthMatrix: monthMatrix,
          isMatrixOpen: isMatrixOpen,
          calendarMode: calendarMode,
          onOkDate: onOkDate,
          disableDateFrom: disableDateFrom,
          onEditAgain: handleOnEditAgain,
          isConfirmed: isConfirmed,
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
        },
      },
      { children: children({ value: selectedDate, disable: !isConfirmed }) },
    ),
    void 0,
    false,
    { fileName: _jsxFileName, lineNumber: 165, columnNumber: 11 },
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
          { fileName: _jsxFileName, lineNumber: 209, columnNumber: 7 },
          _this,
        ),
      },
    ),
    void 0,
    false,
    { fileName: _jsxFileName, lineNumber: 207, columnNumber: 11 },
    _this,
  );
};
exports.DatePickerProvider = DatePickerProviderWrapper;
//# sourceMappingURL=index.js.map
