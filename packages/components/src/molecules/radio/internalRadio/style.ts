import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";
import { CustomCircleProps } from "./customCircle";

export const useStyles = createUseStyles(
  (theme) => {
    return {
      ripple: {
        opacity: 0.2,
        width: 0,
        height: 0,
        backgroundColor: theme.primary,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        position: "absolute",
        transformOrigin: "center",
        borderRadius: "50%",
      },
      input: {
        opacity: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: 0,
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
      },

      label: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        columnGap: 11,
        cursor: "pointer",
      },

      container: {
        position: "relative",
      },

      "outter-circle": {
        borderRadius: "50%",
        backgroundColor: "white",
        zIndex: 2,
        position: "relative",
        width: 16,
        height: 16,
        border: (props: CustomCircleProps) => {
          return `1px solid ${props?.borderColor}`;
        },
      },
      "inner-circle": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        width: 10,
        height: 10,
        backgroundColor: (props: CustomCircleProps) => {
          return props?.backgroundColor;
        },
      },
    };
  },
  { theming, name: "internal-radio" },
);
