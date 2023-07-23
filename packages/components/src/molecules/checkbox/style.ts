import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

const useStyles = createUseStyles(
  () => {
    return {
      checkBoxWrapper: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      hiddenInput: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        margin: 0,
        opacity: 0,
        cursor: "pointer",
      },
    };
  },
  { theming },
);

export { useStyles };
