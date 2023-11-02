define(["require", "exports", "react-jss", "../../../../theme"], function (require, exports, react_jss_1, theme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useStyle = void 0;
    exports.useStyle = (0, react_jss_1.createUseStyles)({
        container: {
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            marginBottom: 10,
        },
        day: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    }, { theming: theme_1.theming, name: "days-of-week" });
});
//# sourceMappingURL=style.js.map