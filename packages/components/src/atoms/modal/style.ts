import { createUseStyles } from "react-jss";
import { theming } from "../../theme/context";

const useStyles = createUseStyles(
  (theme) => {
    return {
      mask: {
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        position: "absolute",
        backgroundColor: theme.color_primary_1,
        opacity: 0.22,
        backdropFilter: "blur(5px)",
      },
      modalContainer: {
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: theme.color_white,
        borderRadius: 20,
        overflow: "hidden",
        maxWidth: "calc(100% - 32px)",
        maxHeight: "calc(100% - 32px)",
      },
      centerd: {
        top: "50%",
        transform: "translate(-50%, -50%)",
      },
    };
  },
  { theming },
);

export { useStyles };
