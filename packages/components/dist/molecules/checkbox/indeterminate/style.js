import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";
export var useStyles = createUseStyles(function (theme) {
    var _a, _b;
    return {
        wrapper: {
            borderRadius: 3,
            border: "1px solid ".concat((_a = theme.checkbox) === null || _a === void 0 ? void 0 : _a.borderSelected),
            position: "relative",
            backgroundColor: "transparent",
        },
        square: {
            position: "absolute",
            backgroundColor: (_b = theme.checkbox) === null || _b === void 0 ? void 0 : _b.squareSelected,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        },
    };
}, {
    theming: theming,
    name: "indeterminate-checkbox",
});
//# sourceMappingURL=style.js.map