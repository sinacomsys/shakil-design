define(["require", "exports", "react-jss", "../../theme"], function (require, exports, react_jss_1, theme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useStyles = void 0;
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
});
//# sourceMappingURL=style.js.map