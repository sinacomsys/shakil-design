import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: { height: "100%", width: 20, position: "relative" },
  clear: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },
});
