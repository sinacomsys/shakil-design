import { FC } from "react";
export interface NodeButtonProps {
    text: string;
    clickHandler: () => void;
    settingClickHandler?: () => void;
    isOpen?: boolean;
}
declare const NodeButton: FC<NodeButtonProps>;
export { NodeButton };
