import { DatePickerContext } from "../../context";
import { Moment } from "moment-jalaali";
import { useState, useContext, useEffect } from "react";
import { getDaysOfMonth } from "../../utils/getDaysOfMonth";
import { Header } from "../header";
import { DaysOfWeekTitle } from "../daysOfWeek";
import { Matrix } from "../matrix";
import _ from "lodash";
import { ManualImportDate } from "../manualImportDate";
import { BaseIcon } from "../../../../atoms";

export const Panel = () => {
  const [monthMatrix, setMonthMatrix] = useState<Moment[][]>();
  const [isMatrixOpen, setMatrixOpen] = useState(false);

  const { currentDate, isCalendarExtended, handleExtendCalendar } =
    useContext(DatePickerContext);
  const handleGetDaysOfMonth = (currentMonth: Moment | null) => {
    if (!currentMonth) return;
    const dayOfMonth = getDaysOfMonth(currentMonth, false);
    return _.chunk(dayOfMonth, 7).map((item) => {
      return item.map((item2) => {
        return item2;
      });
    });
  };
  useEffect(() => {
    if (!currentDate) return;
    setMonthMatrix(handleGetDaysOfMonth(currentDate));
  }, [currentDate]);

  const onCollapseMatrix = () => {
    setMatrixOpen((prev) => !prev);
    handleExtendCalendar?.();
  };
  const isCalendarExtended2 =
    isCalendarExtended !== undefined ? isCalendarExtended : isMatrixOpen;

  return (
    <div
      style={{
        width: 320,
        borderRadius: 10,
        backgroundColor: "#575757",
        paddingBottom: 20,
      }}
    >
      <div
        style={{
          height: isCalendarExtended2 ? "auto" : 0,
          transition: "0.3s",
          overflow: "hidden",
        }}
      >
        <Header />
        <div
          style={{
            paddingInline: 22,
          }}
        >
          <DaysOfWeekTitle />
          <Matrix monthMatrix={monthMatrix} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginLeft: 75,
          marginTop: 20,
        }}
      >
        <ManualImportDate />
        <div
          style={{
            marginInlineStart: 14,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <BaseIcon
            color={"#eeeeee"}
            name="Every-Boxes-_-Flesh-Icon-for-more-choices"
            size={{ height: 5, width: 9 }}
            wrapperStyle={{ marginBottom: 5, justifyContent: "center" }}
          />
          <BaseIcon
            wrapperStyle={{ cursor: "pointer" }}
            onClick={onCollapseMatrix}
            color="#eeeeee"
            name="Calendar-_-Calendar-Icon"
            size={{
              width: 18,
              height: 18,
            }}
          />
        </div>
      </div>
    </div>
  );
};
