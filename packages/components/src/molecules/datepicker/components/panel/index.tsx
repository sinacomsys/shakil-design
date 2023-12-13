import { DatePickerContext } from "../../context";
import { useContext, useState } from "react";
import { ManualImportDate } from "../manualImportDate";
import { BaseIcon, Text } from "../../../../atoms";
import { useStyle } from "./style";
import { ManualImportDateContext } from "../manualImportDate/context";
import moment from "moment-jalaali";
import { Calendar } from "../calendar";
import { Button } from "@shakil-design/component";
import { ExpandIcon } from "../expandIcon";

export const Panel = () => {
  const [isConfirmed, setConfirm] = useState(false);
  const classes = useStyle();
  const {
    onSetCurrentDate,
    onChange,
    formats: { FULL_TIME_FORMAT },
    calendarMode,
  } = useContext(DatePickerContext);

  const { getValues, setValue } = ManualImportDateContext.useFormContext();

  const onConfirm = () => {
    if (!isConfirmed) return;
    const { year, month, day, hour, minute } = getValues();
    const date =
      year &&
      day &&
      month &&
      moment(`${year}/${month}/${day} ${hour}:${minute}`, FULL_TIME_FORMAT);
    date && onSetCurrentDate(date);
    date && onChange?.(date);
  };

  const handleConfirmDate = () => {
    setConfirm(true);
  };

  const handleOndisproveDate = () => {
    setConfirm(false);
  };

  const onGoToDay = () => {
    const current = moment();
    const isPersian = calendarMode === "persian";
    const year = isPersian ? current.jYear() : current.year();
    const month = isPersian ? current.jMonth() : current.month();
    const date = isPersian ? current.jDate() : current.date();
    const hour = current.hour();
    const minute = current.minute();
    setValue("day", date as unknown as string);
    setValue("hour", hour as unknown as string);
    setValue("minute", minute as unknown as string);
    setValue("month", (month + 1) as unknown as string);
    setValue("year", year as unknown as string);
  };

  return (
    <div className={classes["wrapper"]}>
      <Calendar />
      <div className={classes["manualInput"]}>
        <ManualImportDate
          onConfirmDate={handleConfirmDate}
          isConfirmed={isConfirmed}
          onDisproveDate={handleOndisproveDate}
        />
        <div className={classes["expand"]}>
          <ExpandIcon handleOndisproveDate={handleOndisproveDate} />
        </div>
      </div>

      <Button className={classes["go-today"]} size="small" onClick={onGoToDay}>
        <Text size={14} color={"#FFFFFF"}>
          Go Today!
        </Text>
      </Button>

      <div className={classes["footer-icons"]}>
        <BaseIcon
          wrapperStyle={{ cursor: "pointer" }}
          name="Calendar-_-Close"
          size={{ height: 19, width: 19 }}
        />
        <BaseIcon
          onClick={onConfirm}
          name="Calendar-_-Apply-Changes"
          size={{ height: 19, width: 19 }}
          wrapperStyle={{ cursor: isConfirmed ? "pointer" : "not-allowed" }}
        />
      </div>
    </div>
  );
};
