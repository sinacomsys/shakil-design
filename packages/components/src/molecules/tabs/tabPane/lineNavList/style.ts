import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme";

export const useStyles = createUseStyles(
  {
    wrapper: { height: 25, display: "flex" },
  },
  { theming, name: "line-nav" },
);
