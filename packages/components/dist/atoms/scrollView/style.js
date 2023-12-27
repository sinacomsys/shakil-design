"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../theme");
var src_1 = require("@shakil-design/utils/src");
var useStyles = (0, react_jss_1.createUseStyles)(function (theme) {
    return {
        container: {
            scrollbarWidth: "thin",
            scrollbarColor: "".concat(theme.disableText, " #f8f8f8"),
            overflow: "auto",
            "&::-webkit-scrollbar": {
                width: 7,
                height: "".concat((0, src_1.pxToVh)(7), "vh"),
            },
            /* Track */
            "&::-webkit-scrollbar-track": {
                background: "#f8f8f8",
            },
            /* Handle */
            "&::-webkit-scrollbar-thumb": {
                background: theme.disableText,
                borderRadius: 4,
            },
            /* Handle on hover */
            "&::-webkit-scrollbar-thumb:hover": {
                background: theme.disableText,
                cursor: "pointer",
            },
        },
    };
}, { theming: theme_1.theming, name: "scroll-view" });
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map