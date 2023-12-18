import { Moment } from "moment-jalaali";
import { DatePickerPanel } from "../datePickerPanel";
import { DatePickerProvider } from "../datePickerProvider";
import { DatePickerProviderProps } from "../types";
import { WrapperTemplate } from "../wrapperTemplate";

interface DatePickerProps
  extends Omit<
    DatePickerProviderProps,
    "children" | "onOkDate" | "isDisable" | "onEditAgain" | "disableDateFrom"
  > {
  onChange?: (arg: { value: Moment | undefined | null }) => void;
}

const DatePicker = ({ onChange, ...rest }: DatePickerProps) => {
  return (
    <DatePickerProvider {...rest}>
      {({ value, disable }) => {
        return (
          <WrapperTemplate
            disable={disable}
            value={value}
            onFinalConfirm={onChange}
          >
            <DatePickerPanel />
          </WrapperTemplate>
        );
      }}
    </DatePickerProvider>
  );
};

export { DatePicker };
