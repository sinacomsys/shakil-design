import React from "react";
export interface ManualImportDateContextProps {
  year?: string;
  month?: string;
  day?: string;
  hour?: string;
  minute?: string;
}
export declare const DatePickerFormProvider: ({
  children,
}: {
  children: React.ReactNode;
}) => import("react/jsx-dev-runtime").JSX.Element;
