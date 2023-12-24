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
    backDrop: {
      "&::after": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "(0,0,0,.1)",
        opacity: 0.4,
        display: "block",
        top: 0,
        left: 0,
      },
    },
    spinner: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
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
