import React from "react";
export interface PanelProps {
    children: React.ReactNode;
    title: React.ReactNode;
    id: string;
}
declare const Panel: ({ children, title, id }: PanelProps) => import("react/jsx-dev-runtime").JSX.Element;
export { Panel };
