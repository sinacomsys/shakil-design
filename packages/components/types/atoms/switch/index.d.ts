import React from "react";
interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  testId?: string;
}
declare const Switch: React.ForwardRefExoticComponent<
  SwitchProps & React.RefAttributes<HTMLInputElement>
>;
export { Switch };
export type { SwitchProps };
