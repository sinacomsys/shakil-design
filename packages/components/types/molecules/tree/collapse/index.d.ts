/// <reference types="react" />
import { OnSelectItemProps, TreeBasicType } from "..";
interface CollapseProps<T> {
    data: T;
    title?: string;
    children: React.ReactNode;
    level: number;
    backgroundColor: string;
    textColor: string;
    onLoadData?: (value: OnSelectItemProps<T>) => Promise<void>;
    onClick?: (value: OnSelectItemProps<T>) => void;
    activeItemId?: string;
    id: string;
    defaultOpen?: boolean;
}
declare const Collapse: <T extends TreeBasicType<T>>({ title, children, level, backgroundColor, textColor, data, onLoadData, onClick, activeItemId, id, defaultOpen, }: CollapseProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { Collapse };
