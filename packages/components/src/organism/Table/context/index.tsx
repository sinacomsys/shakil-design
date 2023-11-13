import { createContext } from "react";

export type Order = undefined | "ascending" | "descending";
export type OrderBy = undefined | string | number | symbol;
export interface TableContextProps {
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
  };
}

export const TableContext = createContext<TableContextProps>({
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
});
