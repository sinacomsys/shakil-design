import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(
  {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      "&--more-choices": {
        marginBottom: 5,
        justifyContent: "center",
      },
    },
  },
  { name: "expand-icon" },
);
