"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyle = void 0;
const react_jss_1 = require("react-jss");
const theme_1 = require("../../theme");
exports.useStyle = (0, react_jss_1.createUseStyles)(() => {
    return {
        mask: {
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            position: "absolute",
        },
    };
}, { theming: theme_1.theming, name: "drawer" });
//# sourceMappingURL=style.js.map