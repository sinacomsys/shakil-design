import { SelectProps } from "../../types";
export interface MultiSelectProps<T extends Record<string, any>>
  extends Omit<SelectProps<T>, "data"> {
  value?: T[keyof T][];
  onChange?: (item: T[keyof T][] | null) => void;
  mode: "multi";
  data: T[];
}
export type InternalValue<T> = T[];
declare const MultiSelect: <T extends Record<string, any>>({
  onChange,
  value,
  data,
  valueExtractor,
  labelExtractor,
  onClear,
  ...props
}: MultiSelectProps<T>) => import("react/jsx-runtime").JSX.Element;
export { MultiSelect };
