import { BaseIcon, Text } from "../../../../atoms";
import { DatePickerContext } from "../../context";
import { useContext } from "react";
import { useStyle } from "./style";
import moment from "moment-jalaali";

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
      <BaseIcon
        onClick={onSubtractMonth}
        wrapperClassName={classes["prevMonth"]}
        name="Calendar-_-Month-_-Previous-Month"
        size={{
          width: 16,
          height: 9,
        }}
        color={["white"]}
      />
      <BaseIcon
        onClick={onAddMonth}
        wrapperClassName={classes["nextMonth"]}
        name="Calendar-_-Month-_-Next-Month"
        size={{
          width: 16,
          height: 9,
        }}
        color={["white"]}
      />
      <div className={classes["month"]}>
        <Text size={14} color={"white"} theme="Regular">
          {month ?? ""}
        </Text>
        <div style={{ display: "flex", alignItems: "center", marginTop: 5 }}>
          <BaseIcon
            name="Calendar-_-Year-_-Previous-Year"
            size={{ width: 9, height: 5 }}
            color={["white"]}
            onClick={onSubtractYear}
            wrapperStyle={{ cursor: "pointer" }}
          />
          <Text className={classes["year"]} color={"white"} size={14}>
            {year ?? ""}
          </Text>
          <BaseIcon
            name="Calendar-_-Year-_-Next-Year"
            size={{ width: 9, height: 5 }}
            color={["white"]}
            onClick={onAddYear}
            wrapperStyle={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};
