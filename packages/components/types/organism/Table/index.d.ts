/// <reference types="react" />
import { ColumnType } from "./column";
export declare const SEARCH_ICON = 32;
export declare const ROW_SELECTION = 62;
export declare const SCROLL_BAR = 8;
export declare const DEFAULT_ALIGN = "center";
export interface TableProps<T> {
    data?: T[];
    rowKey?: keyof T;
    onCheckedRows?: (value: T[]) => void;
    headerStyle?: React.CSSProperties;
    headerClassName?: string;
    searchBarClassName?: string;
    searchBarStyle?: React.CSSProperties;
    searchBarToggle?: () => void;
    filterIcon?: React.ReactNode;
    clearFilterIcon?: React.ReactNode;
    isLoading?: boolean;
    onSelectRow?: (value: T) => void;
    height: number;
    coloums: ColumnType<T>[];
    noContent?: React.ReactNode;
}
declare const Table: <T extends Record<string, any>>({ data, onCheckedRows, rowKey, headerStyle, headerClassName, searchBarClassName, searchBarToggle, searchBarStyle, filterIcon, clearFilterIcon, isLoading, onSelectRow, height, coloums, noContent, }: TableProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export type { ColumnType };
export { Table };
