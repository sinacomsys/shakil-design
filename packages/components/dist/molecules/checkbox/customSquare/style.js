define(["require", "exports", "react-jss", "../../../theme"], function (require, exports, react_jss_1, theme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useStyles = void 0;
    exports.useStyles = (0, react_jss_1.createUseStyles)({
        wrapper: {
            borderRadius: 3,
            position: "relative",
            backgroundColor: "transparent",
        },
        square: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        },
    }, { theming: theme_1.theming, name: "custom-square" });
});
//# sourceMappingURL=style.js.map