import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";
export var useStyles = createUseStyles(function (theme) {
    var _a;
    return {
        dots: {
            position: "absolute",
            top: 0,
            left: 11,
            width: 0,
            borderLeft: "2px dotted ".concat((_a = theme.tree) === null || _a === void 0 ? void 0 : _a.dotLine),
        },
        "animation-wrapper": {
            position: "relative",
            overflow: "hidden",
            height: 0,
        },
    };
}, { theming: theming, name: "tree-collapse" });
//# sourceMappingURL=style.js.map