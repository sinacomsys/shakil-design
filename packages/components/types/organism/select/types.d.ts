import { TextInputProps } from "../../molecules/textInput";
import React from "react";
interface TextInputCommon extends Pick<TextInputProps, "allowClear" | "onClear" | "addonAfterStyle" | "addonBeforeStyle" | "addonAfterClassName" | "addonBeforeClassName" | "AddonAfter" | "addonBefore" | "className" | "placeholder" | "style" | "value" | "onBlur" | "onFocus" | "wrapperClassName" | "wrapperStyle" | "onMouseEnter" | "onMouseLeave" | "errorMessage" | "errorMessageClassName" | "hasError" | "clearIconColor" | "isLoading"> {
}
export interface SelectProps<T extends Record<string, any>> extends Omit<TextInputCommon, "value"> {
    data: T[];
    onClear?: () => void;
    disabled?: boolean;
    allowClear?: boolean;
    popupClassName?: string;
    popupStyles?: React.CSSProperties;
    multiple?: boolean;
    hasSearch?: boolean;
    testid?: {
        overlay?: string;
        input?: string;
    };
    valueExtractor?: (item: T) => T[keyof T];
    labelExtractor?: (item: T) => string;
    onFilter?: (args: {
        data: T[];
        searchedValue: string;
    }) => {
        filterdData: T[];
    };
}
export {};
