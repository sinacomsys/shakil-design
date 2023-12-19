/// <reference types="react" />
import { Moment } from "moment-jalaali";
import { DatePickerProviderProps } from "./components/types";
interface DatePickerContext
  extends Pick<
    DatePickerProviderProps,
    | "calendarMode"
    | "isDisable"
    | "onOkDate"
    | "disableDateFrom"
    | "onEditAgain"
  > {
  currentDate: DatePickerProviderProps["value"];
  onAddMonth: () => void;
  onSubtractMonth: () => void;
  onAddYear: () => void;
  onSubtractYear: () => void;
  onSetCurrentDate: (value: Moment) => void;
  handleSelectDateFromMatrix: (value: Moment) => void;
  handleSetSelectedDateFromInputs: (value: Moment) => void;
  selectedDate: DatePickerProviderProps["value"];
  isCalendarExtended?: boolean;
  monthMatrix: Moment[][];
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
  isConfirmed: boolean;
  onConfirmDate: (value: boolean) => void;
  onExtendMatrix: () => void;
  onShrinkMatrix: () => void;
}
export declare const DatePickerContext: import("react").Context<DatePickerContext>;
export {};
