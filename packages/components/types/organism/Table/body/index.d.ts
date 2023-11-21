/// <reference types="react" />
import { VirtualItem } from "@tanstack/react-virtual";
import { TableProps } from "..";
interface TableBodyProps<T extends Record<string, any>> extends Pick<TableProps<T>, "coloums" | "rowKey" | "data"> {
    virtualRows: VirtualItem[];
    noContent: React.ReactNode;
    searchIconWidth: number | string;
    dataList: T[];
    checkedRows: T[];
    handleCheckRow: (arg: {
        rowId: T[keyof T];
    }) => void;
    colWidth: number | string | undefined;
    paddingTop: number;
    paddingBottom: number;
}
declare const TableBody: <T extends Record<string, any>>({ virtualRows, noContent, searchIconWidth, dataList, coloums, rowKey, data, checkedRows, handleCheckRow, colWidth, paddingBottom, paddingTop, }: TableBodyProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { TableBody };
