/// <reference types="react" />
import { MultiSelectProps } from "./components/multiSelect";
import { SingleSelectProps } from "./components/singleSelect";
declare function Select<T extends Record<string, any>>(
  props: SingleSelectProps<T>,
): React.ReactNode;
declare function Select<T extends Record<string, any>>(
  props: MultiSelectProps<T>,
): React.ReactNode;
export { Select };
