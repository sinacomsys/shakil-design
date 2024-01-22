import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(
  {
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
  { name: "panel-template" },
);
