import { Unit } from "../../types";
import { TextInputProps } from "../../molecules/textInput";
import React from "react";
export type Value = string | number | null | undefined;
interface TextInputCommon
  extends Pick<
    TextInputProps,
    | "allowClear"
    | "onClear"
    | "addonAfterStyle"
    | "addonBeforeStyle"
    | "addonAfterClassName"
    | "addonBeforeClassName"
    | "AddonAfter"
    | "addonBefore"
    | "className"
    | "placeholder"
    | "style"
    | "value"
    | "onBlur"
    | "onFocus"
    | "wrapperClassName"
    | "wrapperStyle"
    | "onMouseEnter"
    | "onMouseLeave"
    | "errorMessage"
    | "errorMessageClassName"
    | "hasError"
    | "clearIconColor"
    | "isLoading"
  > {}
export interface SelectProps<T extends Record<string, any>>
  extends Omit<TextInputCommon, "value"> {
  data: T[];
  onClear?: () => void;
  disabled?: boolean;
  unit?: Unit;
  allowClear?: boolean;
  popupClassName?: string;
  popupStyles?: React.CSSProperties;
  multiple?: boolean;
  onSearch?: (args: string) => void;
  hasSearch?: boolean;
  testid?: {
    overlay?: string;
    input?: string;
  };
  valueExtractor?: (item: T) => T[keyof T];
  labelExtractor?: (item: T) => string;
}
export {};
