import React from "react";
import { Unit } from "../../types";
export interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
    indeterminate?: boolean;
    mode?: "dark" | "light";
    unit?: Unit;
}
declare const CheckBox: ({ checked, value, onChange, children, name, indeterminate, mode, unit, ...rest }: CheckBoxProps) => import("react/jsx-dev-runtime").JSX.Element;
export { CheckBox };
