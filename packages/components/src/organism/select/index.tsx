import { MultiSelect, MultiSelectProps } from "./components/multiSelect";
import { SingleSelect, SingleSelectProps } from "./components/singleSelect";

type SelectProps<T extends Record<string, any>> =
  | MultiSelectProps<T>
  | SingleSelectProps<T>;

function Select<T extends Record<string, any>>(
  props: SingleSelectProps<T>,
): JSX.Element;
function Select<T extends Record<string, any>>(
  props: MultiSelectProps<T>,
): JSX.Element;
function Select<T extends Record<string, any>>(props: SelectProps<T>) {
  return (
    <>
      {props.mode === "multi" ? (
        <MultiSelect {...props} />
      ) : props.mode === "single" ? (
        <SingleSelect {...props} />
      ) : null}
    </>
  );
}
export type { MultiSelectProps };
export type { SingleSelectProps };
export { Select };
