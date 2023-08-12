import moment, { Moment } from "moment-jalaali";
import { createContext } from "react";

interface DatePickerContext {
  currentDate: Moment;
  onAddMonth: () => void;
  onSubtractMonth: () => void;
  onAddYear: () => void;
  onSubtractYear: () => void;
  goToday: () => void;
  onSetCurrentDate: (value: Moment) => void;
  onSelectDate: (value: Moment) => void;
  selectedDate: Moment | null;
  handleExtendCalendar?: () => void;
  isCalendarExtended?: boolean;
}

export const DatePickerContext = createContext<DatePickerContext>({
  currentDate: moment(),
  onAddMonth() {},
  onSubtractMonth() {},
  onAddYear() {},
  onSubtractYear() {},
  goToday() {},
  onSetCurrentDate: () => {},
  onSelectDate() {},
  selectedDate: null,
  handleExtendCalendar() {},
  isCalendarExtended: false,
});
