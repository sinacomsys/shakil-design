/// <reference types="react" />
import { VirtualItem } from "@tanstack/react-virtual";
import { TableProps } from "..";
interface TableBodyProps<T extends Record<string, any>> extends Pick<TableProps<T>, "coloums" | "rowKey" | "data"> {
    virtualPaddingTop: number;
    virtualPaddingBottom: number;
    virtualRows: VirtualItem[];
    noContent: React.ReactNode;
    searchIconWidth: number | string;
    dataList: T[];
    checkedRows: T[];
    handleCheckRow: (arg: {
        rowId: T[keyof T];
    }) => void;
    colWidth: number | string | undefined;
}
declare const TableBody: <T extends Record<string, any>>({ virtualPaddingTop, virtualRows, virtualPaddingBottom, noContent, searchIconWidth, dataList, coloums, rowKey, data, checkedRows, handleCheckRow, colWidth, }: TableBodyProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { TableBody };
