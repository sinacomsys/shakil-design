import { useContext } from "react";
import { Text } from "@shakil-design/component";
import { DatePickerContext } from "../../context";
import { useStyle } from "./style";
import classnames from "classnames";

const persianDaysOfWeek = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
const gregorianDaysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const DaysOfWeekTitle = () => {
  const classes = useStyle();
  const { calendarMode } = useContext(DatePickerContext);

  const daysOfWeek =
    calendarMode === "persian" ? persianDaysOfWeek : gregorianDaysOfWeek;

  return (
    <div
      className={classnames(
        classes["container"],
        calendarMode === "gregorian" && `${classes["container"]}--gregorian`,
      )}
    >
      {daysOfWeek.map((item, index) => {
        return (
          <div key={index} className={classes["day"]}>
            <Text theme="Regular" size={14} color="white">
              {item}
            </Text>
          </div>
        );
      })}
    </div>
  );
};
