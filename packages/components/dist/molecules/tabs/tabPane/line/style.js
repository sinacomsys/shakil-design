"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)({
    "title-wrapper": {
        height: 21,
        paddingInline: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 100,
        maxWidth: 150,
        position: "relative",
    },
    line: {
        height: 4,
    },
}, { theming: theme_1.theming, name: "line" });
//# sourceMappingURL=style.js.map