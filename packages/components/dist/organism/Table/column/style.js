import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";
var useStyles = createUseStyles({
    column: {
        height: "100%",
        alignItems: "center",
        display: "flex",
    },
}, { theming: theming, name: "table-column" });
export { useStyles };
//# sourceMappingURL=style.js.map