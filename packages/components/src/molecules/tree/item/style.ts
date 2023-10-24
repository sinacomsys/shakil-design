import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

const useStyle = createUseStyles(
  (theme) => {
    return {
      wrapper: {
        height: 32,
        borderRadius: 7,
        display: "flex",
        position: "relative",
        cursor: "pointer",
      },
      dotLine: {
        "&::before": {
          content: "''",
          position: "absolute",
          left: -16,
          border: "none",
          borderTop: `2px dotted ${theme.tree?.dotLine}`,
          color: "#fff",
          backgroundColor: "#fff",
          height: 1,
          width: 16,
          top: "50%",
          transform: "translateY(-50%)",
        },
      },
      statusLine: {
        width: 3,
        marginInlineStart: 10,
        height: "100%",
      },
      content: {
        flex: 1,
        height: "100%",
      },
      arrowDown: {
        transition: "all 0.2s",
      },
      arrowUp: {
        transform: "rotate(180deg)",
      },
      spinnerWrapper: {
        display: "flex",
        alignItems: "center",
        marginInlineEnd: 10,
      },
    };
  },
  { theming, name: "tree" },
);

export { useStyle };
