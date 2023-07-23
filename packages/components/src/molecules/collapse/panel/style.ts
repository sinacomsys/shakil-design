import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

const useStyles = createUseStyles(
  (theme) => {
    return {
      titleWrapper: {
        display: "flex",
        height: 30,
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.color_primary_7,
        borderRadius: 7,
      },
      title: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    };
  },
  { theming },
);

export { useStyles };
