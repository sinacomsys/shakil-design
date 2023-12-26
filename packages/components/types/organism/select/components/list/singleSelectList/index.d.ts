import { SingleSelectProps } from "../../singleSelect";
export interface SingleSelectList<T extends Record<string, any>>
  extends Pick<
    SingleSelectProps<T>,
    "data" | "valueExtractor" | "labelExtractor"
  > {
  onClick: (value: T[keyof T]) => void;
  internalValue: T | undefined;
}
export declare const SingleSelectList: <T extends Record<string, any>>({
  data,
  onClick,
  labelExtractor,
  internalValue,
  valueExtractor,
}: SingleSelectList<T>) => import("react/jsx-dev-runtime").JSX.Element;
