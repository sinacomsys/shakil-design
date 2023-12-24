import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

export const useStyles = createUseStyles(
  (theme) => {
    return {
      selected: {
        position: "relative",
        height: "100%",
        borderInlineStart: `5px solid ${theme?.table?.selectedRowBookmark}`,
      },
      "check-box": {
        paddingInlineStart: 8,
        height: "100%",
        display: "flex",
        alignItems: "center",
      },
    };
  },
  { name: "row-container", theming },
);
