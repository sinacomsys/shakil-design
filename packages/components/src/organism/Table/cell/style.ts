import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(
  {
    start: {
      textAlign: "start",
    },
    end: {
      textAlign: "end",
    },
    center: {
      textAlign: "center",
    },
  },
  { name: "table-cell" },
);
