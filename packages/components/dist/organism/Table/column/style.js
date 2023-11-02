define(["require", "exports", "react-jss", "../../../theme"], function (require, exports, react_jss_1, theme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useStyles = void 0;
    const useStyles = (0, react_jss_1.createUseStyles)({
        column: {
            height: "100%",
            alignItems: "center",
            display: "flex",
        },
    }, { theming: theme_1.theming, name: "table-column" });
    exports.useStyles = useStyles;
});
//# sourceMappingURL=style.js.map