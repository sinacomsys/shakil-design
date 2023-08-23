/// <reference types="react" />
import { Unit } from "../../types";
type Mode = "main" | "success" | "danger";
export type Ripple = {
    top: string;
    left: string;
    height: string;
    width: string;
    id: number;
};
export interface ButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "type" | "children"> {
    htmlType?: "submit" | "button" | "reset";
    mode?: Mode;
    children: React.ReactNode;
    className?: string;
    isLoading?: boolean;
    disabled?: boolean;
    form?: string;
    size?: "small" | "middle";
    unit?: Unit;
    ghost?: boolean;
}
export {};
