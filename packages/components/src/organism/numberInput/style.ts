import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  arrowDown: {
    position: "absolute",
    insetInlineStart: 10,
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },
  arrowUp: {
    position: "absolute",
    insetInlineEnd: 10,
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    "&.test": {},
  },
  input: {
    "&::-webkit-outer-spin-button , &::-webkit-inner-spin-button": {
      appearance: "none",
    },
    "&[type=number]": {
      "-moz-appearance": "textfield",
    },
  },
});
