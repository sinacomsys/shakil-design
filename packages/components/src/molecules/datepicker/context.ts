import moment, { Moment } from "moment-jalaali";
import { createContext } from "react";
import { DatePickerProps } from "./components/types";

interface DatePickerContext {
  currentDate: DatePickerProps["value"];
  onAddMonth: () => void;
  onSubtractMonth: () => void;
  onAddYear: () => void;
  onSubtractYear: () => void;
  goToday: () => void;
  onSetCurrentDate: (value: Moment) => void;
  onSelectDate: (value: Moment) => void;
  selectedDate: DatePickerProps["value"];
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
