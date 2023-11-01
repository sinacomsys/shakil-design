"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const react_jss_1 = require("react-jss");
const theme_1 = require("../../theme");
const useStyles = (0, react_jss_1.createUseStyles)(() => {
    return {
        checkBoxWrapper: {
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        hiddenInput: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            margin: 0,
            opacity: 0,
            cursor: "pointer",
        },
    };
}, { theming: theme_1.theming, name: "checkbox" });
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map