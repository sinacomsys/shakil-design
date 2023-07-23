import React from "react";
export interface ModalProps {
    getContainer?: HTMLElement;
    isVisible: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    centered?: boolean;
    destroyOnClose?: boolean;
}
declare const Modal: ({ getContainer, isVisible, onClose, children, style, className, centered, destroyOnClose, }: ModalProps) => import("react/jsx-dev-runtime").JSX.Element;
export { Modal };
