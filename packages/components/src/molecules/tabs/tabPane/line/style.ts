import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme";

export const useStyles = createUseStyles(
  {
    "title-wrapper": {
      height: 21,
      paddingInline: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 100,
      maxWidth: 150,
      position: "relative",
    },
    line: {
      height: 4,
    },
  },
  { theming, name: "line" },
);
