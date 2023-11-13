import { DatePickerContext } from "../../context";
import { Moment } from "moment-jalaali";
import { useState, useContext, useEffect } from "react";
import { chunkDaysOfMonth } from "../../utils/chuckDaysOfMonth";
import { Header } from "../header";
import { DaysOfWeekTitle } from "../daysOfWeek";
import { Matrix } from "../matrix";
import { ManualImportDate } from "../manualImportDate";
import { BaseIcon } from "../../../../atoms";
import { useStyle } from "./style";

export const Panel = () => {
  const [monthMatrix, setMonthMatrix] = useState<Moment[][]>();
  const [isMatrixOpen, setMatrixOpen] = useState(false);
  const classes = useStyle();
  const { goToday, onSetCurrentDate, onSelectDate } =
    useContext(DatePickerContext);

  const { currentDate, isCalendarExtended, handleExtendCalendar } =
    useContext(DatePickerContext);

  useEffect(() => {
    if (!currentDate) return;
    setMonthMatrix(chunkDaysOfMonth(currentDate));
  }, [currentDate]);

  const onCollapseMatrix = () => {
    setMatrixOpen((prev) => !prev);
    handleExtendCalendar?.();
  };

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _isCalendarExtended =
    isCalendarExtended !== undefined ? isCalendarExtended : isMatrixOpen;

  return (
    <div className={classes["panel"]}>
      <div
        className={classes["matrixContainer"]}
        style={{
          height: _isCalendarExtended ? "auto" : 0,
        }}
      >
        <Header />
        <div className={classes["matrix"]}>
          <DaysOfWeekTitle />
          <Matrix monthMatrix={monthMatrix} />
        </div>
      </div>

      <div className={classes["manualInput"]}>
        <div>
          <ManualImportDate {...{ goToday, onSelectDate, onSetCurrentDate }} />
        </div>
        <div className={classes["expandIconWrap"]}>
          <BaseIcon
            wrapperClassName={`${classes["expandIconWrap"]}--more-choices`}
            color={"#eeeeee"}
            name="Every-Boxes-_-Flesh-Icon-for-more-choices"
            size={{ height: 5, width: 9 }}
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
