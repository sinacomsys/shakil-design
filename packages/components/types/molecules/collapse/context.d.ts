/// <reference types="react" />
interface CollapseContextProps {
    onClickPanel: (value: string) => void;
    openedPanels: string[];
    defaultOpen: boolean;
    handleDefaultOpen: (value: string) => void;
}
declare const CollapseContext: import("react").Context<CollapseContextProps>;
export { CollapseContext };
