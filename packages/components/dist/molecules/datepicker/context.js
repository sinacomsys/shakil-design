var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "moment-jalaali", "react"], function (require, exports, moment_jalaali_1, react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DatePickerContext = void 0;
    moment_jalaali_1 = __importDefault(moment_jalaali_1);
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
});
//# sourceMappingURL=context.js.map