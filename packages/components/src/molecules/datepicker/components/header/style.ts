import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme";

const useStyle = createUseStyles(
  {
    month: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
    },
    nextMonth: {
      position: "absolute",
      right: 0,
      cursor: "pointer",
      top: 20,
    },
    prevMonth: {
      position: "absolute",
      left: 0,
      top: 20,
      cursor: "pointer",
    },
    wrapper: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      marginBottom: 15,
      marginInline: 22,
    },
    year: { marginInline: 10, width: 40, textAlign: "center" },
  },
  { theming: theming, name: "datepicker-header" },
);

export { useStyle };
