import React from "react";
export interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
    indeterminate?: boolean;
    mode?: "dark" | "light";
}
declare const CheckBox: ({ checked, value, onChange, children, name, indeterminate, mode, ...rest }: CheckBoxProps) => import("react/jsx-dev-runtime").JSX.Element;
export { CheckBox };
