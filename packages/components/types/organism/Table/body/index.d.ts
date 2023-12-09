import { VirtualItem } from "@tanstack/react-virtual";
import { TableProps } from "..";
import { ReactElement, Ref } from "react";
import React from "react";
interface TableBodyProps<T extends Record<string, any>>
  extends Pick<TableProps<T>, "coloums" | "rowKey" | "data"> {
  virtualRows: VirtualItem[];
  noContent: React.ReactNode;
  searchIconWidth: number | string;
  dataList: T[];
  checkedRows: T[];
  colWidth: number | string | undefined;
  paddingTop: number;
  paddingBottom: number;
}
declare const TableBodyWrapper: <T extends Record<string, any>>(
  p: TableBodyProps<T> & {
    ref?: Ref<HTMLDivElement> | undefined;
  },
) => ReactElement;
export { TableBodyWrapper as TableBody };
