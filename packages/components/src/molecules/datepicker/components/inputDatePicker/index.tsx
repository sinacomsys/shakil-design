import { Tooltip } from "../../../../atoms";
import { TextInput } from "../../../../molecules/textInput";
import { DatePickerProvider } from "../datePickerProvider";
import { Panel } from "../panel";
import { DatePickerProviderProps } from "../types";

const InputDatePicker = (props: DatePickerProviderProps) => {
  return (
    <DatePickerProvider {...props}>
      {({ value, onChangeDateInputText }) => {
        return (
          <Tooltip trigger="click" content={<Panel />}>
            <TextInput value={value} onChangeText={onChangeDateInputText} />
          </Tooltip>
        );
      }}
    </DatePickerProvider>
  );
};

export { InputDatePicker };
