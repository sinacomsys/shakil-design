"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDaysOfMonth = void 0;
function getDaysOfMonth(month, isGregorian) {
    var days = [];
    // month.clone().startOf("jMonth");
    // const monthFormat = isGregorian ? "month" : "jMonth";
    var dayOffset = isGregorian ? 0 : 1;
    var current = month.clone().startOf("jMonth");
    var end = month.clone().endOf("jMonth");
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