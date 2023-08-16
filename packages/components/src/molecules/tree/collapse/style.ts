import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

export const useStyles = createUseStyles(
  ({ color_primary_2 }) => {
    return {
      dots: {
        position: "absolute",
        top: 0,
        left: 11,
        width: 0,
        borderLeft: `2px dotted ${color_primary_2}`,
      },
      animationWrapper: {
        position: "relative",
        overflow: "hidden",
        height: 0,
      },
    };
  },
  { theming },
);
