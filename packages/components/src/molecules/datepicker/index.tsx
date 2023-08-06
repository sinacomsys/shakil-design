import moment, { Moment } from "moment-jalaali";
import { useState } from "react";
import { DatePickerContext } from "./context";
import { DatePicker } from "./componnets/datePicker";
moment.loadPersian({ dialect: "persian-modern" });

const DatePickerWrapper = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);
  const onAddMonth = () => {
    setCurrentDate((prev) => prev.clone().add(1, "jMonth"));
  };
  const onSubtractMonth = () => {
    setCurrentDate((prev) => prev.clone().subtract(1, "jMonth"));
  };

  const onAddYear = () => {
    setCurrentDate((prev) => prev.clone().add(1, "jYear"));
  };
  const onSubtractYear = () => {
    setCurrentDate((prev) => prev.clone().subtract(1, "jYear"));
  };
  const goToday = () => {
    setCurrentDate(moment());
  };

  const onSetCurrentDate = (value: Moment) => {
    setCurrentDate(value);
  };

  const onSelectDate = (value: Moment) => {
    setSelectedDate(value);
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
      }}
    >
      <DatePicker />
    </DatePickerContext.Provider>
  );
};

export { DatePickerWrapper as DatePicker };
