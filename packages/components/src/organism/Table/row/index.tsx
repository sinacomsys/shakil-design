import { useState } from "react";
import { useStyles } from "./style";
import { RowsProps } from "../rowContainer";
import { useMyTableContext } from "../context";
import { VirtualItem } from "@tanstack/react-virtual";

interface RowProps<T>
  extends React.HTMLAttributes<HTMLTableRowElement>,
    Pick<RowsProps<T>, "rowData"> {
  children?: React.ReactNode;
  isExpanded?: boolean;
  isChecked: boolean;
  isSelected: boolean;
  rowIndex: number;
  virtualItem: VirtualItem;
}

const Row = <T extends Record<string, unknown>>({
  isChecked,
  isSelected,
  rowIndex,
  rowData,
  virtualItem,
  onClick,
  ...rest
}: RowProps<T>) => {
  const { onRow, rowKey, mode, onSelectRow, onDeselectCheckedRows } =
    useMyTableContext<T>();
  const [isHoverd, setIsHovered] = useState(false);
  const classes = useStyles({
    isChecked,
    isHoverd,
    isOnCheckedRowsAvailable: mode === "multiple",
    isSelected,
  });

  return (
    <tr
      {...rest}
      {...onRow?.(rowData, rowIndex)}
      data-testid={rowKey ? `row-${String(rowData[rowKey])}` : rowIndex}
      onMouseEnter={(e) => {
        onRow?.(rowData, rowIndex).onMouseEnter?.(e);
        setIsHovered(true);
      }}
      onMouseLeave={(e) => {
        onRow?.(rowData, rowIndex).onMouseLeave?.(e);
        setIsHovered(false);
      }}
      onClick={(e) => {
        onRow?.(rowData, rowIndex).onClick?.(e);
        onSelectRow?.(rowData);
        onDeselectCheckedRows(rowData);
      }}
      className={classes["row"]}
    />
  );
};

export { Row };
