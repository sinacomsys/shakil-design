import { pxToVhString, pxToVwString } from "@shakil-design/utils/src";
import { createUseStyles } from "react-jss";
import { PX_UNIT, VIEW_PORT_UNIT } from "../../../../types";
import { theming } from "../../../../theme";

export const useStyles = createUseStyles(
  ({ tree }) => {
    return {
      wrapper: {
        display: "flex",
        height: "100%",
        backgroundColor: "#f0f0f0",
        [`&${PX_UNIT}`]: {
          borderRadius: 7,
        },
        [`&${VIEW_PORT_UNIT}`]: {
          borderRadius: pxToVhString(7),
        },
        "&--active": {
          backgroundColor: tree?.activeItem,
        },
      },
      "status-line": {
        height: "100%",
        backgroundColor: "#ababab",
        position: "relative",
        [`&${PX_UNIT}`]: {
          width: pxToVwString(3),
          marginInlineStart: pxToVwString(10),
        },
        [`&${VIEW_PORT_UNIT}`]: {
          width: pxToVwString(3),
          marginInlineStart: pxToVwString(10),
        },
      },
      "item-content": {
        flex: 1,
        height: "100%",
      },
      "default-item-content": {
        display: "flex",
        alignItems: "center",
        height: "100%",
        [`&${PX_UNIT}`]: {
          marginInlineStart: 24,
        },
        [`&${VIEW_PORT_UNIT}`]: {
          marginInlineStart: pxToVwString(24),
        },
      },
      "spinner-wrapper": {
        display: "flex",
        alignItems: "center",
        marginInlineEnd: 10,
      },

      "arrow-down": {
        transition: "all 0.2s",
      },
      "arrow-up": {
        transform: "rotate(180deg)",
      },
    };
  },
  { name: "default-node", theming },
);
