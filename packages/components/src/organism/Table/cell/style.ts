import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(() => {
  return {
    start: {
      textAlign: "start",
    },
    end: {
      textAlign: "end",
    },
    center: {
      textAlign: "center",
    },
  };
});
