import { BaseIcon, Tooltip } from "../../../../atoms";
import { TextInput } from "../../../../molecules/textInput";
import { DatePickerProvider } from "../datePickerProvider";
import { Panel } from "../panel";
import { DatePickerProviderProps } from "../types";
import { theming } from "../../../../theme";
const { useTheme } = theming;

interface InputDatePickerProps extends DatePickerProviderProps {
  allowClear?: boolean;
  onClear?: () => void;
}

const InputDatePicker = (props: InputDatePickerProps) => {
  const Colors = useTheme();

  return (
    <DatePickerProvider {...props}>
      {({ value, onChangeDateInputText }) => {
        return (
          <Tooltip trigger="click" content={<Panel />}>
            <TextInput
              AddonAfter={
                <BaseIcon
                  color={Colors.disableText}
                  name="Table-_-Clock"
                  size={{ height: 18, width: 18 }}
                />
              }
              onClear={props.onClear}
              allowClear={props.allowClear}
              unit={props.unit}
              value={value}
              onChangeText={onChangeDateInputText}
            />
          </Tooltip>
        );
      }}
    </DatePickerProvider>
  );
};
export { InputDatePicker };
