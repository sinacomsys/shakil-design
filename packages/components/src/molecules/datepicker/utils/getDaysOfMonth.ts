import { Moment } from "moment-jalaali";
export function getDaysOfMonth(month: Moment, isGregorian: boolean) {
  const days = [];
  // month.clone().startOf("jMonth");
  // const monthFormat = isGregorian ? "month" : "jMonth";
  const dayOffset = isGregorian ? 0 : 1;

  const current = month.clone().startOf("jMonth");
  const end = month.clone().endOf("jMonth");

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
