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
interface InputElement extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className" | "style" | "children"> {
    testID?: string;
    href?: string;
}
export interface TextInputProps extends Omit<InputElement, "autoCorrect"> {
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
    editable?: boolean;
    inputAccessoryViewID?: string;
    keyboardType?: "default" | "email-address" | "number-pad" | "numbers-and-punctuation" | "numeric" | "phone-pad" | "search" | "url" | "decimal-pad" | "web-search";
    maxLength?: number;
    multiline?: boolean;
    numberOfLines?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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
    onSelectionChange?: (e: Omit<React.SyntheticEvent<HTMLInputElement, Event>, "nativeEvent"> & {
        nativeEvent: Event & {
            selection: {
                start: number;
                end: number;
            };
            text: string;
        };
    }) => void;
    onSubmitEditing?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    placeholderTextColor?: string;
    returnKeyType?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
    secureTextEntry?: boolean;
    selectTextOnFocus?: boolean;
    selection?: {
        start: number;
        end?: number;
    };
    selectionColor?: string;
    name?: string;
    spellCheck?: boolean;
    style?: React.CSSProperties;
    value?: string | number;
}
export {};
