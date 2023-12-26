import { MultiSelect, MultiSelectProps } from "./components/multiSelect";
import { SingleSelect, SingleSelectProps } from "./components/singleSelect";

type Sag<T extends Record<string, any>> =
  | MultiSelectProps<T>
  | SingleSelectProps<T>;

function Select<T extends Record<string, any>>(
  props: SingleSelectProps<T>,
): React.ReactNode;
function Select<T extends Record<string, any>>(
  props: MultiSelectProps<T>,
): React.ReactNode;
function Select<T extends Record<string, any>>(props: Sag<T>) {
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
