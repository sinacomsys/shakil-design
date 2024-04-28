/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 *
 * @flow
 */
import React from "react";
import { TextProps } from "../../atoms";
type InputType = "password" | "text";
export interface TextInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    | "autoCorrect"
    | "value"
    | "type"
    | "inputMode"
    | "className"
    | "style"
    | "children"
  > {
  href?: string;
  isLoading?: boolean;
  allowClear?: boolean;
  clearIconColor?: string;
  wrapperClassName?: string;
  wrapperStyle?: React.CSSProperties;
  onClear?: () => void;
  addonAfterStyle?: React.CSSProperties;
  addonBeforeStyle?: React.CSSProperties;
  addonAfterClassName?: string;
  addonBeforeClassName?: string;
  AddonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  className?: string;
  autoCapitalize?: "characters" | "none" | "sentences" | "words";
  theme?: TextProps["theme"];
  autoComplete?: string;
  autoCompleteType?: string;
  autoCorrect?: boolean;
  autoFocus?: boolean;
  blurOnSubmit?: boolean;
  clearTextOnFocus?: boolean;
  defaultValue?: string;
  dir?: "auto" | "ltr" | "rtl";
  disabled?: boolean;
  inputAccessoryViewID?: string;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onChangeText?: (e: string) => void;
  onContentSizeChange?: (e: {
    nativeEvent: {
      contentSize: {
        height: number;
        width: number;
      };
    };
  }) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSelectionChange?: (
    e: Omit<React.SyntheticEvent<HTMLInputElement, Event>, "nativeEvent"> & {
      nativeEvent: Event & {
        selection: {
          start: number;
          end: number;
        };
        text: string;
      };
    },
  ) => void;
  onSubmitEditing?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  selectTextOnFocus?: boolean;
  selection?: {
    start: number;
    end?: number;
  };
  selectionColor?: string;
  name?: string;
  spellCheck?: boolean;
  style?: React.CSSProperties;
  value?: string | number | null;
  errorMessage?: string;
  errorMessageClassName?: string;
  hasError?: boolean;
  password?: boolean;
  type?: InputType;
}
export {};
