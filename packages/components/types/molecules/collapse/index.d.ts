import React from 'react';
export interface CollapseProps {
    children: React.ReactNode;
    accordion?: boolean;
    onChange?: (value: {
        activePanelsKey: string[];
        clickedPanelKey: string;
    }) => void;
    activeKey?: string[];
    defaultOpen?: boolean;
}
declare const Collapse: {
    ({ children, accordion, onChange, activeKey, defaultOpen, }: CollapseProps): import("react/jsx-dev-runtime").JSX.Element;
    Panel: ({ children, title, id }: import("./panel").PanelProps) => import("react/jsx-dev-runtime").JSX.Element;
};
export { Collapse };
