import React from "react";
import { ValueType } from "../context";
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "name"> {
    children?: React.ReactNode;
    value: ValueType;
}
declare const InternalRadio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLDivElement>>;
export { InternalRadio };
