import { Virtualizer } from "@tanstack/react-virtual";
import { createContext, useContext } from "react";

export type Order = undefined | "ascending" | "descending";
export type OrderBy = undefined | string | number | symbol;
export interface TableContextProps<T> {
  order: Order;
  orderBy: OrderBy;
  onOrderChange: (data: { dataIndex: OrderBy }) => void;
  isAllRowsChecked: boolean;
  onCheckAllRows: () => void;
  onSelectRow: (value: unknown) => void;
  selectedRow: unknown;
  isOnCheckedRowsAvailable: boolean;
  isSelectSingleRowAvailable: boolean;
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
}

export const TableContext = createContext<TableContextProps<any>>({
  order: undefined,
  orderBy: undefined,
  onOrderChange: () => ({}),
  isAllRowsChecked: false,
  onCheckAllRows: () => ({}),
  onSelectRow: () => ({}),
  selectedRow: undefined,
  isOnCheckedRowsAvailable: false,
  isSelectSingleRowAvailable: false,
  isOverflowed: false,
  testid: undefined,
  onRow: () => ({}),
  virtualizer: undefined,
  handleCheckRow: () => {},
});

export function useMyTableContext<T>() {
  return useContext(TableContext) as TableContextProps<T>;
}
