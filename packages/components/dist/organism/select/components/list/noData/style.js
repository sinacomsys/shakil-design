"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../../../theme");
var useStyles = (0, react_jss_1.createUseStyles)({
    "no-data": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBlockStart: 10,
    },
}, { theming: theme_1.theming, name: "multi-select-list" });
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map