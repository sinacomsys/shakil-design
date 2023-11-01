"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const react_jss_1 = require("react-jss");
const theme_1 = require("../../../theme");
const useStyles = (0, react_jss_1.createUseStyles)({
    column: {
        height: "100%",
        alignItems: "center",
        display: "flex",
    },
}, { theming: theme_1.theming, name: "table-column" });
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map