"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)({
    arrowDown: {
        position: "absolute",
        insetInlineStart: 10,
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
    },
    arrowUp: {
        position: "absolute",
        insetInlineEnd: 10,
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
    },
    input: {
        "&::-webkit-outer-spin-button , &::-webkit-inner-spin-button": {
            appearance: "none",
        },
        "&[type=number]": {
            "-moz-appearance": "textfield",
        },
    },
}, { theming: theme_1.theming, name: "number-input" });
//# sourceMappingURL=style.js.map