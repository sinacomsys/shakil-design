import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

const useStyles = createUseStyles(
  (theme) => {
    return {
      textInput: {
        width: "100%",
        backgroundColor: theme.color_primary_7,
        color: theme.color_primary_1,
        border: "none",
        outline: "none",
      },
      disabled: {
        backgroundColor: theme.color_background,
        cursor: "not-allowed",
        color: theme.color_gray_4,
      },
    };
  },
  { theming },
);

export { useStyles };
