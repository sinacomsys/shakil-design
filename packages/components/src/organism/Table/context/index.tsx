import { createContext } from "react";

export type Order = undefined | "ascending" | "descending";
export type OrderBy = undefined | string | number | symbol;
interface TableContextProps {
  order: Order;
  orderBy: OrderBy;
  onOrderChange: (data: { dataIndex: OrderBy }) => void;
  isAllRowsChecked: boolean;
  onCheckAllRows: () => void;
  onSelectRow: (value: unknown) => void;
  selectedRow: unknown;
  isOnCheckedRowsAvailable: boolean;
  isSelectSingleRowAvailable: boolean;
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
});
