import { ReactNode } from 'react';
export interface TabPaneProps {
    children: React.ReactNode;
    id: string;
    renderTitle: React.ReactNode | (({ id, isActive }: {
        id: string;
        isActive: boolean;
    }) => ReactNode);
    closable?: boolean;
}
declare function TabPane({}: TabPaneProps): JSX.Element;
export { TabPane };
