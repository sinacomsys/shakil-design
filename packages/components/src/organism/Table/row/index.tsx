import { useState, useContext } from "react";
import { useTheme } from "../../../theme";
import { TableContext } from "../context";
import { useStyles } from "./style";

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  isExpanded?: boolean;
  isChecked: boolean;
  isSelected: boolean;
  isOnCheckedRowsAvailable: boolean;
}

const Row = ({
  isChecked,
  isOnCheckedRowsAvailable,
  isSelected,
  ...rest
}: RowProps) => {
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
