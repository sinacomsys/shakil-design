import React from "react";
export interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
    indeterminate?: boolean;
}
declare const CheckBox: ({ checked, value, onChange, children, name, indeterminate, ...rest }: CheckBoxProps) => import("react/jsx-dev-runtime").JSX.Element;
export { CheckBox };
