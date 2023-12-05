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
    };
  },
  { name: "row-container", theming },
);
