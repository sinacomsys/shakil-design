import { createUseStyles } from "react-jss";
import { theming } from "../../theme";
export var useStyle = createUseStyles(function () {
    return {
        mask: {
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            position: "absolute",
        },
    };
}, { theming: theming, name: "drawer" });
//# sourceMappingURL=style.js.map