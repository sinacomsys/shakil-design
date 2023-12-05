import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

export const useStyles = createUseStyles(
  (theme) => {
    return {
      wrapper: {
        borderRadius: 3,
        border: `1px solid ${theme.checkbox?.borderSelected}`,
        position: "relative",
        backgroundColor: "transparent",
      },
      square: {
        position: "absolute",
        backgroundColor: theme.checkbox?.squareSelected,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
    };
  },
  {
    theming,
    name: "indeterminate-checkbox",
  },
);
