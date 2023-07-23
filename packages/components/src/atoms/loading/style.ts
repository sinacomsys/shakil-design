import { createUseStyles } from "react-jss";
import { theming } from "../../theme/context";

const afterStyle = {
  opacity: 0.4,
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 1,
  width: "100%",
  height: "100%",
  background: "transparent",
  transition: "all 0.3s",
  content: '""',
  pointerEvents: "none",
};

export const useStyle = createUseStyles(
  (theme) => {
    return {
      spinContainer: {
        position: "relative",
        height: "100%",
        overflow: "hidden",
        "&::after": afterStyle,
      },
      loading: {
        position: "relative",
        height: "100%",
        overflow: "hidden",
        "&::after": {
          backgroundColor: theme.color_primary_5,
          ...afterStyle,
        },
      },
    };
  },
  { theming },
);
