"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerContext = void 0;
const moment_jalaali_1 = __importDefault(require("moment-jalaali"));
const react_1 = require("react");
exports.DatePickerContext = (0, react_1.createContext)({
    currentDate: (0, moment_jalaali_1.default)(),
    onAddMonth() { },
    onSubtractMonth() { },
    onAddYear() { },
    onSubtractYear() { },
    goToday() { },
    onSetCurrentDate: () => { },
    onSelectDate() { },
    selectedDate: null,
    handleExtendCalendar() { },
    isCalendarExtended: false,
});
//# sourceMappingURL=context.js.map