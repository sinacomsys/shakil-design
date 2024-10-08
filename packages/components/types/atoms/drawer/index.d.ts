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
  contentClassName?: string;
  maskClassName?: string;
}
declare const Drawer: ({
  isVisible,
  children,
  onClose,
  getContainer,
  placement,
  height,
  width,
  destroyOnClose,
  maskCloseable,
  contentClassName,
  maskClassName,
}: DrawerProps) => import("react/jsx-runtime").JSX.Element;
export { Drawer };
