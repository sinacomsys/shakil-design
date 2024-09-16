import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme";

export const useStyles = createUseStyles(
  {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },
  },
  { theming, name: "end-of-list" },
);
