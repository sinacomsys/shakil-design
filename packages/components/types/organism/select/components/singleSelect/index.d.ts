import { DefaultValue, SelectProps } from "../../types";
export interface SingleSelectProps<T extends Record<string, any> = DefaultValue>
  extends SelectProps<T> {
  value?: T[keyof T];
  onChange?: (item: T | null) => void;
  mode?: "single";
}
declare const SingleSelect: <T extends Record<string, any>>({
  valueExtractor,
  labelExtractor,
  data,
  value,
  onChange,
  onClear,
  ...props
}: SingleSelectProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { SingleSelect };
