import { Moment } from "moment-jalaali";
import { GREGORIAN_MONTH, PERSIAN_MONTH } from "./calendarMode";
export function getDaysOfMonth(month: Moment, isPersian: boolean) {
  const days = [];
  // month.clone().startOf("jMonth");
  // const monthFormat = isGregorian ? "month" : "jMonth";
  const monthFormat = isPersian ? PERSIAN_MONTH : GREGORIAN_MONTH;
  const dayOffset = isPersian ? 1 : 0;
  const current = month.clone().startOf(monthFormat as any);
  const end = month.clone().endOf(monthFormat as any);

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
