"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMods = void 0;
var calendarMode_1 = require("./calendarMode");
var generateMods = function (isPersian) {
    var YEAR_FORMAT = isPersian ? calendarMode_1.PERSIAN_YEAR_FORMAT : calendarMode_1.GREGORIAN_YEAR_FORMAT;
    var YEAR = isPersian ? calendarMode_1.PERSIAN_YEAR : calendarMode_1.GREGORIAN_YEAR;
    var MONTH_NAME_FORMAT = isPersian
        ? calendarMode_1.PERSIAN_MONTH_NAME_FORMAT
        : calendarMode_1.GREGORIAN_MONTH_NAME_FORMAT;
    var MONTH_NUMBER_FORMAT = isPersian
        ? calendarMode_1.PERSIAN_MONTH_NUMBER_FORMAT
        : calendarMode_1.GREGORIAN_MONTH_NUMBER_FORMAT;
    var DAY_FORMAT = isPersian ? calendarMode_1.PERSIAN_DAY_FORMAT : calendarMode_1.GREGORIAN_DAY_FORMAT;
    var FULL_DATE_FORMAT = isPersian
        ? calendarMode_1.PERSIAN_FULL_DATE_FORMAT
        : calendarMode_1.GREGORIAN_FULL_DATE_FORMAT;
    var FULL_TIME_FORMAT = isPersian
        ? calendarMode_1.PERSIAN_FULL_TIME_FORMAT
        : calendarMode_1.GREGORIAN_FULL_TIME_FORMAT;
    var MONTH = isPersian ? calendarMode_1.PERSIAN_MONTH : calendarMode_1.GREGORIAN_MONTH;
    var SHORT_DAY_FORMAT = isPersian
        ? calendarMode_1.PERSIAN_DAY_SHORT_FORMAT
        : calendarMode_1.GREGORIAN_DAY_SHORT_FORMAT;
    return {
        YEAR_FORMAT: YEAR_FORMAT,
        YEAR: YEAR,
        MONTH_NAME_FORMAT: MONTH_NAME_FORMAT,
        MONTH_NUMBER_FORMAT: MONTH_NUMBER_FORMAT,
        DAY_FORMAT: DAY_FORMAT,
        FULL_DATE_FORMAT: FULL_DATE_FORMAT,
        FULL_TIME_FORMAT: FULL_TIME_FORMAT,
        MONTH: MONTH,
        SHORT_DAY_FORMAT: SHORT_DAY_FORMAT,
    };
};
exports.generateMods = generateMods;
//# sourceMappingURL=generateMods.js.map