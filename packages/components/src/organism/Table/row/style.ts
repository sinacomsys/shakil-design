import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

interface StyleProps {
  isChecked: boolean;
  isSelected: boolean;
  isHoverd: boolean;
  isOnCheckedRowsAvailable: boolean;
}

export const useStyles = createUseStyles(
  ({ table }) => {
    return {
      row: {
        backgroundColor: ({ isChecked, isSelected, isHoverd }: StyleProps) => {
          return isChecked || isSelected
            ? table?.selectedRow
            : isHoverd
            ? table?.rowHover
            : "transparent";
        },
        cursor: ({ isOnCheckedRowsAvailable }: StyleProps) => {
          return isOnCheckedRowsAvailable ? "default" : "pointer";
        },
        borderBottom: `1px solid ${table?.rowBorder}`,
      },
    };
  },
  { theming, name: "row" },
);
