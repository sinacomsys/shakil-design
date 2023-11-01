"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const react_jss_1 = require("react-jss");
const theme_1 = require("../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)((theme) => {
    return {
        ripple: {
            opacity: 0.2,
            width: 0,
            height: 0,
            backgroundColor: theme.primary,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            position: "absolute",
            transformOrigin: "center",
            borderRadius: "50%",
        },
        input: {
            opacity: 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            margin: 0,
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
        },
        label: {
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            columnGap: 11,
            cursor: "pointer",
        },
        container: {
            position: "relative",
        },
        outterCircle: {
            borderRadius: "50%",
            backgroundColor: "white",
            zIndex: 2,
            position: "relative",
        },
        innerCircle: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
        },
    };
}, { theming: theme_1.theming, name: "internal-radio" });
//# sourceMappingURL=style.js.map