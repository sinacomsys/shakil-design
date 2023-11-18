/// <reference types="react" />
export type Order = undefined | "ascending" | "descending";
export type OrderBy = undefined | string | number | symbol;
export interface TableContextProps<T> {
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
    onRow?: (data: T, index?: number) => React.HTMLAttributes<any> | React.TdHTMLAttributes<any>;
}
export declare const TableContext: import("react").Context<TableContextProps<any>>;
export declare function useMyTableContext<T>(): TableContextProps<T>;
