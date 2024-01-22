import { createUseStyles } from "react-jss";

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
  { name: "days-of-week" },
);
