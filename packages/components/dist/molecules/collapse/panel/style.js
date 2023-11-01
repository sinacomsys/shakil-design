import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";
var useStyles = createUseStyles(function (theme) {
    var _a;
    return {
        titleWrapper: {
            display: "flex",
            height: 30,
            cursor: "pointer",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: (_a = theme.collapse) === null || _a === void 0 ? void 0 : _a.panel,
            borderRadius: 7,
        },
        title: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    };
}, { theming: theming, name: "panel" });
export { useStyles };
//# sourceMappingURL=style.js.map