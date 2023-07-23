import { createUseStyles } from "react-jss";
import { theming } from "../../../theme/context";

export const useStyle = createUseStyles(
  () => {
    return {
      ldsRing: {
        display: "inline-block",
        "& div": {
          boxSizing: "border-box",
          display: "block",
          position: "absolute",
          border: "1px solid black",
          borderRadius: "50%",
          animation: "$lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        },
        "& div:nth-child(1)": {
          animationDelay: "-0.45s",
        },
        "& div:nth-child(2)": {
          animationDelay: "-0.3s",
        },
        "& div:nth-child(3)": {
          animationDelay: "-0.15s",
        },
      },

      "@keyframes lds-ring": {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
    };
  },
  { theming },
);
