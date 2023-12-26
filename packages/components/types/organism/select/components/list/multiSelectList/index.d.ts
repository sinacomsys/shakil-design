import { MultiSelectProps } from "../../multiSelect";
export interface MultiSelectList<T extends Record<string, any>>
  extends Pick<MultiSelectProps<T>, "valueExtractor" | "labelExtractor"> {
  onClick: (value: T[keyof T]) => void;
  value: T[keyof T][];
  data: T[];
}
declare const MultiSelectList: <T extends Record<string, any>>({
  data,
  labelExtractor,
  valueExtractor,
  onClick,
  value,
}: MultiSelectList<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { MultiSelectList };
