import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";
import { pxToVhString, pxToVwString } from "@shakil-design/utils";
// import { pxToVhString, pxToVwString } from "@shakil-design/utils";

export const useStyles = createUseStyles(
  (theme) => {
    return {
      "filter-icon-wrapper": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      search: {
        borderRight: `1px solid ${theme.table?.divider}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        width: pxToVwString(30),
        height: pxToVhString(24),
      },

      selectAll: {
        borderRight: `1px solid ${theme.table?.divider}`,
        width: 31,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 24,
      },
      "@font-face": {},
    };
  },
  { theming, name: "table-header" },
);
