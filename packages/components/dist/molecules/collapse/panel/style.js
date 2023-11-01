"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const react_jss_1 = require("react-jss");
const theme_1 = require("../../../theme");
const useStyles = (0, react_jss_1.createUseStyles)((theme) => {
    var _a;
    return {
        titleWrapper: {
            display: "flex",
            height: 30,
            cursor: "pointer",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: (_a = theme.collapse) === null || _a === void 0 ? void 0 : _a.panel,
            borderRadius: 7,
        },
        title: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    };
}, { theming: theme_1.theming, name: "panel" });
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map