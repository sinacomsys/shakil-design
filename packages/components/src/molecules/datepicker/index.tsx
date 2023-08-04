import moment from "moment-jalaali";
import { useState } from "react";
import { DatePickerContext } from "./context";
import { DatePicker } from "./componnets/datePicker";
moment.loadPersian({ dialect: "persian-modern" });

const DatePickerWrapper = () => {
  const [currentDate, setCurrentDate] = useState(moment());
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
  return (
    <DatePickerContext.Provider
      value={{
        currentDate,
        onAddMonth,
        onSubtractMonth,
        onAddYear,
        onSubtractYear,
      }}
    >
      <DatePicker />
    </DatePickerContext.Provider>
  );
};

export { DatePickerWrapper as DatePicker };
