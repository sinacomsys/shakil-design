import { VirtualItem } from "@tanstack/react-virtual";
import { ColumnType } from "../column";
export interface RowsProps<T> {
  rowData: T;
  data: T[];
  columns: ColumnType<T>[];
  index: number;
  rowKey?: keyof T;
  checkedRows: T[];
  virtualItem: VirtualItem;
}
declare const Rows: <T extends Record<string, unknown>>({
  rowData,
  columns,
  data,
  index: rowIndex,
  rowKey,
  checkedRows,
  virtualItem,
}: RowsProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { Rows };
