/// <reference types="react" />
import { Moment } from "moment-jalaali";
import { Unit } from "../../../types";
type MonthValue = {
    name: string;
    value: number;
};
export interface DatePickerProps {
    value?: Moment | undefined | null;
    onChange?: (value: Moment | null | undefined) => void;
    onDayChange?: (value: number) => void;
    onMonthChange?: (value: MonthValue) => void;
    onYearChange?: (value: number) => void;
    unit?: Unit;
}
type DateInputProps = {
    value?: string;
    onChangeDateInputText: (value: string) => void;
};
export interface DatePickerProviderProps extends DatePickerProps {
    children?: React.ReactNode | ((e: DateInputProps) => React.ReactNode);
    handleExtendCalendar?: () => void;
    isCalendarExtended?: boolean;
}
export {};
