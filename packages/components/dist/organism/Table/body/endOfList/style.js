"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)({
    wrapper: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
    },
}, { theming: theme_1.theming, name: "end-of-list" });
//# sourceMappingURL=style.js.map