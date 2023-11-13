"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../theme");
var useStyles = (0, react_jss_1.createUseStyles)({
    column: {
        height: "100%",
        alignItems: "center",
        display: "flex",
    },
    wrapper: {
        height: 45,
        padding: 0,
    },
}, { theming: theme_1.theming, name: "table-column" });
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map