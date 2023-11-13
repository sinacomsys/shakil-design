"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)({
    wrapper: {
        borderRadius: 8,
        border: 0,
        outline: "none",
        padding: "2px",
        position: "relative",
        cursor: "pointer",
        zIndex: 2,
    },
    hiddenCheckbox: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        margin: 0,
        opacity: 0,
    },
    circle: {
        border: "2px solid white",
        borderRadius: "50%",
        position: "absolute",
    },
    ripple: {
        opacity: 0.2,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        borderRadius: 8,
        zIndex: 1,
    },
}, { theming: theme_1.theming, name: "switch" });
//# sourceMappingURL=style.js.map