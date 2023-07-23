import React from "react";
import { PopperProps } from "react-popper";
type Value = string | number | null | undefined;
type Default = {
    value?: Value;
    label?: React.ReactNode;
};
interface DropDownProps<T extends Default> {
    trigger?: "click" | "hover";
    children: React.ReactNode;
    placement?: PopperProps<unknown>["placement"];
    hasMask?: boolean;
    maskStyle?: React.CSSProperties;
    isVisible?: boolean;
    items: T[];
    value?: Value;
    onChange?: (value: T) => void;
}
declare const DropDown: <T extends Default>({ children, trigger, placement, isVisible: isVisibleProp, items, onChange, value: propValue, }: DropDownProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { DropDown };
