define(["require", "exports", "react-jss", "../../theme"], function (require, exports, react_jss_1, theme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useStyles = void 0;
    const useStyles = (0, react_jss_1.createUseStyles)((theme) => {
        return {
            mask: {
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                position: "absolute",
                backgroundColor: theme.primary,
                opacity: 0.22,
                backdropFilter: "blur(5px)",
            },
            modalContainer: {
                top: 20,
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "white",
                borderRadius: 20,
                overflow: "hidden",
                maxWidth: "calc(100% - 32px)",
                maxHeight: "calc(100% - 32px)",
            },
            centerd: {
                top: "50%",
                transform: "translate(-50%, -50%)",
            },
        };
    }, { theming: theme_1.theming, name: "modal" });
    exports.useStyles = useStyles;
});
//# sourceMappingURL=style.js.map