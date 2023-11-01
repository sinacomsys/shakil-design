"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const react_jss_1 = require("react-jss");
const theme_1 = require("../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)((theme) => {
    var _a, _b;
    return {
        wrapper: {
            borderRadius: 3,
            border: `1px solid ${(_a = theme.checkbox) === null || _a === void 0 ? void 0 : _a.borderSelected}`,
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
    theming: theme_1.theming,
    name: "indeterminate-checkbox",
});
//# sourceMappingURL=style.js.map