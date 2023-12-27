import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";
import { VIEW_PORT_UNIT } from "../../../types";
import { pxToVhString } from "@shakil-design/utils/src";

export const useStyles = createUseStyles(
  (theme) => {
    return {
      dots: {
        position: "absolute",
        top: 0,
        left: 11,
        width: 0,
        borderLeft: `2px dotted ${theme.tree?.dotLine}`,
      },
      "animation-wrapper": {
        position: "relative",
        overflow: "hidden",
        height: 0,
      },
      wrapper: {
        paddingTop: 20,
        [`${VIEW_PORT_UNIT}`]: {
          paddingTop: pxToVhString(20),
        },
        "&--first-item": {
          paddingTop: 0,
        },
      },
    };
  },
  { theming, name: "tree-collapse" },
);
