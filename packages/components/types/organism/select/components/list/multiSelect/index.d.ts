import { Default } from "../../../types";
import { ListPorps } from "../types";
declare const MultiSelectList: <T extends Default>({
  data,
  labelExtractor,
  valueExtractor,
  onClick,
  internalValue,
}: ListPorps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { MultiSelectList };
