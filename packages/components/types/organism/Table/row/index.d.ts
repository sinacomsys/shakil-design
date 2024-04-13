import { LegacyRef } from "react";
import { RowContainerProps } from "../rowContainer";
import { VirtualItem } from "@tanstack/react-virtual";
interface RowProps<T> extends React.HTMLAttributes<HTMLTableRowElement>, Pick<RowContainerProps<T>, "rowData"> {
    children?: React.ReactNode;
    isExpanded?: boolean;
    isChecked: boolean;
    isSelected: boolean;
    rowIndex: number;
    virtualItem: VirtualItem;
    lastItem?: LegacyRef<HTMLTableRowElement>;
}
declare const Row: <T extends Record<string, unknown>>({ isChecked, isSelected, rowIndex, rowData, virtualItem, onClick, lastItem, ...rest }: RowProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { Row };
