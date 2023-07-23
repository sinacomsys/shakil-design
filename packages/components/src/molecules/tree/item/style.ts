import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

const useStyle = createUseStyles(
  (theme) => {
    return {
      wrapper: {
        height: 32,
        borderRadius: 7,
        display: "flex",
        marginBlockEnd: 20,
        position: "relative",
        cursor: "pointer",
      },
      dotLine: {
        "&::before": {
          content: "''",
          position: "absolute",
          left: -18,
          border: "none",
          borderTop: `2px dotted ${theme.color_primary_2}`,
          color: "#fff",
          backgroundColor: "#fff",
          height: 1,
          width: 18,
          top: "50%",
          transform: "translateY(-50%)",
        },
      },
      statusLine: {
        position: "relative",
        width: 16,
        borderInlineEnd: "3px solid red",
        height: "100%",
      },
      content: {
        marginInlineStart: 24,
        display: "flex",
        alignItems: "center",
        flex: 1,
        marginInlineEnd: 13,
      },
      arrowDown: {
        transition: "all 0.2s",
      },
      arrowUp: {
        transform: "rotate(180deg)",
      },
    };
  },
  { theming },
);

export { useStyle };
