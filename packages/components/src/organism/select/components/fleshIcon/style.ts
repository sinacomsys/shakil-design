import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    "rotate-animation": {
      transform: "rotate(0deg)",
      transition: "transform .2s",
      "&--selected": {
        transform: "rotate(180deg)",
      },
    },
  },
  {
    name: "flesh-icon",
  },
);
export { useStyles };
