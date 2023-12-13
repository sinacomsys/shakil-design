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
exports.Panel = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName =
  "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/panel/index.tsx";
var context_1 = require("../../context");
var react_1 = require("react");
var manualImportDate_1 = require("../manualImportDate");
var atoms_1 = require("../../../../atoms");
var style_1 = require("./style");
var context_2 = require("../manualImportDate/context");
var moment_jalaali_1 = __importDefault(require("moment-jalaali"));
var calendar_1 = require("../calendar");
var component_1 = require("@shakil-design/component");
var expandIcon_1 = require("../expandIcon");
var Panel = function () {
  var _a = (0, react_1.useState)(false),
    isConfirmed = _a[0],
    setConfirm = _a[1];
  var classes = (0, style_1.useStyle)();
  var _b = (0, react_1.useContext)(context_1.DatePickerContext),
    onSetCurrentDate = _b.onSetCurrentDate,
    onChange = _b.onChange,
    FULL_TIME_FORMAT = _b.formats.FULL_TIME_FORMAT;
  var _c = context_2.ManualImportDateContext.useFormContext(),
    getValues = _c.getValues,
    setValue = _c.setValue;
  var onConfirm = function () {
    if (!isConfirmed) return;
    var _a = getValues(),
      year = _a.year,
      month = _a.month,
      day = _a.day,
      hour = _a.hour,
      minute = _a.minute;
    var date =
      year &&
      day &&
      month &&
      (0, moment_jalaali_1.default)(
        ""
          .concat(year, "/")
          .concat(month, "/")
          .concat(day, " ")
          .concat(hour, ":")
          .concat(minute),
        FULL_TIME_FORMAT,
      );
    date && onSetCurrentDate(date);
    date &&
      (onChange === null || onChange === void 0 ? void 0 : onChange(date));
  };
  var handleConfirmDate = function () {
    setConfirm(true);
  };
  var handleOndisproveDate = function () {
    setConfirm(false);
  };
  var onGoToDay = function () {
    var current = (0, moment_jalaali_1.default)();
    var year = current.jYear();
    var month = current.jMonth();
    var date = current.jDate();
    var hour = current.hour();
    var minute = current.minute();
    setValue("day", date);
    setValue("hour", hour);
    setValue("minute", minute);
    setValue("month", month + 1);
    setValue("year", year);
  };
  return (0, jsx_dev_runtime_1.jsxDEV)(
    "div",
    __assign(
      { className: classes["wrapper"] },
      {
        children: [
          (0, jsx_dev_runtime_1.jsxDEV)(
            calendar_1.Calendar,
            {},
            void 0,
            false,
            { fileName: _jsxFileName, lineNumber: 59, columnNumber: 7 },
            _this,
          ),
          (0, jsx_dev_runtime_1.jsxDEV)(
            "div",
            __assign(
              { className: classes["manualInput"] },
              {
                children: [
                  (0, jsx_dev_runtime_1.jsxDEV)(
                    manualImportDate_1.ManualImportDate,
                    {
                      onConfirmDate: handleConfirmDate,
                      isConfirmed: isConfirmed,
                      onDisproveDate: handleOndisproveDate,
                    },
                    void 0,
                    false,
                    { fileName: _jsxFileName, lineNumber: 61, columnNumber: 9 },
                    _this,
                  ),
                  (0, jsx_dev_runtime_1.jsxDEV)(
                    "div",
                    __assign(
                      { className: classes["expand"] },
                      {
                        children: (0, jsx_dev_runtime_1.jsxDEV)(
                          expandIcon_1.ExpandIcon,
                          { handleOndisproveDate: handleOndisproveDate },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 67,
                            columnNumber: 11,
                          },
                          _this,
                        ),
                      },
                    ),
                    void 0,
                    false,
                    { fileName: _jsxFileName, lineNumber: 66, columnNumber: 9 },
                    _this,
                  ),
                ],
              },
            ),
            void 0,
            true,
            { fileName: _jsxFileName, lineNumber: 60, columnNumber: 7 },
            _this,
          ),
          (0, jsx_dev_runtime_1.jsxDEV)(
            component_1.Button,
            __assign(
              {
                className: classes["go-today"],
                size: "small",
                onClick: onGoToDay,
              },
              {
                children: (0, jsx_dev_runtime_1.jsxDEV)(
                  atoms_1.Text,
                  __assign(
                    { size: 14, color: "#FFFFFF" },
                    { children: "Go Today!" },
                  ),
                  void 0,
                  false,
                  { fileName: _jsxFileName, lineNumber: 72, columnNumber: 9 },
                  _this,
                ),
              },
            ),
            void 0,
            false,
            { fileName: _jsxFileName, lineNumber: 71, columnNumber: 7 },
            _this,
          ),
          (0, jsx_dev_runtime_1.jsxDEV)(
            "div",
            __assign(
              { className: classes["footer-icons"] },
              {
                children: [
                  (0, jsx_dev_runtime_1.jsxDEV)(
                    atoms_1.BaseIcon,
                    {
                      wrapperStyle: { cursor: "pointer" },
                      name: "Calendar-_-Close",
                      size: { height: 19, width: 19 },
                    },
                    void 0,
                    false,
                    { fileName: _jsxFileName, lineNumber: 78, columnNumber: 9 },
                    _this,
                  ),
                  (0, jsx_dev_runtime_1.jsxDEV)(
                    atoms_1.BaseIcon,
                    {
                      onClick: onConfirm,
                      name: "Calendar-_-Apply-Changes",
                      size: { height: 19, width: 19 },
                      wrapperStyle: {
                        cursor: isConfirmed ? "pointer" : "not-allowed",
                      },
                    },
                    void 0,
                    false,
                    { fileName: _jsxFileName, lineNumber: 83, columnNumber: 9 },
                    _this,
                  ),
                ],
              },
            ),
            void 0,
            true,
            { fileName: _jsxFileName, lineNumber: 77, columnNumber: 7 },
            _this,
          ),
        ],
      },
    ),
    void 0,
    true,
    { fileName: _jsxFileName, lineNumber: 57, columnNumber: 11 },
    _this,
  );
};
exports.Panel = Panel;
//# sourceMappingURL=index.js.map
