import { TooltipProps } from "../../../../atoms";
import { TextInputProps } from "../../../../molecules/textInput";
import { DatePickerProviderProps } from "../types";
import { Moment } from "moment-jalaali";
interface InputDatePickerProps
  extends Omit<
      DatePickerProviderProps,
      "children" | "onOkDate" | "isDisable" | "onEditAgain" | "disableDateFrom"
    >,
    Pick<
      TextInputProps,
      | "onClear"
      | "disabled"
      | "AddonAfter"
      | "addonAfterClassName"
      | "addonAfterStyle"
    >,
    Pick<TooltipProps, "placement"> {
  onChange?: (arg: { value: Moment | undefined | null }) => void;
  allowClear?: boolean;
}
declare const InputDatePicker: ({
  onChange,
  testid,
  AddonAfter,
  addonAfterClassName,
  addonAfterStyle,
  placement,
  ...props
}: InputDatePickerProps) => import("react/jsx-dev-runtime").JSX.Element;
export { InputDatePicker };
