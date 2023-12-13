import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme";

export const useStyle = createUseStyles(
  {
    container: {
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      marginBottom: 10,
      "&--gregorian": {
        flexDirection: "row",
      },
    },
    day: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  { theming, name: "days-of-week" },
);
