import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme";

export const useStyles = createUseStyles(
  {
    wrapper: { height: 33, display: "flex" },
  },
  { theming, name: "card-nav" },
);
