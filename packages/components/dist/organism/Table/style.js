"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)({
    table: {
        borderCollapse: "collapse",
        "& tr,td,th": {
            padding: 0,
            fontWeight: "unset",
        },
    },
    spinner: {
        "&--overlay": {
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "#ffffff",
            opacity: "0.7",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },
    container: function (_a) {
        var height = _a.height;
        return {
            width: "100%",
            overflowY: "auto",
            position: "relative",
            height: height,
        };
    },
    "table-body": {
        flex: 1,
        overflowY: "auto",
    },
}, { theming: theme_1.theming, name: "table" });
//# sourceMappingURL=style.js.map