/// <reference types="react" />
import { Virtualizer } from "@tanstack/react-virtual";
export type Order = undefined | "ascending" | "descending";
type TableRowSelectionMode = "single" | "multiple";
export type OrderBy = undefined | string | number | symbol;
export interface TableContextProps<T> {
  order: Order;
  orderBy: OrderBy;
  onOrderChange: (data: { dataIndex: OrderBy }) => void;
  isAllRowsChecked: boolean;
  onCheckAllRows: () => void;
  onSelectRow: (value: T[keyof T]) => void;
  selectedRow: T[keyof T];
  isOverflowed: boolean;
  testid?: {
    filterBarIcon?: string;
    clearFiltersIcon?: string;
    filterBar?: string;
    header?: string;
    body?: string;
    selectAll?: string;
  };
  onRow?: (
    data: T,
    index?: number,
  ) => React.HTMLAttributes<any> | React.TdHTMLAttributes<any>;
  virtualizer: Virtualizer<HTMLDivElement, Element> | undefined;
  handleCheckRow: (arg: { rowId: T[keyof T] }) => void;
  checkedRows: T[keyof T][];
  rowKey: keyof T | undefined;
  data: T[];
  mode?: TableRowSelectionMode;
  onDeselectCheckedRows: (arg: T[keyof T]) => void;
  onLoadNextPage?: () => void;
  expandedRows?: T[keyof T][];
}
export declare const TableContext: import("react").Context<
  TableContextProps<any>
>;
export declare function useMyTableContext<T>(): TableContextProps<T>;
export {};
