import { useState } from "react";
import { useStyles } from "./style";
import { RowsProps } from "../rowContainer";

interface RowProps<T>
  extends React.HTMLAttributes<HTMLTableRowElement>,
    Pick<RowsProps<T>, "rowKey" | "rowData"> {
  children?: React.ReactNode;
  isExpanded?: boolean;
  isChecked: boolean;
  isSelected: boolean;
  isOnCheckedRowsAvailable: boolean;
  rowIndex: number;
}

const Row = <T extends Record<string, unknown>>({
  isChecked,
  isOnCheckedRowsAvailable,
  isSelected,
  rowKey,
  rowIndex,
  rowData,
  ...rest
}: RowProps<T>) => {
  const [isHoverd, setIsHovered] = useState(false);
  const classes = useStyles({
    isChecked,
    isHoverd,
    isOnCheckedRowsAvailable,
    isSelected,
  });

  return (
    <tr
      {...rest}
      data-testid={rowKey ? `row-${String(rowData[rowKey])}` : rowIndex}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className={classes["row"]}
    />
  );
};

export { Row };
