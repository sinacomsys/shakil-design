import { checkIsDateValid } from "../../utils/checkDateIsValid";
import moment, { Moment } from "moment-jalaali";
import { useState, useEffect } from "react";
import { DatePickerContext } from "../../context";
import { DatePickerProps, DatePickerProviderProps } from "../types";
import { chunkDaysOfMonth } from "../../utils/chuckDaysOfMonth";
import {
  GREGORIAN_YEAR_FORMAT,
  PERSIAN_YEAR_FORMAT,
  PERSIAN_MONTH_NAME_FORMAT,
  PERSIAN_DAY_FORMAT,
  GREGORIAN_MONTH_NAME_FORMAT,
  GREGORIAN_DAY_FORMAT,
  PERSIAN_FULL_DATE_FORMAT,
  GREGORIAN_FULL_DATE_FORMAT,
  GREGORIAN_FULL_TIME_FORMAT,
  PERSIAN_FULL_TIME_FORMAT,
  GREGORIAN_MONTH,
  PERSIAN_MONTH,
  PERSIAN_DAY_SHORT_FORMAT,
  GREGORIAN_DAY_SHORT_FORMAT,
  PERSIAN_MONTH_NUMBER_FORMAT,
  GREGORIAN_MONTH_NUMBER_FORMAT,
} from "../../utils/calendarMode";
import { ManualImportDateContext } from "../manualImportDate/context";

const DatePickerProvider = ({
  onMonthChange,
  onDayChange,
  onYearChange,
  onChange,
  children,
  handleExtendCalendar,
  isCalendarExtended,
  value,
  calendarMode = "persian",
}: DatePickerProviderProps) => {
  const { setValue } = ManualImportDateContext.useFormContext();

  const isPersian = calendarMode === "persian";
  const YEAR_FORMAT = isPersian ? PERSIAN_YEAR_FORMAT : GREGORIAN_YEAR_FORMAT;

  const MONTH_NAME_FORMAT = isPersian
    ? PERSIAN_MONTH_NAME_FORMAT
    : GREGORIAN_MONTH_NAME_FORMAT;

  const MONTH_NUMBER_FORMAT = isPersian
    ? PERSIAN_MONTH_NUMBER_FORMAT
    : GREGORIAN_MONTH_NUMBER_FORMAT;

  const DAY_FORMAT = isPersian ? PERSIAN_DAY_FORMAT : GREGORIAN_DAY_FORMAT;

  const FULL_DATE_FORMAT = isPersian
    ? PERSIAN_FULL_DATE_FORMAT
    : GREGORIAN_FULL_DATE_FORMAT;

  const FULL_TIME_FORMAT = isPersian
    ? PERSIAN_FULL_TIME_FORMAT
    : GREGORIAN_FULL_TIME_FORMAT;

  const MONTH = isPersian ? PERSIAN_MONTH : GREGORIAN_MONTH;

  const SHORT_DAY_FORMAT = isPersian
    ? PERSIAN_DAY_SHORT_FORMAT
    : GREGORIAN_DAY_SHORT_FORMAT;

  const [monthMatrix, setMonthMatrix] = useState<Moment[][]>([]);
  const [isMatrixOpen, setMatrixOpen] = useState(false);
  const [selectedDate, setSelectedDate] =
    useState<DatePickerProps["value"]>(null);
  const [inputValue, setInputValue] = useState("");
  const [currentDate, setCurrentDate] = useState<DatePickerProps["value"]>(
    moment(),
  );

  const onCollapseMatrix = () => {
    setMatrixOpen((prev) => !prev);
    handleExtendCalendar?.();
  };

  useEffect(() => {
    if (!currentDate) return;
    setMonthMatrix(chunkDaysOfMonth(currentDate, isPersian));
  }, [currentDate, isPersian]);

  useEffect(() => {
    setCurrentDate(value ?? moment());
    setSelectedDate(value);
    setInputValue(value?.format(FULL_TIME_FORMAT) ?? "");
  }, [FULL_TIME_FORMAT, value]);

  const handleMonthChange = (value: Moment) => {
    onMonthChange?.({
      name: value?.format("jMMMM"),
      value: Number(value?.format(MONTH_NAME_FORMAT)),
    });
  };

  const handleOnChangeYear = (value: number) => {
    onYearChange?.(value);
  };

  const onAddMonth = () => {
    const newValue = currentDate?.clone().add(1, "jMonth");
    if (!newValue) return;
    setCurrentDate(newValue);
    handleMonthChange(newValue);
  };

  const onSubtractMonth = () => {
    const newValue = currentDate?.clone().subtract(1, "jMonth");
    setCurrentDate(newValue);
    if (!newValue) return;
    handleMonthChange(newValue);
  };

  const onAddYear = () => {
    const newValue = currentDate?.clone().add(1, "jYear");
    if (!newValue) return;
    setCurrentDate(newValue);
    handleOnChangeYear(newValue.format(YEAR_FORMAT) as unknown as number);
  };
  const onSubtractYear = () => {
    const newValue = currentDate?.clone().subtract(1, "jYear");
    if (!newValue) return;
    setCurrentDate(newValue);
    handleOnChangeYear(newValue.format(YEAR_FORMAT) as unknown as number);
  };

  const onSetCurrentDate = (value: Moment) => {
    setCurrentDate(value);
  };

  const onSelectDate = (value: Moment) => {
    setSelectedDate(value);
    onDayChange?.(value.format(DAY_FORMAT) as unknown as number);
    const day = value.format(DAY_FORMAT);
    const month = value.format(MONTH_NUMBER_FORMAT);
    const year = value.format(YEAR_FORMAT);
    const hour = moment().format("HH");
    const minute = moment().format("mm");
    setValue("day", day);
    setValue("month", month);
    setValue("year", year);
    setValue("hour", hour);
    setValue("minute", minute);
  };

  const onChangeDateInputText = (value: string) => {
    setInputValue(value);
    const isValid = checkIsDateValid(value);
    if (isValid) {
      setCurrentDate(moment(value, FULL_DATE_FORMAT));
      setSelectedDate(moment(value, FULL_DATE_FORMAT));
      return;
    }
    setCurrentDate(moment());
    setSelectedDate(null);
  };

  return (
    <DatePickerContext.Provider
      value={{
        onChange,
        currentDate,
        onAddMonth,
        onSubtractMonth,
        onAddYear,
        onSubtractYear,
        onSetCurrentDate,
        onSelectDate,
        selectedDate,
        isCalendarExtended,
        monthMatrix,
        onCollapseMatrix,
        isMatrixOpen,
        calendarMode,
        formats: {
          DAY_FORMAT,
          FULL_DATE_FORMAT,
          FULL_TIME_FORMAT,
          MONTH_NAME_FORMAT,
          YEAR_FORMAT,
          MONTH,
          SHORT_DAY_FORMAT,
          MONTH_NUMBER_FORMAT,
        },
      }}
    >
      {typeof children === "function"
        ? children({
            value: inputValue,
            onChangeDateInputText,
          })
        : children}
    </DatePickerContext.Provider>
  );
};

const DatePickerProviderWrapper = (props: DatePickerProviderProps) => {
  return (
    <ManualImportDateContext.Provider mode="onChange">
      <DatePickerProvider {...props} />
    </ManualImportDateContext.Provider>
  );
};

export { DatePickerProviderWrapper as DatePickerProvider };
