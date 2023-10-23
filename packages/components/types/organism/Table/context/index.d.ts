/// <reference types="react" />
export type Order = undefined | "ascending" | "descending";
export type OrderBy = undefined | string | number | symbol;
interface TableContextProps {
    order: Order;
    orderBy: OrderBy;
    onOrderChange: (data: {
        dataIndex: OrderBy;
    }) => void;
    isAllRowsChecked: boolean;
    onCheckAllRows: () => void;
    onSelectRow: (value: unknown) => void;
    selectedRow: unknown;
    isOnCheckedRowsAvailable: boolean;
    isSelectSingleRowAvailable: boolean;
}
export declare const TableContext: import("react").Context<TableContextProps>;
export {};
