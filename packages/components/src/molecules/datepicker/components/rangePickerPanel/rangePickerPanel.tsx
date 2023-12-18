import { useEffect, useState } from "react";
import { DatePickerProvider } from "../datePickerProvider";
import { WrapperTemplate } from "../wrapperTemplate";
import { Moment } from "moment-jalaali";
import { DatePickerPanel } from "../datePickerPanel";
import { DatePickerProviderProps } from "../types";

type Value = Moment | null | undefined;
interface RangePickerPanelProps
  extends Pick<DatePickerProviderProps, "calendarMode"> {
  value?: {
    from: Value;
    to: Value;
  };
  onChange?: (value: { from: Value; to: Value }) => void;
}

const RangePickerPanel = ({ value, onChange }: RangePickerPanelProps) => {
  const [startDate, setStartDate] = useState<Moment | null | undefined>(
    undefined,
  );
  const [endDate, setEndDate] = useState<Moment | null | undefined>(undefined);

  const [isStartDateDisable, setStartDateDisable] = useState(false);
  const [isEndDateDisable, setEndDateDisable] = useState(true);

  const [isStartDateExtended, setStartDateExtend] = useState(false);
  const [isEndDateExtended, setEndDateExtend] = useState(false);

  const handleSetFromDate = (value: Moment | null | undefined) => {
    setStartDate(value);
    setStartDateDisable(true);
    if (!endDate) {
      setEndDateDisable(false);
    }
    if (value?.isAfter(endDate, "minute")) {
      setEndDate(null);
    }
  };

  const handleSetEndDate = (value: Moment | null | undefined) => {
    setEndDate(value);
    setEndDateDisable(true);
    if (value?.isBefore(startDate, "minute")) {
      setEndDate(null);
    }
  };

  const onEditAgainFromDate = () => {
    setStartDateDisable(false);
    setEndDateDisable(true);
    setEndDateExtend(false);
  };
  const onEditAgainEndDate = () => {
    if (!startDate) return;
    setEndDateDisable(false);
    setStartDateDisable(true);
    setStartDateExtend(false);
  };

  const handleFinalConfirm = () => {
    onChange?.({ from: startDate, to: endDate });
  };

  useEffect(() => {
    setStartDate(value?.from);
    setEndDate(value?.to);
  }, [value?.from, value?.to]);

  const handleExtendStartDate = () => {
    setStartDateExtend((prev) => !prev);
  };

  const handleExtendEndDate = () => {
    setEndDateExtend((prev) => !prev);
  };

  const isConfirmDisable =
    !isStartDateDisable || !isEndDateDisable || !startDate || !endDate;

  return (
    <WrapperTemplate
      disable={isConfirmDisable}
      onFinalConfirm={handleFinalConfirm}
    >
      <DatePickerProvider
        isDisable={isStartDateDisable}
        onOkDate={handleSetFromDate}
        onEditAgain={onEditAgainFromDate}
        value={startDate}
        isCalendarExtended={isStartDateExtended}
        handleExtendCalendar={handleExtendStartDate}
      >
        {() => {
          return <DatePickerPanel />;
        }}
      </DatePickerProvider>
      <DatePickerProvider
        disableDateFrom={startDate}
        isDisable={isEndDateDisable}
        onOkDate={handleSetEndDate}
        onEditAgain={onEditAgainEndDate}
        value={endDate}
        isCalendarExtended={isEndDateExtended}
        handleExtendCalendar={handleExtendEndDate}
      >
        {() => {
          return <DatePickerPanel />;
        }}
      </DatePickerProvider>
    </WrapperTemplate>
  );
};

export { RangePickerPanel };
