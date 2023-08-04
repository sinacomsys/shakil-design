import { useContext } from "react";
import { Text } from "../../../../atoms";
import moment, { Moment } from "moment-jalaali";
import { DatePickerContext } from "../../context";

interface MatrixProps {
  monthMatrix: Moment[][] | undefined;
}

export const Matrix = ({ monthMatrix }: MatrixProps) => {
  const today = moment();
  const { currentDate } = useContext(DatePickerContext);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {monthMatrix?.map((week, index2) => {
        return (
          <div
            style={{ display: "flex", flexDirection: "row-reverse" }}
            key={index2}
          >
            {week.map((day) => {
              const key = day.format("YYYYMMDD");
              const isToday =
                day.local().format("jYYYY/jMM/jDD") ===
                today.local().format("jYYYY/jMM/jDD");

              const isCurrentMonth =
                day.local().format("jMM") === currentDate.local().format("jMM");
              return (
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={key}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      ...(isToday && {
                        border: "1px solid white",
                        borderRadius: 7,
                      }),
                    }}
                  >
                    <Text
                      theme="Regular"
                      size={14}
                      color={isCurrentMonth ? "white" : "#828282"}
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
