import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
  expandIcon: {
    marginInlineStart: 14,
    display: "flex",
    flexDirection: "column",
  },
  manualInput: { display: "flex", marginLeft: 75, marginTop: 20 },
  matrixContainer: {
    transition: "0.3s",
    overflow: "hidden",
  },
  panel: {
    width: 320,
    borderRadius: 10,
    backgroundColor: "#575757",
    paddingBottom: 20,
  },
  matrix: {
    paddingInline: 22,
  },
});
