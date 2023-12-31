import { BaseIcon, Tooltip } from "../../../../atoms";
import { TextInput } from "../../../../molecules/textInput";
import { DatePickerProvider } from "../datePickerProvider";
import { DatePickerProviderProps } from "../types";
import { theming } from "../../../../theme";
import { WrapperTemplate } from "../wrapperTemplate";
import { useState } from "react";
import { Moment } from "moment-jalaali";
import { PERSIAN_FULL_TIME_FORMAT } from "../../utils/calendarMode";
import { DatePickerPanel } from "../datePickerPanel";
const { useTheme } = theming;

interface InputDatePickerProps
  extends Omit<
    DatePickerProviderProps,
    "children" | "onOkDate" | "isDisable" | "onEditAgain" | "disableDateFrom"
  > {
  onChange?: (arg: { value: Moment | undefined | null }) => void;
  allowClear?: boolean;
  onClear?: () => void;
}

const InputDatePicker = ({ onChange, ...props }: InputDatePickerProps) => {
  const [value, setValue] = useState<Moment | null | undefined>(undefined);
  const Colors = useTheme();
  const handleOnConfirmDate = ({
    value,
  }: {
    value: Moment | null | undefined;
  }) => {
    setValue(value);
    onChange?.({ value });
  };

  const handleOnClearValue = () => {
    setValue(null);
    props.onClear?.();
  };

  const _value = props.value ? props.value : value;

  const inputValue = _value ? _value?.format(PERSIAN_FULL_TIME_FORMAT) : "";

  return (
    <Tooltip
      trigger="click"
      content={
        <DatePickerProvider {...props}>
          {({ value, disable, onGoToday }) => {
            return (
              <WrapperTemplate
                disable={disable}
                onFinalConfirm={() => {
                  handleOnConfirmDate({ value });
                }}
                onGoToday={onGoToday}
              >
                <DatePickerPanel />
              </WrapperTemplate>
            );
          }}
        </DatePickerProvider>
      }
    >
      <TextInput
        AddonAfter={
          <BaseIcon
            color={Colors.disableText}
            name="Table-_-Clock"
            size={{ height: 18, width: 18 }}
          />
        }
        onClear={handleOnClearValue}
        allowClear={props.allowClear}
        value={inputValue}
      />
    </Tooltip>
  );
};
export { InputDatePicker };
