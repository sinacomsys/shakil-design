import { ColumnType } from "../column";
interface RowsProps<T> {
    rowData: T;
    data: T[];
    columns: ColumnType<T>[];
    index: number;
    rowKey?: keyof T;
    checkedRows: T[];
    handleCheckRow: (value: {
        rowId: T[keyof T];
    }) => void;
}
declare const Rows: <T extends Record<string, unknown>>({ rowData, columns, data, index: rowIndex, rowKey, checkedRows, handleCheckRow, }: RowsProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { Rows };
