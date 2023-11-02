define(["require", "exports", "react-jss", "../../../theme"], function (require, exports, react_jss_1, theme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useStyles = void 0;
    exports.useStyles = (0, react_jss_1.createUseStyles)((theme) => {
        var _a, _b;
        return {
            search: {
                borderRight: `1px solid ${(_a = theme.table) === null || _a === void 0 ? void 0 : _a.divider}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                width: 31,
            },
            selectAll: {
                borderRight: `1px solid ${(_b = theme.table) === null || _b === void 0 ? void 0 : _b.divider}`,
                width: 31,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 24,
            },
        };
    }, { theming: theme_1.theming, name: "table-header" });
});
//# sourceMappingURL=style.js.map