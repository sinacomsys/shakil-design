import { createUseStyles } from "react-jss";
import { theming } from "../../theme/context";
const useStyles = createUseStyles(
  (theme) => {
    return {
      searchBox: {
        border: `solid ${theme.color_primary_2} 1.5px`,
        outline: "none",
        backgroundColor: "white",
        color: theme.color_primary_2,
        width: "100%",
        height: "2.5rem",
        borderRadius: "0.4375rem",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        padding: "0.6rem",
        "&::placeholder": {
          textAlign: "center",
          color: theme.color_primary_2,
        },
      },
    };
  },
  { theming },
);

export { useStyles };
