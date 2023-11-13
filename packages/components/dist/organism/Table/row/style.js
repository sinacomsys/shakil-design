"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(function (_a) {
    var table = _a.table;
    return {
        row: {
            height: 32,
            backgroundColor: function (_a) {
                var isChecked = _a.isChecked, isSelected = _a.isSelected, isHoverd = _a.isHoverd;
                return isChecked || isSelected
                    ? table === null || table === void 0 ? void 0 : table.selectedRow
                    : isHoverd
                        ? table === null || table === void 0 ? void 0 : table.rowHover
                        : "transparent";
            },
            cursor: function (_a) {
                var isOnCheckedRowsAvailable = _a.isOnCheckedRowsAvailable;
                return isOnCheckedRowsAvailable ? "default" : "pointer";
            },
            borderBottom: "1px solid ".concat(table === null || table === void 0 ? void 0 : table.rowBorder),
        },
    };
}, { theming: theme_1.theming, name: "row" });
//# sourceMappingURL=style.js.map