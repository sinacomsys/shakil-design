import React from "react";
export interface PanelProps {
    children: React.ReactNode;
    title: ((args: {
        isOpen: boolean;
    }) => React.ReactNode) | string;
    id: string;
}
declare const Panel: ({ children, title, id }: PanelProps) => import("react/jsx-dev-runtime").JSX.Element;
export { Panel };
