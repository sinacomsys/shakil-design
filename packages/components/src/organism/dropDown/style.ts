import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

export const useStyles = createUseStyles(
  (theme) => {
    return {
      overlay: {
        backgroundColor: "white",
        height: "auto",
        borderRadius: 4,
        boxShadow: "0px 3px 20px rgba(0, 0, 0, 0.16)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        width: 120,
      },
      item: {
        height: 27,
        paddingInlineStart: 23,
        backgroundColor: theme.color_white,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: theme.color_primary_7,
        },
      },
      itemSelected: {
        backgroundColor: theme.color_primary_6,
      },
    };
  },
  { theming },
);
