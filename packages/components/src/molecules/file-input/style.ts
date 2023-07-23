import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

export const useStyle = createUseStyles(
  (theme) => {
    return {
      fileInput: {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
      },
      fileChooser: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "75%",
        cursor: "pointer",
        backgroundColor: "white",
        color: theme.color_primary_2,
        border: `dotted ${theme.color_primary_2} 2px`,
        padding: "0.7rem",
        borderRadius: "0.4375rem",
        outline: "none",
        columnGap: "2%",
        fontSize: "1rem",
        lineHeight: "1.25rem",
        height: "2.5rem",
      },
    };
  },
  { theming },
);
