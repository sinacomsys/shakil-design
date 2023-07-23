import { ReactNode, useContext } from "react";
import { DEFAULT_ALIGN } from "..";
import { BaseIcon, Text } from "../../../atoms";
import { useTheme } from "../../../theme/context";
import { pxToVh } from "@sina-base/utils";
import { TableContext } from "../context";

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
}

type ColumnProps<T> = Pick<
  ColumnType<T>,
  "title" | "dataIndex" | "sorter" | "style" | "align"
>;

const Column = <T extends object>({
  title,
  dataIndex,
  sorter,
  style,
  align = DEFAULT_ALIGN,
}: ColumnProps<T>) => {
  const { color_white, color_secondary_1 } = useTheme();
  const { onOrderChange, order, orderBy } = useContext(TableContext);
  const isAscending = orderBy === dataIndex && order === "ascending";
  const isDescending = orderBy === dataIndex && order === "descending";

  const onSort = () => {
    if (sorter) {
      onOrderChange({ dataIndex });
    }
  };

  return (
    <th style={{ ...style, height: `${pxToVh(45)}vh`, padding: 0 }}>
      <div
        style={{
          height: "100%",
          alignItems: "center",
          display: "flex",
          cursor: sorter ? "pointer" : "default",
          justifyContent:
            align === "center"
              ? "center"
              : align === "start"
              ? "flex-start"
              : "flex-end",
        }}
        onClick={onSort}
      >
        {typeof title !== "object" ? (
          <Text size={`${pxToVh(16)}vh`} theme="Regular" color={color_white}>
            {title}
          </Text>
        ) : (
          title
        )}
        {sorter ? (
          isDescending ? (
            <BaseIcon
              size={{ width: 9, height: 20 }}
              color={color_secondary_1}
              name={"Table-_-Sort-Icon_A-to-Z"}
            />
          ) : isAscending ? (
            <BaseIcon
              size={{ width: 9, height: 20 }}
              color={color_secondary_1}
              name="Table-_-Sort-Icon_Z-to-A"
            />
          ) : (
            <BaseIcon
              size={{ width: 9, height: 20 }}
              color={color_white}
              name="Table-_-Sort-Icon_OFF"
            />
          )
        ) : null}
      </div>
    </th>
  );
};

export { Column };
