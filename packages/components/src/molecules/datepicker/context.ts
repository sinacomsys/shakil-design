import moment, { Moment } from "moment-jalaali";
import { createContext } from "react";

interface DatePickerContext {
  currentDate: Moment;
  onAddMonth: () => void;
  onSubtractMonth: () => void;
  onAddYear: () => void;
  onSubtractYear: () => void;
}

export const DatePickerContext = createContext<DatePickerContext>({
  currentDate: moment(),
  onAddMonth() {},
  onSubtractMonth() {},
  onAddYear() {},
  onSubtractYear() {},
});
