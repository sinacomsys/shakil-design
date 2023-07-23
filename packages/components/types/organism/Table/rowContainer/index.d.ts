import { ColumnType } from "../column";
interface RowContainer<T> {
    rowData: T;
    data: T[];
    columns: ColumnType<T>[];
    index: number;
    rowKey?: keyof T;
    isOnCheckedRowsAvailable: boolean;
    checkedRows: T[];
    handleCheckRow: (value: {
        rowId: T[keyof T];
    }) => void;
}
declare const RowContainer: <T extends Record<string, unknown>>({ rowData, columns, data, index: rowIndex, rowKey, isOnCheckedRowsAvailable, checkedRows, handleCheckRow, }: RowContainer<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { RowContainer };
