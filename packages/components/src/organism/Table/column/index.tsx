import { ReactNode, useContext } from "react";
import { DEFAULT_ALIGN } from "..";
import { BaseIcon, Text } from "../../../atoms";
import { useTheme } from "../../../theme";
import { pxToVh } from "@shakil-design/utils";
import { TableContext } from "../context";
import { useStyles } from "./style";

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
  const { table: { sortArrow } = {} } = useTheme();
  const { onOrderChange, order, orderBy } = useContext(TableContext);
  const isAscending = orderBy === dataIndex && order === "ascending";
  const isDescending = orderBy === dataIndex && order === "descending";

  const onSort = () => {
    if (sorter) {
      onOrderChange({ dataIndex });
    }
  };

  const classes = useStyles();

  return (
    <th className={classes["wrapper"]} style={{ ...style }}>
      <div
        className={classes["column"]}
        style={{
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
          <Text size={16} theme="Regular" color={"white"}>
            {title}
          </Text>
        ) : (
          title
        )}
        {sorter ? (
          isDescending ? (
            <BaseIcon
              size={{ width: 9, height: 20 }}
              color={sortArrow}
              name={"Table-_-Sort-Icon_A-to-Z"}
            />
          ) : isAscending ? (
            <BaseIcon
              size={{ width: 9, height: 20 }}
              color={sortArrow}
              name="Table-_-Sort-Icon_Z-to-A"
            />
          ) : (
            <BaseIcon
              size={{ width: 9, height: 20 }}
              color={"white"}
              name="Table-_-Sort-Icon_OFF"
            />
          )
        ) : null}
      </div>
    </th>
  );
};

export { Column };
