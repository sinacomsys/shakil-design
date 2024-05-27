import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export interface ManualImportDateContextProps {
  year?: string;
  month?: string;
  day?: string;
  hour?: string;
  minute?: string;
}

export const DatePickerFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const methods = useForm<ManualImportDateContextProps>();
  return <FormProvider {...methods}>{children}</FormProvider>;
};
