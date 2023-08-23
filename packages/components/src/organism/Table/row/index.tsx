import { useState } from "react";
import { useTheme } from "../../../theme/context";
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
  const { table: { selectedRow, rowHover } = {} } = useTheme();
  return (
    <tr
      {...rest}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      style={{
        backgroundColor:
          isChecked || isSelected
            ? selectedRow
            : isHoverd
            ? rowHover
            : "transparent",
        height: 32,
        borderBottom: ".5px solid #C1C0C0",
        cursor: isOnCheckedRowsAvailable ? "default" : "pointer",
      }}
    />
  );
};

export { Row };
