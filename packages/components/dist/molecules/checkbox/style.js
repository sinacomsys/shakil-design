"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../theme");
var useStyles = (0, react_jss_1.createUseStyles)(function () {
    return {
        "check-box-wrapper": {
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&--with-label": {
                marginInlineEnd: 4,
            },
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
        label: {
            display: "inline-flex",
        },
    };
}, { theming: theme_1.theming, name: "checkbox" });
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map