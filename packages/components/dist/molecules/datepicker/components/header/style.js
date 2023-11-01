import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme";
var useStyle = createUseStyles({
    month: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    nextMonth: {
        // transform: "rotateZ(90deg)",
        position: "absolute",
        right: 0,
        // left: 14,
        cursor: "pointer",
        top: 20,
    },
    prevMonth: {
        // transform: "rotateZ(-90deg)",
        position: "absolute",
        // right: 14,
        left: 0,
        top: 20,
        cursor: "pointer",
    },
}, { theming: theming, name: "datepicker-header" });
export { useStyle };
//# sourceMappingURL=style.js.map