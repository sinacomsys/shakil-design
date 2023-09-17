import { DatePickerProviderProps } from "../types";
interface InputDatePickerProps extends DatePickerProviderProps {
    allowClear?: boolean;
    onClear?: () => void;
}
declare const InputDatePicker: (props: InputDatePickerProps) => import("react/jsx-dev-runtime").JSX.Element;
export { InputDatePicker };
