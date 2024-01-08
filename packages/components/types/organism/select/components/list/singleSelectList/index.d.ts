import { SingleSelectProps } from "../../singleSelect";
export interface SingleSelectList<T extends Record<string, any>>
  extends Pick<
    SingleSelectProps<T>,
    "data" | "valueExtractor" | "labelExtractor"
  > {
  onClick: (value: T[keyof T]) => void;
  selectedItem: T | undefined;
  filteredData: T[];
}
export declare const SingleSelectList: <T extends Record<string, any>>({
  data,
  onClick,
  labelExtractor,
  selectedItem,
  valueExtractor,
  filteredData,
}: SingleSelectList<T>) => import("react/jsx-dev-runtime").JSX.Element;
