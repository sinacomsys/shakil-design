"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const react_jss_1 = require("react-jss");
const theme_1 = require("../../theme");
const utils_1 = require("@shakil-design/utils");
const useStyles = (0, react_jss_1.createUseStyles)((theme) => {
    return {
        container: {
            overflow: "auto",
            "&::-webkit-scrollbar": {
                width: 7,
                height: `${(0, utils_1.pxToVh)(7)}vh`,
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