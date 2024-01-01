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

const DatePicker = ({ onChange, testid, ...rest }: DatePickerProps) => {
  return (
    <DatePickerProvider {...rest}>
      {({ value, disable, onGoToday }) => {
        return (
          <WrapperTemplate
            testid={testid}
            disable={disable}
            onFinalConfirm={() => {
              onChange?.({ value });
            }}
            onGoToday={onGoToday}
          >
            <DatePickerPanel />
          </WrapperTemplate>
        );
      }}
    </DatePickerProvider>
  );
};

export { DatePicker };
