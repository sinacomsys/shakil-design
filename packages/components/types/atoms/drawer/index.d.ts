/// <reference types="react" />
export interface DrawerProps {
    isVisible: boolean;
    children: React.ReactNode;
    onClose: () => void;
    getContainer?: HTMLElement;
    placement?: "top" | "right" | "bottom" | "left";
    width?: number;
    height?: number;
    destroyOnClose?: boolean;
}
declare const Drawer: ({ isVisible, children, onClose, getContainer, placement, height, width, destroyOnClose, }: DrawerProps) => import("react/jsx-dev-runtime").JSX.Element;
export { Drawer };
