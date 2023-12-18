import moment, { Moment } from "moment-jalaali";
import { useState, useEffect } from "react";
import { DatePickerContext } from "../../context";
import { DatePickerProviderProps } from "../types";
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
  PERSIAN_YEAR,
  GREGORIAN_YEAR,
} from "../../utils/calendarMode";
import { ManualImportDateContext } from "../manualImportDate/context";
// import { DatePickerPanel } from "../datePickerPanel";

const DatePickerProvider = ({
  handleExtendCalendar,
  isCalendarExtended,
  value,
  calendarMode = "persian",
  onOkDate,
  disableDateFrom,
  onEditAgain,
  isDisable,
  children,
}: DatePickerProviderProps) => {
  const { setValue } = ManualImportDateContext.useFormContext();
  const [isConfirmed, setConfirm] = useState(false);

  const isPersian = calendarMode === "persian";
  const YEAR_FORMAT = isPersian ? PERSIAN_YEAR_FORMAT : GREGORIAN_YEAR_FORMAT;
  const YEAR = isPersian ? PERSIAN_YEAR : GREGORIAN_YEAR;

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
    useState<DatePickerProviderProps["value"]>(null);
  const [currentDate, setCurrentDate] = useState<
    DatePickerProviderProps["value"]
  >(moment());

  const onExtendMatrix = () => {
    setMatrixOpen(true);
    handleExtendCalendar?.({ status: "extend" });
  };

  const onShrinkMatrix = () => {
    setMatrixOpen(false);
    handleExtendCalendar?.({ status: "shrink" });
  };

  useEffect(() => {
    if (!currentDate) return;
    setMonthMatrix(chunkDaysOfMonth(currentDate, isPersian));
  }, [currentDate, isPersian]);

  useEffect(() => {
    setCurrentDate(value ?? moment());
    setSelectedDate(value);
    if (!value) {
      setValue("day", "");
      setValue("month", "");
      setValue("year", "");
      setValue("hour", "");
      setValue("minute", "");
      // onEditAgain?.();
      setConfirm(false);
    }
  }, [FULL_TIME_FORMAT, setValue, value]);

  const onAddMonth = () => {
    //@ts-ignore
    const newValue = currentDate?.clone().add(1, MONTH);
    if (!newValue) return;
    setCurrentDate(newValue);
  };

  const onSubtractMonth = () => {
    //@ts-ignore
    const newValue = currentDate?.clone().subtract(1, MONTH);
    setCurrentDate(newValue);
  };

  const onAddYear = () => {
    //@ts-ignore
    const newValue = currentDate?.clone().add(1, YEAR);
    if (!newValue) return;
    setCurrentDate(newValue);
  };
  const onSubtractYear = () => {
    //@ts-ignore
    const newValue = currentDate?.clone().subtract(1, YEAR);
    if (!newValue) return;
    setCurrentDate(newValue);
  };

  const onSetCurrentDate = (value: Moment) => {
    setCurrentDate(value);
  };

  const handleSelectDateFromMatrix = (value: Moment) => {
    setSelectedDate(value);
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

  const handleSetSelectedDateFromInputs = (value: Moment) => {
    setSelectedDate(value);
  };

  const onConfirmDate = (confirm: boolean) => {
    setConfirm(confirm);
  };

  const handleOnEditAgain = () => {
    onEditAgain?.();
    setConfirm(false);
  };

  return (
    <DatePickerContext.Provider
      value={{
        onConfirmDate,
        isDisable,
        currentDate,
        onAddMonth,
        onSubtractMonth,
        onAddYear,
        onSubtractYear,
        onSetCurrentDate,
        handleSelectDateFromMatrix,
        handleSetSelectedDateFromInputs,
        selectedDate,
        isCalendarExtended,
        monthMatrix,
        isMatrixOpen,
        calendarMode,
        onOkDate,
        disableDateFrom,
        onEditAgain: handleOnEditAgain,
        isConfirmed,
        onExtendMatrix,
        onShrinkMatrix,
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
      {children({ value: selectedDate, disable: !isConfirmed })}
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
