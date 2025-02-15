import { Default, InternalValue, SelectProps, Value } from "../../types";
export interface ListPorps<T extends Default>
  extends Pick<SelectProps<T>, "valueExtractor" | "labelExtractor" | "data"> {
  onClick: (value: Value) => void;
  internalValue: InternalValue;
}
