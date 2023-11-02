"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../theme");
var useStyles = (0, react_jss_1.createUseStyles)(function () {
    return {
        arrow: {
            width: 8,
            height: 8,
        },
        mask: {
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
        },
        maskVisible: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
    };
}, { theming: theme_1.theming, name: "tooltip" });
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map