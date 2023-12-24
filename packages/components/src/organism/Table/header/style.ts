import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

export const useStyles = createUseStyles(
  (theme) => {
    return {
      "filter-icon-wrapper": {
        display: "flex",
        alignItems: "center",
      },
      search: {
        borderRight: `1px solid ${theme.table?.divider}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        height: 24,
        paddingInline: 8,
      },

      selectAll: {
        borderRight: `1px solid ${theme.table?.divider}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 24,
        paddingInline: 8,
      },
    };
  },
  { theming, name: "table-header" },
);
