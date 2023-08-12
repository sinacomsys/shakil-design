import { DatePickerProvider } from "../datePickerProvider";
import { Panel } from "../panel";
import { DatePickerProps } from "../types";

const DatePicker = (props: DatePickerProps) => {
  return (
    <DatePickerProvider {...props}>
      <Panel />
    </DatePickerProvider>
  );
};

export { DatePicker };
