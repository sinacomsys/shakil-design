import { ReactNode } from "react";
export interface ColumnType<T, TIndex extends keyof T = keyof T> {
  dataIndex: TIndex;
  title: React.ReactNode;
  onPress?: () => void;
  className?: string;
  sorter?: (a: T, b: T) => number;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  sorterIconSize?: number;
  width?: number;
  align?: "start" | "center" | "end";
  renderFilter?: (data: { data: T[] }) => ReactNode;
  render?: (data: {
    value: T[TIndex];
    row: T;
    index: number;
    data: T[];
  }) => ReactNode;
  ellipsis?: boolean;
}
type ColumnProps<T> = Pick<
  ColumnType<T>,
  "title" | "dataIndex" | "sorter" | "style" | "align"
>;
declare const Column: <T extends object>({
  title,
  dataIndex,
  sorter,
  style,
  align,
}: ColumnProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { Column };
