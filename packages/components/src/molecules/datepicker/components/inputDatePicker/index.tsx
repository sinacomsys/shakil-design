import { BaseIcon, Tooltip, TooltipProps } from "../../../../atoms";
import { TextInput, TextInputProps } from "../../../../molecules/textInput";
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

const InputDatePicker = ({
  onChange,
  testid,
  AddonAfter,
  addonAfterClassName,
  addonAfterStyle,
  placement,
  ...props
}: InputDatePickerProps) => {
  const [value, setValue] = useState<InputDatePickerProps["value"]>(null);
  const Colors = useTheme();
  const handleOnConfirmDate = ({
    value,
  }: {
    value: InputDatePickerProps["value"];
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
      placement={placement}
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
                testid={testid}
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
          AddonAfter ? (
            AddonAfter
          ) : (
            <BaseIcon
              color={Colors.disableText}
              name="Table-_-Clock"
              size={{ height: 18, width: 18 }}
            />
          )
        }
        {...{ addonAfterStyle, addonAfterClassName }}
        onClear={handleOnClearValue}
        allowClear={props.allowClear}
        value={inputValue}
        disabled={props.disabled}
      />
    </Tooltip>
  );
};
export { InputDatePicker };
