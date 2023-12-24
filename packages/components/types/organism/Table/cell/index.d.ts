import { ReactNode } from "react";
export interface CellProps
  extends Omit<React.TdHTMLAttributes<HTMLTableCellElement>, "align"> {
  children?: ReactNode;
  align?: "start" | "center" | "end";
  onPress?: () => void;
  ellipsis?: boolean;
}
declare const Cell: ({
  children,
  onPress,
  align,
  ellipsis,
  ...rest
}: CellProps) => import("react/jsx-dev-runtime").JSX.Element;
export { Cell };
