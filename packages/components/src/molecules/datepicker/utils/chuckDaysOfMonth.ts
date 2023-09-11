import { Moment } from "moment-jalaali";
import { getDaysOfMonth } from "./getDaysOfMonth";
import _ from "lodash";

export const chunkDaysOfMonth = (currentMonth: Moment | null) => {
  if (!currentMonth) return;
  const dayOfMonth = getDaysOfMonth(currentMonth, false);
  return _.chunk(dayOfMonth, 7).map((item) => {
    return item.map((item2) => {
      return item2;
    });
  });
};
