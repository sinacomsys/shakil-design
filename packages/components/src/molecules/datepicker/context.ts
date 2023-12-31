import moment, { Moment } from "moment-jalaali";
import { createContext } from "react";
import { DatePickerProviderProps } from "./components/types";
import {
  PERSIAN_DAY_FORMAT,
  PERSIAN_DAY_SHORT_FORMAT,
  PERSIAN_FULL_DATE_FORMAT,
  PERSIAN_FULL_TIME_FORMAT,
  PERSIAN_MONTH,
  PERSIAN_MONTH_NAME_FORMAT,
  PERSIAN_MONTH_NUMBER_FORMAT,
  PERSIAN_YEAR_FORMAT,
} from "./utils/calendarMode";

interface DatePickerContext
  extends Pick<
    DatePickerProviderProps,
    "calendarMode" | "onOkDate" | "disableDateFrom"
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
  onConfirmDate: () => void;
  onExtendMatrix: () => void;
  onShrinkMatrix: () => void;
  isConfirmed: boolean;
  onEditAgain: () => void;
}

export const DatePickerContext = createContext<DatePickerContext>({
  currentDate: moment(),
  onAddMonth() {},
  onSubtractMonth() {},
  onAddYear() {},
  onSubtractYear() {},
  onSetCurrentDate: () => {},
  handleSelectDateFromMatrix() {},
  handleSetSelectedDateFromInputs() {},
  selectedDate: null,
  monthMatrix: [],
  isMatrixOpen: false,
  calendarMode: "persian",
  formats: {
    DAY_FORMAT: PERSIAN_DAY_FORMAT,
    FULL_DATE_FORMAT: PERSIAN_FULL_DATE_FORMAT,
    FULL_TIME_FORMAT: PERSIAN_FULL_TIME_FORMAT,
    MONTH_NAME_FORMAT: PERSIAN_MONTH_NAME_FORMAT,
    YEAR_FORMAT: PERSIAN_YEAR_FORMAT,
    SHORT_DAY_FORMAT: PERSIAN_DAY_SHORT_FORMAT,
    MONTH: PERSIAN_MONTH,
    MONTH_NUMBER_FORMAT: PERSIAN_MONTH_NUMBER_FORMAT,
  },
  isConfirmed: false,
  onConfirmDate() {},
  onExtendMatrix() {},
  onShrinkMatrix() {},
  onEditAgain() {},
});
