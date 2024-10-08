import { ReactNode } from "react";
export interface CellProps
  extends Omit<React.TdHTMLAttributes<HTMLTableCellElement>, "align"> {
  children?: ReactNode;
}
declare const Cell: ({
  children,
  ...rest
}: CellProps) => import("react/jsx-runtime").JSX.Element;
export { Cell };
