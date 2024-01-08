import { createUseStyles } from "react-jss";

import { theming } from "../../../../../theme";

const useStyles = createUseStyles(
  {
    "no-data": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingBlockStart: 10,
    },
  },
  { theming, name: "multi-select-list" },
);

export { useStyles };
