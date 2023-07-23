import React from "react";
export interface ButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "type" | "children"> {
    htmlType?: "submit" | "button" | "reset";
    mode?: "primary" | "secondary";
    children: React.ReactNode;
    className?: string;
    isLoading?: boolean;
    disabled?: boolean;
    form?: string;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };
