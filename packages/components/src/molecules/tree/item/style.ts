import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";
import { pxToVhString, pxToVwString } from "@shakil-design/utils/src";
import { PX_UNIT, VIEW_PORT_UNIT } from "../../../types";

const useStyle = createUseStyles(
  (theme) => {
    return {
      wrapper: {
        position: "relative",
        cursor: "pointer",
        [`&${PX_UNIT}`]: {
          height: 32,
        },
        [`&${VIEW_PORT_UNIT}`]: {
          height: pxToVhString(32),
        },
      },
      "dot-line": {
        "&::before": {
          content: "''",
          position: "absolute",
          border: "none",
          borderTop: `2px dotted ${theme.tree?.dotLine}`,
          color: "#fff",
          backgroundColor: "#fff",
          height: 1,
          top: "50%",
          transform: "translateY(-50%)",
        },
        [`&${PX_UNIT}`]: {
          "&::before": { width: 16, left: -16 },
        },
        [`&${VIEW_PORT_UNIT}`]: {
          "&::before": { width: pxToVwString(16), left: pxToVwString(-16) },
        },
      },
    };
  },
  { theming, name: "item" },
);

export { useStyle };
