import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

export const useStyles = createUseStyles(
  (theme) => {
    return {
      "filter-icon-wrapper": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
      search: {
        borderRight: `1px solid ${theme.table?.divider}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        height: 24,
        width: "50%",
        "&--full-width": {
          width: "100%",
        },
      },

      selectAll: {
        borderRight: `1px solid ${theme.table?.divider}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 24,
        width: "50%",
        "& .shakil-custom-square-wrapper": {
          border: "1px solid #ffffff",
        },
        "& .shakil-indeterminate-checkbox-wrapper": {
          border: "1px solid #ffffff",
        },
        "& .shakil-custom-square-square--unchecked": {
          backgroundColor: theme.table?.headerCheckBox.unselectedSquare,
        },
        "& .shakil-custom-square-square--checked": {
          backgroundColor: theme.table?.headerCheckBox.squareSelected,
        },
      },
    };
  },
  { theming, name: "table-header" },
);
