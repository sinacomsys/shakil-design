"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(function (theme) {
    var _a, _b, _c;
    return {
        "no-content": {
            height: "100%",
        },
        tabs: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            borderRadius: 20,
            overflow: "hidden",
        },
        tabsTitle: {
            width: 130,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
        },
        "tabs-nav-list": {
            display: "flex",
            justifyContent: "space-between",
            columnGap: 4,
            backgroundColor: "white",
            overflowX: "auto",
            overflowY: "hidden",
            flex: 1,
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
        tab: {
            flexBasis: 200,
            flexGrow: 1,
            flexShrink: 0,
            height: "100%",
            color: (_a = theme.tab) === null || _a === void 0 ? void 0 : _a.textColor,
            backgroundColor: (_b = theme.tab) === null || _b === void 0 ? void 0 : _b.unSelectedTab,
            cursor: "pointer",
            borderRadius: 0,
            border: "none",
            position: "relative",
            textTransform: "uppercase",
            fontSize: 14,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "*": {
                cursor: "pointer",
            },
        },
        "tab-pane-close": {
            width: 15,
            display: "flex",
            alignItems: "flex-start",
            height: "100%",
            paddingTop: 8,
        },
        "active-tab-pane": {
            backgroundColor: (_c = theme.tab) === null || _c === void 0 ? void 0 : _c.selectedTab,
        },
        "tab-pane-title": {
            padding: "0px 8px",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            width: "100%",
        },
        "tabs-content-holder": {
            overflow: "auto",
            backgroundColor: "white",
            width: "100%",
            position: "relative",
            flex: 1,
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
        "tabs-nav-wrap": {
            display: "flex",
            overflow: "hidden",
            height: 64,
        },
        "rendered-title-wrap": {
            flex: 1,
        },
    };
}, { theming: theme_1.theming, name: "tabs" });
//# sourceMappingURL=style.js.map