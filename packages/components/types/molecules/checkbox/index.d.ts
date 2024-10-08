import React from "react";
export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  indeterminate?: boolean;
  "data-testid"?: string | number;
}
declare const CheckBox: ({
  checked,
  value,
  onChange,
  children,
  name,
  indeterminate,
  "data-testid": testid,
  ...rest
}: CheckBoxProps) => import("react/jsx-runtime").JSX.Element;
export { CheckBox };
