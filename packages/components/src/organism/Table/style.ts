import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

export const useStyles = createUseStyles(
  () => {
    return {
      table: {
        width: "100%",
        borderCollapse: "collapse",
        "& tr,td,th": {
          padding: 0,
        },
      },
    };
  },
  { theming },
);
