import { ColumnType } from "./column";
import { TableContextProps } from "./context";
import React from "react";
export declare const SEARCH_ICON = 32;
export declare const ROW_SELECTION = 62;
export declare const SCROLL_BAR = 8;
export declare const DEFAULT_ALIGN = "center";
export interface TableCommonType<T>
  extends Pick<TableContextProps<T>, "testid" | "onRow"> {
  data?: T[];
  rowKey?: keyof T;
  headerStyle?: React.CSSProperties;
  headerClassName?: string;
  searchBarClassName?: string;
  searchBarStyle?: React.CSSProperties;
  searchBarToggle?: () => void;
  filterIcon?: React.ReactNode;
  clearFilterIcon?: React.ReactNode;
  isLoading?: boolean;
  height: number;
  coloums: ColumnType<T>[];
  noContent?: React.ReactNode;
  overScan?: number;
}
export interface TablePropsWithMultipleSelectRows<T>
  extends TableCommonType<T> {
  selectedRows?: T[];
  onSelectRow?: (value: T[]) => void;
  mode?: "multiple";
}
export interface TablePropsWithSingleSelectRow<T> extends TableCommonType<T> {
  selectedRows?: T;
  onSelectRow?: (value: T) => void;
  mode?: "single";
}
declare function Table<T extends Record<string, any>>(
  props: TablePropsWithSingleSelectRow<T>,
): JSX.Element;
declare function Table<T extends Record<string, any>>(
  props: TablePropsWithMultipleSelectRows<T>,
): JSX.Element;
export type { ColumnType };
export { Table };
