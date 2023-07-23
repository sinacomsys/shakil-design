import { createUseStyles } from "react-jss";
import { theming } from "../../theme/context";

export const useStyle = createUseStyles(
  () => {
    return {
      mask: {
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        position: "absolute",
      },
    };
  },
  { theming },
);
