import { DatePickerProviderProps } from "../types";
import { Moment } from "moment-jalaali";
interface InputDatePickerProps
  extends Omit<
    DatePickerProviderProps,
    "children" | "onOkDate" | "isDisable" | "onEditAgain" | "disableDateFrom"
  > {
  onChange?: (arg: { value: Moment | undefined | null }) => void;
  allowClear?: boolean;
  onClear?: () => void;
}
declare const InputDatePicker: ({
  onChange,
  testid,
  ...props
}: InputDatePickerProps) => import("react/jsx-dev-runtime").JSX.Element;
export { InputDatePicker };
