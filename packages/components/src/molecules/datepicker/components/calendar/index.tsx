import { useContext } from "react";
import { useStyles } from "./style";
import { DatePickerContext } from "../../context";
import { Header } from "../header";
import { DaysOfWeekTitle } from "../daysOfWeek";
import { Matrix } from "../matrix";

const Calendar = () => {
  const classes = useStyles();
  const { isMatrixOpen } = useContext(DatePickerContext);

  return (
    <div
      className={classes["calendar-wrapper"]}
      style={{
        height: isMatrixOpen ? "auto" : 0,
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
