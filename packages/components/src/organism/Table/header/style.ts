import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

export const useStyles = createUseStyles(
  (theme) => {
    return {
      search: {
        borderRight: `1px solid ${theme.color_primary_6}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        width: 31,
      },

      selectAll: {
        borderRight: `1px solid ${theme.color_primary_6}`,
        width: 31,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 24,
      },
    };
  },
  { theming },
);
