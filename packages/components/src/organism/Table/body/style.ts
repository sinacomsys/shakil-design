import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

export const useStyles = createUseStyles(
  {
    table: {
      width: "100%",
      tableLayout: "fixed",
      borderCollapse: "collapse",
      "& tr,td,th": {
        padding: 0,
      },
    },
  },
  { theming, name: "body" },
);
