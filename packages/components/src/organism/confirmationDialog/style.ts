import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

export const useStyles = createUseStyles(
  (theme) => {
    return {
      dialog: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 5,
        backgroundColor: theme.color_primary_2,
        opacity: 0.22,
        backdropFilter: "blur(5px)",
      },
      dialogBox: {
        width: "25.875rem",
        padding: "2rem",
        height: "13.125rem",
        backgroundColor: theme.color_primary_2,
        opacity: 0.9,
        borderRadius: "1.25rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        textAlign: "center",
        color: "white",
        fontSize: "0.875rem",
        lineHeight: "1.125rem",
        position: "relative",
        textTransform: "capitalize",
      },
      dialogMessage: {
        color: "white",
        justifyContent: "center",
        fontSize: 18,
        fontWeight: 300,
      },
      buttons: {
        color: "white",
        display: "flex",
        justifyContent: "space-evenly",
      },
      buttonCancel: {
        backgroundColor: theme.color_primary_5,
        borderRadius: "0.75rem",
        padding: "0.5rem",
      },
      buttonOk: {
        backgroundColor: theme.color_primary_1,
        borderRadius: "0.75rem",
        padding: "0.5rem",
      },
      buttonClose: {
        position: "absolute",
        width: 16,
        right: "1.5rem",
        top: "1.5rem",
        cursor: "pointer",
        "*": {
          cursor: "pointer",
        },
      },
    };
  },
  { theming },
);
