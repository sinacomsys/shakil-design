import React from "react";
import { Unit } from "../../types";
export interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
    indeterminate?: boolean;
    unit?: Unit;
}
declare const CheckBox: ({ checked, value, onChange, children, name, indeterminate, unit, ...rest }: CheckBoxProps) => import("react/jsx-dev-runtime").JSX.Element;
export { CheckBox };
