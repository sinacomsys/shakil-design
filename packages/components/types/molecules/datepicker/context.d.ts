/// <reference types="react" />
import { Moment } from "moment-jalaali";
import { DatePickerProps } from "./components/types";
interface DatePickerContext {
    currentDate: DatePickerProps["value"];
    onAddMonth: () => void;
    onSubtractMonth: () => void;
    onAddYear: () => void;
    onSubtractYear: () => void;
    goToday: () => void;
    onSetCurrentDate: (value: Moment) => void;
    onSelectDate: (value: Moment) => void;
    selectedDate: DatePickerProps["value"];
    handleExtendCalendar?: () => void;
    isCalendarExtended?: boolean;
}
export declare const DatePickerContext: import("react").Context<DatePickerContext>;
export {};
