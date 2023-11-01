import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme";
export var useStyle = createUseStyles({
    container: {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    day: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}, { theming: theming, name: "days-of-week" });
//# sourceMappingURL=style.js.map