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
  const { color_secondary_3, color_primary_7 } = useTheme();
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
        backgroundColor: isChecked
          ? color_secondary_3
          : isSelected
          ? color_secondary_3
          : isHoverd
          ? color_primary_7
          : "transparent",
        height: 32,
        borderBottom: ".5px solid #C1C0C0",
        cursor: isOnCheckedRowsAvailable ? "default" : "pointer",
      }}
    />
  );
};

export { Row };
