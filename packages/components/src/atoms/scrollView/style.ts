import { createUseStyles } from "react-jss";
import { theming } from "../../theme/context";
import { pxToVh } from "@sina-base/utils";
const useStyles = createUseStyles(
  (theme) => {
    return {
      container: {
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: 7,
          height: `${pxToVh(7)}vh`,
        },
        /* Track */
        "&::-webkit-scrollbar-track": {
          background: theme.color_primary_7,
        },
        /* Handle */
        "&::-webkit-scrollbar-thumb": {
          background: theme.color_primary_5,
          borderRadius: 4,
        },

        /* Handle on hover */
        "&::-webkit-scrollbar-thumb:hover": {
          background: theme.color_primary_4,
          cursor: "pointer",
        },
      },
    };
  },
  { theming },
);

export { useStyles };
