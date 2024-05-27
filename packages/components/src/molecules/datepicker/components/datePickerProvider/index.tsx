import moment, { JUnitOfTime, Moment } from "moment-jalaali";
import { useState, useEffect, useCallback } from "react";
import { DatePickerContext } from "../../context";
import { DatePickerProviderProps } from "../types";
import { chunkDaysOfMonth } from "../../utils/chuckDaysOfMonth";
import {
  DatePickerFormProvider,
  ManualImportDateContextProps,
} from "../manualImportDate/context";
import { generateMods } from "../../utils/generateMods";
import { useFormContext } from "react-hook-form";

const DatePickerProvider = ({
  handleExtendCalendar,
  isCalendarExtended: isMatrixOpenPorps,
  value: valueProps,
  calendarMode = "persian",
  onOkDate,
  disableDateFrom,
  children,
  isDisable: isDisableProps,
  onEditAgain: onEditAgainProps,
  testid,
}: DatePickerProviderProps) => {
  const isPersian = calendarMode === "persian";
  const { setValue } = useFormContext<ManualImportDateContextProps>();
  const [isConfirmed, setConfirm] = useState(false);
  const [monthMatrix, setMonthMatrix] = useState<Moment[][]>(
    chunkDaysOfMonth(moment(), isPersian),
  );
  const [isMatrixOpen, setMatrixOpen] = useState(false);
  const [selectedDate, setSelectedDate] =
    useState<DatePickerProviderProps["value"]>(null);
  const [currentDate, setCurrentDate] = useState<
    DatePickerProviderProps["value"]
  >(moment());

  const {
    DAY_FORMAT,
    FULL_DATE_FORMAT,
    FULL_TIME_FORMAT,
    MONTH,
    MONTH_NAME_FORMAT,
    MONTH_NUMBER_FORMAT,
    SHORT_DAY_FORMAT,
    YEAR,
    YEAR_FORMAT,
  } = generateMods(isPersian);

  const onExtendMatrix = () => {
    setMatrixOpen(true);
    handleExtendCalendar?.({ status: "extend" });
  };

  const onShrinkMatrix = () => {
    setMatrixOpen(false);
    handleExtendCalendar?.({ status: "shrink" });
  };

  useEffect(() => {
    if (!valueProps) {
      setSelectedDate(null);
      setCurrentDate(moment());
      setValue("day", "");
      setValue("month", "");
      setValue("year", "");
      setValue("hour", "");
      setValue("minute", "");
      setConfirm(false);
    } else if (valueProps) {
      setSelectedDate(valueProps);
      setCurrentDate(valueProps);
      setMonthMatrix(chunkDaysOfMonth(valueProps, isPersian));
      const day = valueProps.format(DAY_FORMAT);
      const month = valueProps.format(MONTH_NUMBER_FORMAT);
      const year = valueProps.format(YEAR_FORMAT);
      const hour = valueProps.format("HH");
      const minute = valueProps.format("mm");
      setValue("day", day);
      setValue("month", month);
      setValue("year", year);
      setValue("hour", hour === "00" ? "" : hour);
      setValue("minute", minute === "00" ? "" : minute);
    }
  }, [
    DAY_FORMAT,
    MONTH_NUMBER_FORMAT,
    YEAR_FORMAT,
    isPersian,
    setValue,
    valueProps,
  ]);

  const handleSelectDateFromMatrix = useCallback(
    (value: Moment) => {
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
    },
    [DAY_FORMAT, MONTH_NUMBER_FORMAT, YEAR_FORMAT, setValue],
  );

  const handleSetCurrentDate = (value: Moment) => {
    setMonthMatrix(chunkDaysOfMonth(value, isPersian));
    setCurrentDate(value);
  };

  const onAddMonth = () => {
    const newValue = currentDate?.clone().add(1, MONTH as JUnitOfTime);
    if (!newValue) return;
    handleSetCurrentDate(newValue);
  };

  const onSubtractMonth = () => {
    const newValue = currentDate?.clone().subtract(1, MONTH as JUnitOfTime);
    if (!newValue) return;
    handleSetCurrentDate(newValue);
  };

  const onAddYear = () => {
    const newValue = currentDate?.clone().add(1, YEAR as JUnitOfTime);
    if (!newValue) return;
    handleSetCurrentDate(newValue);
  };
  const onSubtractYear = () => {
    const newValue = currentDate?.clone().subtract(1, YEAR as JUnitOfTime);
    if (!newValue) return;
    handleSetCurrentDate(newValue);
  };

  const handleSetSelectedDateFromInputs = (value: Moment) => {
    setSelectedDate(value);
  };

  const onConfirmDate = () => {
    setConfirm(true);
  };
  const onEditAgain = () => {
    setConfirm(false);
    onEditAgainProps?.();
  };

  // eslint-disable-next-line @typescript-eslint/naming-convention
  let _isMatrixOpen = false;
  if (isMatrixOpenPorps !== undefined) {
    _isMatrixOpen = isMatrixOpenPorps;
  } else {
    _isMatrixOpen = isMatrixOpen;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  let _isConfirm = false;
  if (isDisableProps !== undefined) {
    _isConfirm = isDisableProps;
  } else {
    _isConfirm = isConfirmed;
  }

  const handleOnGoToday = () => {
    setMonthMatrix(chunkDaysOfMonth(moment(), isPersian));
    setSelectedDate(moment());
    setCurrentDate(moment());
    const today = moment();
    const day = today.format(DAY_FORMAT);
    const month = today.format(MONTH_NUMBER_FORMAT);
    const year = today.format(YEAR_FORMAT);
    const hour = today.format("HH");
    const minute = today.format("mm");
    setValue("day", day);
    setValue("month", month);
    setValue("year", year);
    setValue("hour", hour === "00" ? "" : hour);
    setValue("minute", minute === "00" ? "" : minute);
  };

  return (
    <DatePickerContext.Provider
      value={{
        testid,
        onEditAgain,
        onConfirmDate,
        isConfirmed: _isConfirm,
        currentDate,
        onAddMonth,
        onSubtractMonth,
        onAddYear,
        onSubtractYear,
        onSetCurrentDate: handleSetCurrentDate,
        handleSelectDateFromMatrix,
        handleSetSelectedDateFromInputs,
        selectedDate,
        monthMatrix,
        isMatrixOpen: _isMatrixOpen,
        calendarMode,
        onOkDate,
        disableDateFrom,
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
      {children({
        value: selectedDate,
        disable: !_isConfirm,
        onGoToday: handleOnGoToday,
      })}
    </DatePickerContext.Provider>
  );
};

const DatePickerProviderWrapper = (props: DatePickerProviderProps) => {
  return (
    <DatePickerFormProvider>
      <DatePickerProvider {...props} />
    </DatePickerFormProvider>
  );
};

export { DatePickerProviderWrapper as DatePickerProvider };
