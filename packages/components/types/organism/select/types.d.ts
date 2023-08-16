/// <reference types="react" />
import { Unit } from "../../types";
export type Value = string | number | null | undefined;
export type Default = {
    value?: string | number;
    label?: React.ReactNode;
};
export interface SelectProps<T extends Record<string, unknown> = Default> {
    data: T[];
    value?: Value;
    valueExtractor?: (item: T) => Value;
    labelExtractor?: (item: T) => string;
    onChange?: (item: Value) => void;
    onClear?: () => void;
    disabled?: boolean;
    unit?: Unit;
}
export type OptionValue = {
    value: Value;
    label: string;
};
export interface OptionProps {
    isSelected: boolean;
    children: React.ReactNode;
    value: OptionValue;
    onClick: (value: OptionValue) => void;
}
