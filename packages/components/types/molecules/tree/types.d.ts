import React from "react";
export interface TreeBasicType<T> {
    title: string;
    id: string;
    parentId?: string | null;
    children?: T[];
    statusColor?: string;
    renderItemContent?: (args: {
        data: T;
        level: number;
    }) => React.ReactNode;
    backgroundColor?: string;
    renderTitle?: (args: {
        data: T;
        level: number;
    }) => React.ReactNode;
}
export type OnSelectItemProps<T> = {
    data: T;
    level: number;
};
export type OnLoadData<T> = (value: OnSelectItemProps<T>) => Promise<void>;
export interface TreeProps<T extends TreeBasicType<T>> {
    data: T[];
    onSelectItem?: (value: OnSelectItemProps<T>) => void;
    onLoadData?: (value: OnSelectItemProps<T>) => Promise<void>;
    activeItemId?: string;
    defaultSeletedItem?: string;
}
export interface ItemProps<T extends TreeBasicType<T>> {
    data: T;
    title?: string;
    arrowDirection?: "up" | "down";
    level: number;
    isActive?: boolean;
    fontSize?: number;
    isLoading: boolean;
    onClick?: () => void;
}
export interface CollapseProps<T extends TreeBasicType<T>> extends Pick<ItemProps<T>, "title" | "level"> {
    data: T;
    children: React.ReactNode;
    onLoadData?: (value: OnSelectItemProps<T>) => Promise<void>;
    onClick?: (value: OnSelectItemProps<T>) => void;
    activeItemId?: string;
    id: string;
    defaultOpen?: boolean;
}
