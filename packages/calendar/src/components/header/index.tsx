import { BaseIcon, Text } from "@shakil-design/component";
import { DatePickerContext } from "../../context";
import { useContext } from "react";
import { useStyle } from "./style";
import moment from "moment-jalaali";
import { NextMonthIcon } from "../icons/nextMonth";
import { PrevMonthIcon } from "../icons/prevMonth";
import { PrevYearCalendar } from "../icons/prevYear";
import { NextYearIcon } from "../icons/nextYear";

export const Header = () => {
  const {
    currentDate,
    onAddMonth,
    onAddYear,
    onSubtractMonth,
    onSubtractYear,
    calendarMode,
  } = useContext(DatePickerContext);
  const classes = useStyle();

  const date =
    currentDate &&
    new Date(
      Number(moment(currentDate).format("YYYY")),
      Number(moment(currentDate).format("MM")) - 1,
      Number(moment(currentDate).format("DD")),
    );

  const month =
    date &&
    new Intl.DateTimeFormat(calendarMode === "persian" ? "fa-IR" : "en-US", {
      month: "short",
    }).format(date);

  const year =
    date &&
    new Intl.DateTimeFormat(calendarMode === "persian" ? "fa-IR" : "en-US", {
      year: "numeric",
    }).format(date);

  return (
    <div className={classes["wrapper"]}>
      <div className={classes["prevMonth"]} onClick={onSubtractMonth}>
        <PrevMonthIcon />
      </div>
      <div className={classes["nextMonth"]} onClick={onAddMonth}>
        <NextMonthIcon />
      </div>

      <div className={classes["month"]}>
        <Text size={14} color={"white"} theme="Regular">
          {month ?? ""}
        </Text>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={classes["change-year"]}>
            <PrevYearCalendar onClick={onSubtractYear} />
          </div>

          <Text className={classes["year"]} color={"white"} size={14}>
            {year ?? ""}
          </Text>
          <div className={classes["change-year"]}>
            <NextYearIcon onClick={onAddYear} />
          </div>
        </div>
      </div>
    </div>
  );
};
