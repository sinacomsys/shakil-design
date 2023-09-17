import React from "react";
export interface DrawerProps {
    isVisible: boolean;
    children: React.ReactNode;
    onClose: () => void;
    getContainer?: HTMLElement | null;
    placement?: "top" | "right" | "bottom" | "left";
    width?: number;
    height?: number;
    destroyOnClose?: boolean;
    maskCloseable?: boolean;
}
declare const Drawer: ({ isVisible, children, onClose, getContainer, placement, height, width, destroyOnClose, maskCloseable, }: DrawerProps) => import("react/jsx-dev-runtime").JSX.Element;
export { Drawer };
