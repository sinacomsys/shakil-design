/// <reference types="react" />
import { Moment } from "moment-jalaali";
interface DatePickerContext {
    currentDate: Moment;
    onAddMonth: () => void;
    onSubtractMonth: () => void;
    onAddYear: () => void;
    onSubtractYear: () => void;
    goToday: () => void;
    onSetCurrentDate: (value: Moment) => void;
    onSelectDate: (value: Moment) => void;
    selectedDate: Moment | null;
    handleExtendCalendar?: () => void;
    isCalendarExtended?: boolean;
}
export declare const DatePickerContext: import("react").Context<DatePickerContext>;
export {};
