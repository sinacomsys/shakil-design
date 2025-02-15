import moment from "moment-jalaali";
import { useContext } from "react";

import { BaseIcon, Text } from "../../../../atoms";
import { DatePickerContext } from "../../context";
import { useStyle } from "./style";

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
        <BaseIcon
          name="Calendar-_-Month-_-Previous-Month"
          size={{
            width: 19,
            height: 13,
          }}
          color={["white"]}
        />
      </div>
      <div className={classes["nextMonth"]} onClick={onAddMonth}>
        <BaseIcon
          onClick={onAddMonth}
          name="Calendar-_-Month-_-Next-Month"
          size={{
            width: 19,
            height: 13,
          }}
          color={["white"]}
        />
      </div>

      <div className={classes["month"]}>
        <Text size={14} color={"white"} theme="Regular">
          {month ?? ""}
        </Text>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={classes["change-year"]}>
            <BaseIcon
              name="Amount-Boxes_Decrease"
              size={{ width: 13, height: 8 }}
              color={["white"]}
              onClick={onSubtractYear}
              wrapperStyle={{ cursor: "pointer" }}
            />
          </div>

          <Text className={classes["year"]} color={"white"} size={14}>
            {year ?? ""}
          </Text>
          <div className={classes["change-year"]}>
            <BaseIcon
              name="Amount-Boxes_Increase"
              size={{ width: 13, height: 8 }}
              color={["white"]}
              onClick={onAddYear}
              wrapperStyle={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
