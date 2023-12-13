import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme/context";

const useStyles = createUseStyles(
  () => {
    return {
      wrapper: {
        display: "flex",
        alignItems: "center",
        marginBottom: 8,
      },
      title: {
        marginInlineEnd: 12,
      },
      input: {
        width: 44,
      },
      minute: {
        marginInline: 6,
      },

      overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      },
    };
  },
  {
    theming,
    name: "manual-import-date",
  },
);

export { useStyles };
