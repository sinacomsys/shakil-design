"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(function (_a) {
    var primary = _a.primary;
    return {
        "no-content": {
            height: "100%",
        },
        tabs: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "hidden",
            backgroundColor: "#FFFFFF",
        },
        "nav-list": {
            overflowX: "auto",
            overflowY: "hidden",
            "&::-webkit-scrollbar": {
                height: 2,
            },
            /* Track */
            "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
            },
            /* Handle */
            "&::-webkit-scrollbar-thumb": {
                background: "#888",
            },
            /* Handle on hover */
            "&::-webkit-scrollbar-thumb:hover": {
                background: "#555",
            },
        },
        "content-holder": {
            overflow: "auto",
            backgroundColor: "white",
            width: "100%",
            position: "relative",
            flex: 1,
            paddingInlineStart: 20,
        },
        "tab-content": {
            height: "100%",
            "&--active": {
                display: "block",
            },
            "&--not-active": {
                display: "none",
            },
        },
        "nav-wrap": {
            display: "flex",
            // overflow: "hidden",
            height: 33,
        },
        "tooltip-content": {
            padding: 6,
            borderRadius: 4,
            backgroundColor: primary,
        },
        "dummy-anchor": {
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
        },
        "nav-list-wrapper": {
            borderBottom: "1px solid #EFF1F4",
            display: "flex",
            paddingInline: 20,
        },
    };
}, { theming: theme_1.theming, name: "tabs" });
//# sourceMappingURL=style.js.map