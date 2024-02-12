"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(function (theme) {
    var _a, _b, _c, _d;
    return {
        "filter-icon-wrapper": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        search: {
            borderRight: "1px solid ".concat((_a = theme.table) === null || _a === void 0 ? void 0 : _a.divider),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            height: 24,
            width: "50%",
        },
        selectAll: {
            borderRight: "1px solid ".concat((_b = theme.table) === null || _b === void 0 ? void 0 : _b.divider),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 24,
            width: "50%",
            "& .shakil-custom-square-wrapper": {
                border: "1px solid #ffffff",
            },
            "& .shakil-indeterminate-checkbox-wrapper": {
                border: "1px solid #ffffff",
            },
            "& .shakil-custom-square-square--unchecked": {
                backgroundColor: (_c = theme.table) === null || _c === void 0 ? void 0 : _c.headerCheckBox.unselectedSquare,
            },
            "& .shakil-custom-square-square--checked": {
                backgroundColor: (_d = theme.table) === null || _d === void 0 ? void 0 : _d.headerCheckBox.squareSelected,
            },
        },
    };
}, { theming: theme_1.theming, name: "table-header" });
//# sourceMappingURL=style.js.map