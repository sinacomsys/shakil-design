import moment, { Moment } from "moment-jalaali";
import { useEffect, useState } from "react";
import { getDaysOfMonth } from "./createCalendarMatrix";
import _ from "lodash";

const DatePicker = () => {
  const [month, setMonth] = useState<Moment[][]>();
  useEffect(() => {
    const sag = getDaysOfMonth(moment(), false);
    const test = _.chunk(sag, 7).map((item) => {
      return item.map((item2) => {
        return item2;
      });
    });
    setMonth(test);
  }, []);
  return (
    <div
      style={{
        // width: 300,

        height: 300,
        backgroundColor: "gray",
        display: "flex",
        width: "fit-content",
        flexDirection: "column",
      }}
    >
      {month?.map((week, index2) => {
        return (
          <div
            style={{ display: "flex", flexDirection: "row-reverse" }}
            key={index2}
          >
            {week.map((day, index) => {
              return (
                <div
                  style={{
                    flex: 1,
                    height: 40,
                    border: "1px solid red",
                    margin: 5,
                  }}
                  key={index}
                >
                  {day.format("jYYYY/jMM/jDD")}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export { DatePicker };
