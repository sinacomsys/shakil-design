import moment from "moment-jalaali";
import { createContext } from "react";
export var DatePickerContext = createContext({
    currentDate: moment(),
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