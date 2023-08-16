import { Default, SelectProps } from "./types";
declare const Select: <T extends Record<string, unknown> = Default>({ data, value: propValue, labelExtractor, valueExtractor, onChange, onClear, disabled, unit, }: SelectProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { Select };
