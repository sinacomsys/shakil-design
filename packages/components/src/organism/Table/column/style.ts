import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

const useStyles = createUseStyles(
  {
    column: {
      height: "100%",
      alignItems: "center",
      display: "flex",
    },
    wrapper: {
      height: 45,
      padding: 0,
    },
  },
  { theming, name: "table-column" },
);

export { useStyles };
