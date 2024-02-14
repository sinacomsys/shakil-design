import { VirtualItem } from "@tanstack/react-virtual";
import { ColumnType } from "../column";
import { LegacyRef } from "react";
export interface RowContainerProps<T> {
  rowData: T;
  columns: ColumnType<T>[];
  index: number;
  virtualItem: VirtualItem;
  lastItem?: LegacyRef<HTMLTableRowElement>;
}
declare const RowContainer: <T extends Record<string, unknown>>({
  rowData,
  columns,
  index: rowIndex,
  virtualItem,
  lastItem,
}: RowContainerProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { RowContainer };
