import { useContext } from "react";
import { Text } from "@shakil-design/component";
import moment from "moment-jalaali";
import { DatePickerContext } from "../../context";
import { useStyles } from "./style";
import classNames from "classnames";

export const Matrix = () => {
  const classes = useStyles();
  const today = moment();
  const {
    currentDate,
    handleSelectDateFromMatrix,
    selectedDate,
    monthMatrix,
    formats: { FULL_DATE_FORMAT, MONTH_NUMBER_FORMAT, SHORT_DAY_FORMAT },
    calendarMode,
    disableDateFrom,
  } = useContext(DatePickerContext);

  return (
    <div className={classes["matrix"]}>
      {monthMatrix?.map((week, index2) => {
        return (
          <div
            className={classNames(
              classes["week"],
              calendarMode === "gregorian" && `${classes["week"]}--gregorian`,
            )}
            key={index2}
          >
            {week.map((day) => {
              const key = day.format("YYYYMMDD");
              const isToday =
                day.local().format(FULL_DATE_FORMAT) ===
                today.local().format(FULL_DATE_FORMAT);

              const isSelected =
                day.local().format(FULL_DATE_FORMAT) ===
                selectedDate?.local().format(FULL_DATE_FORMAT);

              const isCurrentMonth =
                day.local().format(MONTH_NUMBER_FORMAT) ===
                currentDate?.local().format(MONTH_NUMBER_FORMAT);

              const isDayBeforeStartDate =
                disableDateFrom && day.isBefore(disableDateFrom, "day");

              const isUnselectable = Boolean(
                !isCurrentMonth || isDayBeforeStartDate,
              );

              return (
                <div className={classes["dayContainer"]} key={key}>
                  <div
                    onClick={() => {
                      !isUnselectable && handleSelectDateFromMatrix(day);
                    }}
                    className={classes["day"]}
                    style={{
                      ...(isToday && {
                        border: "1px solid white",
                        borderRadius: 7,
                      }),
                      ...(isSelected && {
                        backgroundColor: "#eeeeee",
                        borderRadius: 7,
                      }),
                      cursor: "pointer",
                    }}
                  >
                    <Text
                      theme="Regular"
                      size={14}
                      color={
                        isSelected
                          ? "#575757"
                          : isUnselectable
                          ? "#828282"
                          : "white"
                      }
                    >
                      {day.format(SHORT_DAY_FORMAT)}
                    </Text>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
