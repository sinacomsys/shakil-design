"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)({
    day: {
        width: 30,
        height: 30,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    dayContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    matrix: { display: "flex", flexDirection: "column" },
    week: {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        "&--gregorian": {
            flexDirection: "row",
        },
    },
}, { theming: theme_1.theming, name: "martix" });
//# sourceMappingURL=style.js.map