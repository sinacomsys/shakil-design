import { createUseStyles } from "react-jss";
import { theming } from "../../theme/context";

const useStyles = createUseStyles(
  () => {
    return {
      arrow: {
        width: 8,
        height: 8,
      },
      mask: {
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      },
      maskVisible: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      },
    };
  },
  { theming },
);

export { useStyles };
