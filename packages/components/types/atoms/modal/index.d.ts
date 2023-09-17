import React from "react";
export interface ModalProps {
    getContainer?: HTMLElement | null;
    isVisible: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    centered?: boolean;
    destroyOnClose?: boolean;
    maskCloseable?: boolean;
}
declare const Modal: ({ getContainer, isVisible, onClose, children, style, className, centered, destroyOnClose, maskCloseable, }: ModalProps) => import("react/jsx-dev-runtime").JSX.Element;
export { Modal };
