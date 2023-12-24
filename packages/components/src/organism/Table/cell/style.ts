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
    ellipsis: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      wordBreak: "keep-all",
      overflowWrap: "break-word",
    },
  },
  { name: "table-cell" },
);
