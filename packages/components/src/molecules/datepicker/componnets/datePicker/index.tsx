import { DatePickerContext } from "../../context";
import { Moment } from "moment-jalaali";
import { useState, useContext, useEffect } from "react";
import { getDaysOfMonth } from "../../utils/getDaysOfMonth";
import { Header } from "../hearder";
import { DaysOfWeekTitle } from "../daysOfWeek";
import { Matrix } from "../matrix";
import _ from "lodash";

export const DatePicker = () => {
  const [monthMatrix, setMonthMatrix] = useState<Moment[][]>();
  const { currentDate } = useContext(DatePickerContext);
  const handleGetDaysOfMonth = (currentMonth: Moment) => {
    const dayOfMonth = getDaysOfMonth(currentMonth, false);
    return _.chunk(dayOfMonth, 7).map((item) => {
      return item.map((item2) => {
        return item2;
      });
    });
  };
  useEffect(() => {
    setMonthMatrix(handleGetDaysOfMonth(currentDate));
  }, [currentDate]);

  return (
    <div
      style={{
        width: 320,
        height: 444,
        backgroundColor: "#575757",
        padding: 22,
      }}
    >
      <Header />
      <DaysOfWeekTitle />
      <Matrix monthMatrix={monthMatrix} />
    </div>
  );
};
