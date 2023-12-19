import { Moment } from "moment-jalaali";
import { DatePickerProviderProps } from "../types";
type Value = Moment | null | undefined;
interface RangePickerPanelProps
  extends Pick<DatePickerProviderProps, "calendarMode"> {
  value?: {
    from: Value;
    to: Value;
  };
  onChange?: (value: { from: Value; to: Value }) => void;
}
declare const RangePickerPanel: ({
  value,
  onChange,
}: RangePickerPanelProps) => import("react/jsx-dev-runtime").JSX.Element;
export { RangePickerPanel };
