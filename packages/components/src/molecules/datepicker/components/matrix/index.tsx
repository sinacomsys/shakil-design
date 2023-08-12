import { useContext } from "react";
import { Text } from "../../../../atoms";
import moment, { Moment } from "moment-jalaali";
import { DatePickerContext } from "../../context";
import { useStyles } from "./style";

interface MatrixProps {
  monthMatrix: Moment[][] | undefined;
}

export const Matrix = ({ monthMatrix }: MatrixProps) => {
  const classes = useStyles();
  const today = moment();
  const { currentDate, onSelectDate, selectedDate } =
    useContext(DatePickerContext);

  return (
    <div className={classes["matrix"]}>
      {monthMatrix?.map((week, index2) => {
        return (
          <div className={classes["week"]} key={index2}>
            {week.map((day) => {
              const key = day.format("YYYYMMDD");
              const isToday =
                day.local().format("jYYYY/jMM/jDD") ===
                today.local().format("jYYYY/jMM/jDD");

              const isSelected =
                day.local().format("jYYYY/jMM/jDD") ===
                selectedDate?.local().format("jYYYY/jMM/jDD");

              const isCurrentMonth =
                day.local().format("jMM") ===
                currentDate?.local().format("jMM");
              return (
                <div className={classes["dayContainer"]} key={key}>
                  <div
                    onClick={() => {
                      onSelectDate(day);
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
                          : !isCurrentMonth
                          ? "#828282"
                          : "white"
                      }
                    >
                      {day.format("jD")}
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
