import { createUseStyles } from "react-jss";
import { theming } from "../../theme";
import { pxToVh } from "@shakil-design/utils/src";
const useStyles = createUseStyles(
  (theme) => {
    return {
      container: {
        scrollbarWidth: "thin",
        scrollbarColor: `${theme.disableText} #f8f8f8`,
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: 7,
          height: `${pxToVh(7)}vh`,
        },
        /* Track */
        "&::-webkit-scrollbar-track": {
          background: "#f8f8f8",
        },
        /* Handle */
        "&::-webkit-scrollbar-thumb": {
          background: theme.disableText,
          borderRadius: 4,
        },

        /* Handle on hover */
        "&::-webkit-scrollbar-thumb:hover": {
          background: theme.disableText,
          cursor: "pointer",
        },
      },
    };
  },
  { theming, name: "scroll-view" },
);

export { useStyles };
