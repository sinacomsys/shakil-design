import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme";

export const useStyle = createUseStyles(
  {
    manualInput: { display: "flex", marginLeft: 75, marginTop: 20 },
    expand: {
      marginInlineStart: 14,
    },
    wrapper: {
      width: 320,
      borderRadius: 10,
      backgroundColor: "#575757",
      paddingBottom: 12,
    },
    "footer-icons": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingInline: 14,
    },
    "go-today": {
      marginInlineStart: 118,
    },
  },
  { theming, name: "date-picker-panel" },
);
