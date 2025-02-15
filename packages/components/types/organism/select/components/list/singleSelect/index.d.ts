import { ListPorps } from "../types";
import { Default } from "../../../types";
export declare const SingleSelectList: <T extends Default>({
  data,
  onClick,
  labelExtractor,
  internalValue,
  valueExtractor,
}: Omit<
  ListPorps<T>,
  "multiple"
>) => import("react/jsx-dev-runtime").JSX.Element;
