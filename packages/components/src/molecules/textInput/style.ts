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
        paddingInline: 10,
        paddingBlock: 10,
        borderRadius: 7,
        outline: "none",
        height: 40,
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
