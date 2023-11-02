define(["require", "exports", "react-jss", "../../theme", "@shakil-design/utils"], function (require, exports, react_jss_1, theme_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useStyles = void 0;
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
});
//# sourceMappingURL=style.js.map