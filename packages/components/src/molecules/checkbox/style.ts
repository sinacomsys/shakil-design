import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

const useStyles = createUseStyles(
  () => {
    return {
      "check-box-wrapper": {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&--with-label": {
          marginInlineEnd: 4,
        },
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
      label: {
        display: "inline-flex",
      },
    };
  },
  { theming, name: "checkbox" },
);

export { useStyles };
