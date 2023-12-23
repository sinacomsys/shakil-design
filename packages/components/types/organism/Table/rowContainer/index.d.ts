import { VirtualItem } from "@tanstack/react-virtual";
import { ColumnType } from "../column";
export interface RowsProps<T> {
  rowData: T;
  columns: ColumnType<T>[];
  index: number;
  virtualItem: VirtualItem;
}
declare const Rows: <T extends Record<string, unknown>>({
  rowData,
  columns,
  index: rowIndex,
  virtualItem,
}: RowsProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { Rows };
