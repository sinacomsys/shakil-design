"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(function (theme) {
    var _a;
    return {
        cell: {
            display: "flex",
            justifyContent: "center",
            height: 32,
            alignItems: "center",
        },
        selected: {
            position: "relative",
            height: "100%",
            borderInlineStart: "5px solid ".concat((_a = theme === null || theme === void 0 ? void 0 : theme.table) === null || _a === void 0 ? void 0 : _a.selectedRowBookmark),
        },
        "check-box": {
            height: "100%",
            display: "flex",
            alignItems: "center",
            width: "50%",
            justifyContent: "center",
        },
        start: {
            justifyContent: "flex-start",
        },
        end: {
            justifyContent: "flex-end",
        },
        center: {
            justifyContent: "center",
        },
        ellipsis: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            wordBreak: "keep-all",
            overflowWrap: "break-word",
        },
    };
}, { name: "row-container", theming: theme_1.theming });
//# sourceMappingURL=style.js.map