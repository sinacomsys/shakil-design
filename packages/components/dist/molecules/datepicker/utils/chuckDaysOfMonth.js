import { getDaysOfMonth } from "./getDaysOfMonth";
import _ from "lodash";
export var chunkDaysOfMonth = function (currentMonth) {
    if (!currentMonth)
        return;
    var dayOfMonth = getDaysOfMonth(currentMonth, false);
    return _.chunk(dayOfMonth, 7).map(function (item) {
        return item.map(function (item2) {
            return item2;
        });
    });
};
//# sourceMappingURL=chuckDaysOfMonth.js.map