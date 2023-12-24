import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

export const useStyles = createUseStyles(
  {
    table: {
      tableLayout: "fixed",
      borderCollapse: "collapse",
      "& tr,td,th": {
        padding: 0,
      },
    },
  },
  { theming, name: "table" },
);
