import { SelectProps } from "../../types";
export interface SingleSelectProps<T extends Record<string, any>>
  extends SelectProps<T> {
  value?: T[keyof T];
  onChange?: (item: T) => void;
  mode?: "single";
}
declare const SingleSelect: <T extends Record<string, any>>({
  valueExtractor,
  labelExtractor,
  data,
  value,
  onChange,
  ...props
}: SingleSelectProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { SingleSelect };
