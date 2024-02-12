"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../theme");
var useStyles = (0, react_jss_1.createUseStyles)(function (_a) {
    var table = _a.table;
    return {
        checkbox: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 24,
            borderRight: "1px solid ".concat(table === null || table === void 0 ? void 0 : table.divider),
            width: "50%",
        },
        "clear-filter": {
            height: 24,
            width: "50%",
            borderRight: "1px solid ".concat(table === null || table === void 0 ? void 0 : table.divider),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&--wrapper": {
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                "& .shakil-custom-square-wrapper": {
                    border: "1px solid #ffffff",
                },
                "& .shakil-indeterminate-checkbox-wrapper": {
                    border: "1px solid #ffffff",
                },
                "& .shakil-custom-square-square--unchecked": {
                    backgroundColor: table === null || table === void 0 ? void 0 : table.headerCheckBox.unselectedSquare,
                },
                "& .shakil-custom-square-square--checked": {
                    backgroundColor: table === null || table === void 0 ? void 0 : table.headerCheckBox.squareSelected,
                },
            },
        },
        wrapper: {
            display: function (_a) {
                var isSearchVisible = _a.isSearchVisible;
                return isSearchVisible ? "table-row" : "none";
            },
            height: 45,
            backgroundColor: table === null || table === void 0 ? void 0 : table.filtersTab,
        },
    };
}, { name: "search-bar", theming: theme_1.theming });
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map