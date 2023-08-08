import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

export const useStyles = createUseStyles(
  (theme) => {
    return {
      table: {
        width: "100%",
        borderCollapse: "collapse",
        "& tr,td,th": {
          padding: 0,
        },
      },
      backDrop: {
        "&::after": {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: theme.color_primary_5,
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
    };
  },
  { theming, name: "table" },
);
