import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

export const useStyles = createUseStyles(
  (theme) => {
    return {
      "filter-icon-wrapper": {
        display: "flex",
        alignItems: "center",
        width: "100%",
      },
      search: {
        borderRight: `1px solid ${theme.table?.divider}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        height: 24,
        flex: 1,
      },

      selectAll: {
        flex: 1,
        borderRight: `2px solid ${theme.table?.divider}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 24,
      },
    };
  },
  { theming, name: "table-header" },
);
