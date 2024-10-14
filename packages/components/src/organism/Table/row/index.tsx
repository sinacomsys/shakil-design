import { LegacyRef, useState } from "react";
import { useStyles } from "./style";
import { RowContainerProps } from "../rowContainer";
import { useMyTableContext } from "../context";
import { VirtualItem } from "@tanstack/react-virtual";

interface RowProps<T>
  extends React.HTMLAttributes<HTMLTableRowElement>,
    Pick<RowContainerProps<T>, "rowData"> {
  children?: React.ReactNode;
  isExpanded?: boolean;
  isChecked: boolean;
  isSelected: boolean;
  rowIndex: number;
  virtualItem: VirtualItem;
  lastItem?: LegacyRef<HTMLTableRowElement>;
}

const Row = <T extends Record<string, unknown>>({
  isChecked,
  isSelected,
  rowIndex,
  rowData,
  virtualItem,
  onClick,
  lastItem,
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
      ref={lastItem}
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
        mode === "single" && rowKey && onSelectRow?.(rowData[rowKey]);
        mode === "multiple" && rowKey && onDeselectCheckedRows(rowData[rowKey]);
      }}
      className={classes["row"]}
    />
  );
};

export { Row };
