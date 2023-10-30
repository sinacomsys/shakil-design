import { pxToVwString } from "@shakil-design/utils";
import { createUseStyles } from "react-jss";
import { PX_UNIT, VIEW_PORT_UNIT } from "../../types";

const useStyle = createUseStyles(
  {
    wrapper: {
      [`&${PX_UNIT}`]: {
        paddingInlineStart: 30,
      },
      [`&${VIEW_PORT_UNIT}`]: {
        paddingInlineStart: pxToVwString(30),
      },
    },
  },
  { name: "tree" },
);
export { useStyle };
