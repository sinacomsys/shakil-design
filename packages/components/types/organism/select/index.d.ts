/// <reference types="react" />
import { MultiSelectProps } from "./components/multiSelect";
import { SingleSelectProps } from "./components/singleSelect";
declare function Select<T extends Record<string, any>>(
  props: SingleSelectProps<T>,
): JSX.Element;
declare function Select<T extends Record<string, any>>(
  props: MultiSelectProps<T>,
): JSX.Element;
export type { MultiSelectProps };
export type { SingleSelectProps };
export { Select };
