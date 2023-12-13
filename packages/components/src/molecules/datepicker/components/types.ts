import { Moment } from "moment-jalaali";

type MonthValue = {
  name: string;
  value: number;
};

type CalendarMode = "gregorian" | "persian";

export interface DatePickerProps {
  value?: Moment | undefined | null;
  onChange?: (value: Moment | null | undefined) => void;
  onDayChange?: (value: number) => void;
  onMonthChange?: (value: MonthValue) => void;
  onYearChange?: (value: number) => void;
  calendarMode?: CalendarMode;
}

type DateInputProps = {
  value?: string;
  onChangeDateInputText: (value: string) => void;
};

export interface DatePickerProviderProps extends DatePickerProps {
  children?: React.ReactNode | ((e: DateInputProps) => React.ReactNode);
  handleExtendCalendar?: () => void;
  isCalendarExtended?: boolean;
}
