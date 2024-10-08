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
  maskClassName?: string;
}
declare const Modal: ({
  getContainer,
  isVisible,
  onClose,
  children,
  style,
  className,
  centered,
  destroyOnClose,
  maskCloseable,
  maskClassName,
}: ModalProps) => import("react/jsx-runtime").JSX.Element;
export { Modal };
