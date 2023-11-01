"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const react_jss_1 = require("react-jss");
const theme_1 = require("../../theme");
const utils_1 = require("@shakil-design/utils");
exports.useStyles = (0, react_jss_1.createUseStyles)((theme) => {
    var _a, _b, _c;
    return {
        tabs: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
        },
        tabsTitle: {
            width: 131,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        tabsList: {
            display: "flex",
            height: `${(0, utils_1.pxToVh)(42)}vh`,
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
        tabActive: {
            backgroundColor: (_c = theme.tab) === null || _c === void 0 ? void 0 : _c.selectedTab,
        },
        tabsTitleWrapper: {
            width: "calc(100% - 16px)",
            padding: "0px 8px",
        },
        tabsContentContainer: {
            overflow: "auto",
            backgroundColor: "white",
            borderBottomLeftRadius: "1.25rem",
            borderBottomRightRadius: "1.25rem",
            width: "100%",
            position: "relative",
            flex: 1,
        },
        tabsContainer: {
            display: "flex",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            overflow: "hidden",
            height: `${(0, utils_1.pxToVh)(42)}vh`,
        },
    };
}, { theming: theme_1.theming, name: "tabs" });
//# sourceMappingURL=style.js.map