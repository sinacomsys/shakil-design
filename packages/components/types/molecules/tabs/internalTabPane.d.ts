import { ReactNode } from "react";
export interface InternalTabPaneProps {
    id: string;
    renderTitle: React.ReactNode | (({ id, isActive }: {
        id: string;
        isActive: boolean;
    }) => ReactNode);
    closable: boolean;
    onClick: (id: string) => void;
    isActive: boolean;
    onClose?: (id: string) => void;
}
declare function InternalTabPane({ id, renderTitle, closable, onClick, isActive, onClose, }: InternalTabPaneProps): import("react/jsx-dev-runtime").JSX.Element;
export { InternalTabPane };
