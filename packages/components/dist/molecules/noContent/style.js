import { createUseStyles } from "react-jss";
import { theming } from "../../theme";
export var useStyles = createUseStyles(function () {
    return {
        noContent: {
            background: "radial-gradient(circle, rgba(0, 0, 0, 0.16) 0% , rgba(112, 112, 112, 0.5) 100%)",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        },
    };
}, { theming: theming, name: "no-content" });
//# sourceMappingURL=style.js.map