"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerContext = void 0;
var moment_jalaali_1 = __importDefault(require("moment-jalaali"));
var react_1 = require("react");
var calendarMode_1 = require("./utils/calendarMode");
exports.DatePickerContext = (0, react_1.createContext)({
  currentDate: (0, moment_jalaali_1.default)(),
  onAddMonth: function () {},
  onSubtractMonth: function () {},
  onAddYear: function () {},
  onSubtractYear: function () {},
  onSetCurrentDate: function () {},
  handleSelectDateFromMatrix: function () {},
  handleSetSelectedDateFromInputs: function () {},
  selectedDate: null,
  isCalendarExtended: false,
  monthMatrix: [],
  isMatrixOpen: false,
  calendarMode: "persian",
  formats: {
    DAY_FORMAT: calendarMode_1.PERSIAN_DAY_FORMAT,
    FULL_DATE_FORMAT: calendarMode_1.PERSIAN_FULL_DATE_FORMAT,
    FULL_TIME_FORMAT: calendarMode_1.PERSIAN_FULL_TIME_FORMAT,
    MONTH_NAME_FORMAT: calendarMode_1.PERSIAN_MONTH_NAME_FORMAT,
    YEAR_FORMAT: calendarMode_1.PERSIAN_YEAR_FORMAT,
    SHORT_DAY_FORMAT: calendarMode_1.PERSIAN_DAY_SHORT_FORMAT,
    MONTH: calendarMode_1.PERSIAN_MONTH,
    MONTH_NUMBER_FORMAT: calendarMode_1.PERSIAN_MONTH_NUMBER_FORMAT,
  },
  onEditAgain: function () {},
  isConfirmed: false,
  onConfirmDate: function () {},
  onExtendMatrix: function () {},
  onShrinkMatrix: function () {},
});
//# sourceMappingURL=context.js.map
