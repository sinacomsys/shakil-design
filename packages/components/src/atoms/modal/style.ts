import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

const useStyles = createUseStyles(
  (theme) => {
    return {
      mask: {
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        position: "absolute",
        backgroundColor: theme.primary,
        opacity: 0.22,
        backdropFilter: "blur(5px)",
      },
      modalContainer: {
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "white",
        borderRadius: 20,
        overflow: "hidden",
      },
      centerd: {
        top: "50%",
        transform: "translate(-50%, -50%)",
      },
    };
  },
  { theming, name: "modal" },
);

export { useStyles };
