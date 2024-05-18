import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

export const useStyles = createUseStyles(
  {
    table: {
      borderCollapse: "collapse",
      "& tr,td,th": {
        padding: 0,
        fontWeight: "unset",
      },
    },
    spinner: {
      "&--overlay": {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "#ffffff",
        opacity: "0.7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
      },
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    container: ({ height }: { height: number }) => {
      return {
        width: "100%",
        overflowY: "auto",
        position: "relative",
        height: height,
      };
    },
    "table-body": {
      flex: 1,
      overflowY: "auto",
    },
  },
  { theming, name: "table" },
);
