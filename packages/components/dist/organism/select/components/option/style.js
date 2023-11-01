import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme";
export var useStyles = createUseStyles(function (theme) {
    var _a;
    return {
        item: {
            height: 27,
            paddingInlineStart: 20,
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: (_a = theme.select) === null || _a === void 0 ? void 0 : _a.hover,
            },
        },
    };
}, { theming: theming, name: "select-options" });
//# sourceMappingURL=style.js.map