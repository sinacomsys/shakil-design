"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyle = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../../theme");
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
//# sourceMappingURL=style.js.map