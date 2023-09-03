import { Unit } from "../../types";
import { TextInputProps } from "../../molecules/textInput";
import React from "react";
export type Value = string | number | null | undefined;
export type Default = {
  value?: Value;
  label?: React.ReactNode;
};

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
  > {}
export interface SelectProps<T extends Record<string, unknown> = Default>
  extends TextInputCommon {
  data: T[];
  value?: Value;
  valueExtractor?: (item: T) => Value;
  labelExtractor?: (item: T) => string;
  onChange?: (item: Value) => void;
  onClear?: () => void;
  disabled?: boolean;
  unit?: Unit;
  allowClear?: boolean;
  popupClassName?: string;
  popupStyles?: React.CSSProperties;
  multiple?: boolean;
}

export interface OptionProps {
  isSelected: boolean;
  children: React.ReactNode;
  value: { value: Value; label: string };
  onClick: (value: Value) => void;
}
