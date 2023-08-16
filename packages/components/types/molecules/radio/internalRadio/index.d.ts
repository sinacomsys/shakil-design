import React from "react";
import { ValueType } from "../context";
import { Unit } from "../../../types";
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "name"> {
    children?: React.ReactNode;
    value: ValueType;
    unit?: Unit;
}
declare const InternalRadio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLDivElement>>;
export { InternalRadio };
