import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

export const useStyles = createUseStyles(
  {
    wrapper: {
      tableLayout: "fixed",
      borderCollapse: "collapse",
      "& tr,td,th": {
        padding: 0,
      },
    },
  },
  { theming, name: "body" },
);
