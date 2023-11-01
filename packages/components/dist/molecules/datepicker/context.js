"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerContext = void 0;
var moment_jalaali_1 = __importDefault(require("moment-jalaali"));
var react_1 = require("react");
exports.DatePickerContext = (0, react_1.createContext)({
    currentDate: (0, moment_jalaali_1.default)(),
    onAddMonth: function () { },
    onSubtractMonth: function () { },
    onAddYear: function () { },
    onSubtractYear: function () { },
    goToday: function () { },
    onSetCurrentDate: function () { },
    onSelectDate: function () { },
    selectedDate: null,
    handleExtendCalendar: function () { },
    isCalendarExtended: false,
});
//# sourceMappingURL=context.js.map