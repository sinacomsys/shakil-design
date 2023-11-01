import { createUseStyles } from "react-jss";
import { theming } from "../../theme";
export var useStyles = createUseStyles(function (theme) {
    var _a, _b;
    return {
        overlay: {
            backgroundColor: "white",
            height: "auto",
            borderRadius: 4,
            boxShadow: "0px 3px 20px rgba(0, 0, 0, 0.16)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            width: 120,
        },
        item: {
            height: 27,
            paddingInlineStart: 23,
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: (_a = theme.select) === null || _a === void 0 ? void 0 : _a.hover,
            },
        },
        itemSelected: {
            backgroundColor: (_b = theme.select) === null || _b === void 0 ? void 0 : _b.selected,
        },
    };
}, { theming: theming, name: "drop-down" });
//# sourceMappingURL=style.js.map