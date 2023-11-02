define(["require", "exports", "react-jss", "../../theme"], function (require, exports, react_jss_1, theme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useStyles = void 0;
    exports.useStyles = (0, react_jss_1.createUseStyles)((theme) => {
        var _a, _b;
        return {
            overlay: {
                backgroundColor: "white",
                height: "auto",
                borderRadius: 4,
                boxShadow: "0px 3px 20px rgba(0, 0, 0, 0.16)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                width: 120,
            },
            item: {
                height: 27,
                paddingInlineStart: 23,
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": {
                    backgroundColor: (_a = theme.select) === null || _a === void 0 ? void 0 : _a.hover,
                },
            },
            itemSelected: {
                backgroundColor: (_b = theme.select) === null || _b === void 0 ? void 0 : _b.selected,
            },
        };
    }, { theming: theme_1.theming, name: "drop-down" });
});
//# sourceMappingURL=style.js.map