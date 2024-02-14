import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

export const useStyles = createUseStyles(
  (theme) => {
    return {
      cell: {
        display: "flex",
        justifyContent: "center",
        height: 32,
        alignItems: "center",
      },
      selected: {
        position: "relative",
        height: "100%",
        borderInlineStart: `5px solid ${theme?.table?.selectedRowBookmark}`,
      },
      "check-box": {
        height: "100%",
        display: "flex",
        alignItems: "center",
        width: "50%",
        justifyContent: "center",
      },
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
      center: {
        justifyContent: "center",
      },
      ellipsis: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        wordBreak: "keep-all",
        overflowWrap: "break-word",
      },
    };
  },
  { name: "row-container", theming },
);
