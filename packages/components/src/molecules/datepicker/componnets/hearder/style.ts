import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  month: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  nextMonth: {
    transform: "rotateZ(90deg)",
    position: "absolute",
    left: 14,
    cursor: "pointer",
  },
  prevMonth: {
    transform: "rotateZ(-90deg)",
    position: "absolute",
    right: 14,
    cursor: "pointer",
  },
});

export { useStyle };
