import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme";

export const useStyle = createUseStyles(
  {
    manualInput: {
      display: "flex",
      marginLeft: 75,
      marginTop: 20,
      position: "relative",
    },
    expand: {
      marginInlineStart: 14,
    },

    overlay: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      opacity: 0.3,
      backgroundColor: "#575757",
    },
  },
  { theming, name: "date-picker-panel" },
);
