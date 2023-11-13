/// <reference types="react" />
export type Order = undefined | "ascending" | "descending";
export type OrderBy = undefined | string | number | symbol;
export interface TableContextProps {
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
    isOverflowed: boolean;
    testid?: {
        filterBarIcon?: string;
        clearFiltersIcon?: string;
        filterBar?: string;
        header?: string;
        body?: string;
    };
}
export declare const TableContext: import("react").Context<TableContextProps>;
