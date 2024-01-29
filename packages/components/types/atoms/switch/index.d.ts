import React from "react";
import { Unit } from "../../types";
interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    unit?: Unit;
    testId?: string;
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export { Switch };
export type { SwitchProps };
