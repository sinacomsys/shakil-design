/// <reference types="react" />
import { Moment } from "moment-jalaali";
import { DatePickerProps } from "./components/types";
interface DatePickerContext
  extends Pick<DatePickerProps, "calendarMode" | "onChange"> {
  currentDate: DatePickerProps["value"];
  onAddMonth: () => void;
  onSubtractMonth: () => void;
  onAddYear: () => void;
  onSubtractYear: () => void;
  onSetCurrentDate: (value: Moment) => void;
  onSelectDate: (value: Moment) => void;
  selectedDate: DatePickerProps["value"];
  isCalendarExtended?: boolean;
  monthMatrix: Moment[][];
  onCollapseMatrix: () => void;
  isMatrixOpen: boolean;
  formats: {
    YEAR_FORMAT: string;
    MONTH_NAME_FORMAT: string;
    MONTH_NUMBER_FORMAT: string;
    DAY_FORMAT: string;
    FULL_DATE_FORMAT: string;
    FULL_TIME_FORMAT: string;
    SHORT_DAY_FORMAT: string;
    MONTH: string;
  };
}
export declare const DatePickerContext: import("react").Context<DatePickerContext>;
export {};
