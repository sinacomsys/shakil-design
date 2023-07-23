import React from "react";
import { PopperProps } from "react-popper";
export interface TooltipProps {
    trigger?: "click" | "hover";
    children: React.ReactNode;
    content: React.ReactNode;
    arrowColor: string;
    placement?: PopperProps<unknown>["placement"];
    hasMask?: boolean;
    maskStyle?: React.CSSProperties;
    isVisible?: boolean;
}
declare const Tooltip: ({ children, content, trigger, arrowColor, placement, hasMask, maskStyle, isVisible: isVisibleProp, }: TooltipProps) => import("react/jsx-dev-runtime").JSX.Element;
export { Tooltip };
