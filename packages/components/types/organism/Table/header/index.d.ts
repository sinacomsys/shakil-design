import React from "react";
import { ColumnType } from "../column";
interface HeaderProps<T extends object> {
  onToggleSearchBar?: () => void;
  isSearchVisible: boolean;
  filterIcon?: React.ReactNode;
  columns: ColumnType<T>[];
  isIndeterminate: boolean;
  isSearchAvailable: boolean;
}
declare const Header: <T extends object>({
  onToggleSearchBar,
  filterIcon,
  columns,
  isIndeterminate,
  isSearchAvailable,
}: HeaderProps<T>) => import("react/jsx-runtime").JSX.Element;
export { Header };
