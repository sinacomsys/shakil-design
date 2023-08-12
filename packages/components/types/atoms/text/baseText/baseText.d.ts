import classNames from "classnames";
import { ReactNode } from "react";
export type Variant = "div" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "article" | "p" | "main" | "section";
export interface BaseTextProps extends Omit<React.HTMLAttributes<HTMLElement>, "children" | "className"> {
    href?: string;
    variant?: Variant;
    children?: ReactNode | ReactNode[] | null;
    onPress?: (e: unknown) => void;
    dir?: "auto" | "ltr" | "rtl";
    numberOfLines?: number;
    selectable?: boolean;
    className?: Parameters<typeof classNames>[0];
    ellipsis?: boolean;
    lineHeight?: number;
}
/** Inspired of React-native Text */
declare const BaseText: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<BaseTextProps & import("react").RefAttributes<HTMLDivElement>>>;
export { BaseText };
