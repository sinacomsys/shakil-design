import { checkIsDateValid } from "../../utils/checkDateIsValid";
import moment, { Moment } from "moment-jalaali";
import { useState, useEffect } from "react";
import { DatePickerContext } from "../../context";
import { DatePickerProps, DatePickerProviderProps } from "../types";
moment.loadPersian({ dialect: "persian-modern" });

const DatePickerProvider = ({
  onMonthChange,
  onDayChange,
  onYearChange,
  onChange,
  children,
  handleExtendCalendar,
  isCalendarExtended,
  value,
}: DatePickerProviderProps) => {
  const [currentDate, setCurrentDate] = useState<DatePickerProps["value"]>(
    moment(),
  );
  const [selectedDate, setSelectedDate] =
    useState<DatePickerProps["value"]>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setCurrentDate(value ?? moment());
    setSelectedDate(value);
    setInputValue(value?.format("jYYYY/jMM/jDD") ?? "");
  }, [value]);

  const handleMonthChange = (value: Moment) => {
    onMonthChange?.({
      name: value?.format("jMMMM"),
      value: Number(value?.format("jMM")),
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
    handleOnChangeYear(newValue.format("jYYYY") as unknown as number);
  };
  const onSubtractYear = () => {
    const newValue = currentDate?.clone().subtract(1, "jYear");
    if (!newValue) return;
    setCurrentDate(newValue);
    handleOnChangeYear(newValue.format("jYYYY") as unknown as number);
  };
  const goToday = () => {
    setCurrentDate(moment());
  };

  const onSetCurrentDate = (value: Moment) => {
    setCurrentDate(value);
  };

  const onSelectDate = (value: Moment) => {
    setSelectedDate(value);
    onChange?.(value);
    onDayChange?.(value.format("jDD") as unknown as number);
    setInputValue(value.format("jYYYY/jMM/jDD"));
  };

  const onChangeDateInputText = (value: string) => {
    setInputValue(value);
    const isValid = checkIsDateValid(value);
    if (isValid) {
      setCurrentDate(moment(value, "jYYYY/jMM/jDD"));
      setSelectedDate(moment(value, "jYYYY/jMM/jDD"));
      return;
    }
    setCurrentDate(moment());
    setSelectedDate(null);
  };

  return (
    <DatePickerContext.Provider
      value={{
        currentDate,
        onAddMonth,
        onSubtractMonth,
        onAddYear,
        onSubtractYear,
        goToday,
        onSetCurrentDate,
        onSelectDate,
        selectedDate,
        handleExtendCalendar,
        isCalendarExtended,
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

export { DatePickerProvider };
