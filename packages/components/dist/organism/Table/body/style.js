"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)({
    wrapper: {
        tableLayout: "fixed",
        width: "100%",
        borderCollapse: "collapse",
        "& tr,td,th": {
            padding: 0,
        },
    },
    "end-of-list": {
        display: "flex",
        justifyContent: "center",
        width: "100%",
    },
}, { theming: theme_1.theming, name: "body" });
//# sourceMappingURL=style.js.map