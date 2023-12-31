import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

export const useStyle = createUseStyles(
  () => {
    return {
      mask: {
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.35)",
        position: "absolute",
      },
      content: {
        backgroundColor: "#ffffff",
        position: (position: React.CSSProperties["position"]) => position,
      },
    };
  },
  { theming, name: "drawer" },
);
