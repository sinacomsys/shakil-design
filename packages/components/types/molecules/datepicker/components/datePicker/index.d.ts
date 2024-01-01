import { Moment } from "moment-jalaali";
import { DatePickerProviderProps } from "../types";
interface DatePickerProps
  extends Omit<
    DatePickerProviderProps,
    "children" | "onOkDate" | "isDisable" | "onEditAgain" | "disableDateFrom"
  > {
  onChange?: (arg: { value: Moment | undefined | null }) => void;
}
declare const DatePicker: ({
  onChange,
  testid,
  ...rest
}: DatePickerProps) => import("react/jsx-dev-runtime").JSX.Element;
export { DatePicker };
