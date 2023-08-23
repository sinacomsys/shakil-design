import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

export const useStyles = createUseStyles(
  (theme) => {
    return {
      item: {
        height: 27,
        paddingInlineStart: 23,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: theme.select?.hover,
        },
      },
      itemSelected: {
        backgroundColor: theme.select?.selected,
      },
    };
  },
  { theming },
);
