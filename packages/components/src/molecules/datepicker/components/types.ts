import { Moment } from "moment-jalaali";

type CalendarMode = "gregorian" | "persian";

export interface DatePickerProviderProps {
  value?: Moment | undefined | null;
  calendarMode?: CalendarMode;
  handleExtendCalendar?: (arg: { status: "extend" | "shrink" }) => void;
  isCalendarExtended?: boolean;
  isDisable?: boolean;
  onOkDate?: (value: Moment | null | undefined) => void;
  disableDateFrom?: Moment | null;
  onEditAgain?: () => void;
  children: ({
    value,
  }: {
    value: DatePickerProviderProps["value"];
    disable: boolean;
  }) => React.ReactNode;
}
