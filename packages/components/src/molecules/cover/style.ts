import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

export const useStyle = createUseStyles(
  (theme) => {
    return {
      cover: {
        backgroundColor: theme.color_background,
        opacity: "80%",
        width: "100%",
        height: "80%",
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
        fontSize: "1.375rem",
        lineHeight: "1.125rem",
      },
      title: {
        display: "flex",
        alignItems: "center",
        columnGap: 10,
      },
    };
  },
  { theming },
);
