import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme";
export var useStyles = createUseStyles({
    day: {
        width: 30,
        height: 30,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    dayContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    matrix: { display: "flex", flexDirection: "column" },
    week: {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
    },
}, { theming: theming, name: "martix" });
//# sourceMappingURL=style.js.map