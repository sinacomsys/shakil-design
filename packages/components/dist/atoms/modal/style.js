"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../theme");
var useStyles = (0, react_jss_1.createUseStyles)(function (theme) {
    return {
        mask: {
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "absolute",
            backgroundColor: theme.primary,
            opacity: 0.22,
            backdropFilter: "blur(5px)",
        },
        modalContainer: {
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "white",
            borderRadius: 20,
            overflow: "hidden",
        },
        centerd: {
            top: "50%",
            transform: "translate(-50%, -50%)",
        },
    };
}, { theming: theme_1.theming, name: "modal" });
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map