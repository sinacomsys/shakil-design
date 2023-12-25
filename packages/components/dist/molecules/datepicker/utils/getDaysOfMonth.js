"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDaysOfMonth = void 0;
var calendarMode_1 = require("./calendarMode");
function getDaysOfMonth(month, isPersian) {
    var days = [];
    // month.clone().startOf("jMonth");
    // const monthFormat = isGregorian ? "month" : "jMonth";
    var monthFormat = isPersian ? calendarMode_1.PERSIAN_MONTH : calendarMode_1.GREGORIAN_MONTH;
    var dayOffset = isPersian ? 1 : 0;
    var current = month.clone().startOf(monthFormat);
    var end = month.clone().endOf(monthFormat);
    // Set start to the first day of week in the last month
    current.subtract((current.day() + dayOffset) % 7, "days");
    // Set end to the last day of week in the next month
    end.add(6 - ((end.day() + dayOffset) % 7), "days");
    while (current.isBefore(end)) {
        days.push(current.clone());
        current.add(1, "days");
    }
    return days;
}
exports.getDaysOfMonth = getDaysOfMonth;
//# sourceMappingURL=getDaysOfMonth.js.map