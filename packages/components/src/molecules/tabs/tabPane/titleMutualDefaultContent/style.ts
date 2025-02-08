import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme";

export const useStyles = createUseStyles(
  ({ primary }) => {
    return {
      "tooltip-content": {
        padding: 6,
        borderRadius: 4,
        backgroundColor: primary,
      },
      "dummy-anchor": {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      },
    };
  },
  { theming, name: "tabs" },
);
