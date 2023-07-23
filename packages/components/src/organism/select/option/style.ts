import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

export const useStyles = createUseStyles(
  (theme) => {
    return {
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
