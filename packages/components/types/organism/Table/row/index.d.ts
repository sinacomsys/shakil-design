/// <reference types="react" />
import { RowsProps } from "../rowContainer";
interface RowProps<T> extends React.HTMLAttributes<HTMLTableRowElement>, Pick<RowsProps<T>, "rowKey" | "rowData"> {
    children?: React.ReactNode;
    isExpanded?: boolean;
    isChecked: boolean;
    isSelected: boolean;
    isOnCheckedRowsAvailable: boolean;
    rowIndex: number;
}
declare const Row: <T extends Record<string, unknown>>({ isChecked, isOnCheckedRowsAvailable, isSelected, rowKey, rowIndex, rowData, ...rest }: RowProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { Row };
