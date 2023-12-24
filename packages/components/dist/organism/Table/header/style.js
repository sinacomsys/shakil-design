"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(
  function (theme) {
    var _a, _b;
    return {
      "filter-icon-wrapper": {
        display: "flex",
        alignItems: "center",
      },
      search: {
        borderRight: "1px solid ".concat(
          (_a = theme.table) === null || _a === void 0 ? void 0 : _a.divider,
        ),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        height: 24,
        paddingInline: 8,
      },
      selectAll: {
        borderRight: "1px solid ".concat(
          (_b = theme.table) === null || _b === void 0 ? void 0 : _b.divider,
        ),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 24,
        paddingInline: 8,
      },
    };
  },
  { theming: theme_1.theming, name: "table-header" },
);
//# sourceMappingURL=style.js.map
