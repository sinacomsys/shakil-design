"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const react_jss_1 = require("react-jss");
const theme_1 = require("../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(() => {
    return {
        noContent: {
            background: "radial-gradient(circle, rgba(0, 0, 0, 0.16) 0% , rgba(112, 112, 112, 0.5) 100%)",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        },
    };
}, { theming: theme_1.theming, name: "no-content" });
//# sourceMappingURL=style.js.map