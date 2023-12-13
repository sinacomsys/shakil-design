import { useContext } from "react";
import { useStyles } from "./style";
import { DatePickerContext } from "../../context";
import { Header } from "../header";
import { DaysOfWeekTitle } from "../daysOfWeek";
import { Matrix } from "../matrix";

const Calendar = () => {
  const classes = useStyles();
  const { isCalendarExtended, isMatrixOpen } = useContext(DatePickerContext);
  const isExtended =
    isCalendarExtended !== undefined ? isCalendarExtended : isMatrixOpen;

  return (
    <div
      className={classes["calendar-wrapper"]}
      style={{
        height: isExtended ? "auto" : 0,
      }}
    >
      <Header />
      <div className={classes["matrix"]}>
        <DaysOfWeekTitle />
        <Matrix />
      </div>
    </div>
  );
};

export { Calendar };
