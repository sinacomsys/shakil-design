"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyle = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../../theme");
var useStyle = (0, react_jss_1.createUseStyles)({
    month: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    nextMonth: {
        position: "absolute",
        right: 0,
        cursor: "pointer",
        top: 20,
    },
    prevMonth: {
        position: "absolute",
        left: 0,
        top: 20,
        cursor: "pointer",
    },
    wrapper: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        marginBottom: 15,
        marginInline: 22,
    },
    year: { marginInline: 10, width: 40, textAlign: "center" },
}, { theming: theme_1.theming, name: "datepicker-header" });
exports.useStyle = useStyle;
//# sourceMappingURL=style.js.map