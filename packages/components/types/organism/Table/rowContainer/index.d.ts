import { VirtualItem } from "@tanstack/react-virtual";
import { ColumnType } from "../column";
import { LegacyRef } from "react";
export interface RowsProps<T> {
    rowData: T;
    columns: ColumnType<T>[];
    index: number;
    virtualItem: VirtualItem;
    lastItem?: LegacyRef<HTMLTableRowElement>;
}
declare const Rows: <T extends Record<string, unknown>>({ rowData, columns, index: rowIndex, virtualItem, lastItem, }: RowsProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { Rows };
