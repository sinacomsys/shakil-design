import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

export const useStyles = createUseStyles(
  {
    wrapper: {
      borderRadius: 8,
      border: 0,
      outline: "none",
      padding: "2px",
      position: "relative",
      cursor: "pointer",
      zIndex: 2,
    },
    hiddenCheckbox: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      margin: 0,
      opacity: 0,
    },
    circle: {
      border: "2px solid white",
      borderRadius: "50%",
      position: "absolute",
    },
    ripple: {
      opacity: 0.2,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      borderRadius: 8,
      zIndex: 1,
    },
  },
  { theming, name: "switch" },
);
