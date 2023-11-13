import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme";

export const useStyle = createUseStyles(
  {
    expandIconWrap: {
      marginInlineStart: 14,
      display: "flex",
      flexDirection: "column",
      "&--more-choices": {
        marginBottom: 5,
        justifyContent: "center",
      },
    },
    manualInput: { display: "flex", marginLeft: 75, marginTop: 20 },
    matrixContainer: {
      transition: "0.3s",
      overflow: "hidden",
    },
    panel: {
      width: 320,
      borderRadius: 10,
      backgroundColor: "#575757",
      paddingBottom: 20,
    },
    matrix: {
      paddingInline: 22,
    },
  },
  { theming, name: "date-picker-panel" },
);
