import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";
export var useStyles = createUseStyles(function (theme) {
    var _a, _b;
    return {
        search: {
            borderRight: "1px solid ".concat((_a = theme.table) === null || _a === void 0 ? void 0 : _a.divider),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            width: 31,
        },
        selectAll: {
            borderRight: "1px solid ".concat((_b = theme.table) === null || _b === void 0 ? void 0 : _b.divider),
            width: 31,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 24,
        },
    };
}, { theming: theming, name: "table-header" });
//# sourceMappingURL=style.js.map