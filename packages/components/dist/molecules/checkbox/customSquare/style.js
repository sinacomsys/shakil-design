import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";
export var useStyles = createUseStyles({
    wrapper: {
        borderRadius: 3,
        position: "relative",
        backgroundColor: "transparent",
    },
    square: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
}, { theming: theming, name: "custom-square" });
//# sourceMappingURL=style.js.map