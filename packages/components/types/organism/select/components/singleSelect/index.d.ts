import { SelectProps } from "../../types";
export interface SingleSelectProps<T extends Record<string, any>>
  extends SelectProps<T> {
  value?: T[keyof T];
  onChange?: (item: T[keyof T]) => void;
  mode: "single";
}
declare const SingleSelect: <T extends Record<string, any>>({
  valueExtractor,
  labelExtractor,
  data,
  value,
  onChange,
  onClear,
  onFilter,
  ...props
}: SingleSelectProps<T>) => import("react/jsx-runtime").JSX.Element;
export { SingleSelect };
