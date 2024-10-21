import { TableCommonType } from "..";
import { ReactElement, Ref } from "react";
import React from "react";
interface TableBodyProps<T extends Record<string, any>>
  extends Pick<TableCommonType<T>, "coloums" | "endOfList" | "isLoadingMore"> {
  noContent: React.ReactNode;
  searchIconWidth: number | string;
  dataList: (T | "endOfList")[];
  colWidth: number | string | undefined;
  width: number;
}
declare const TableBodyWrapper: <T extends Record<string, any>>(
  p: TableBodyProps<T> & {
    ref?: Ref<HTMLDivElement> | undefined;
  },
) => ReactElement;
export { TableBodyWrapper as TableBody };
