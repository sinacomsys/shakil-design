import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

const useStyles = createUseStyles(
  {
    column: {
      height: "100%",
      alignItems: "center",
      display: "flex",
    },
  },
  { theming, name: "table-column" },
);

export { useStyles };
