"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(
  function (theme) {
    var _a;
    return {
      selected: {
        position: "relative",
        height: "100%",
        borderInlineStart: "5px solid ".concat(
          (_a = theme === null || theme === void 0 ? void 0 : theme.table) ===
            null || _a === void 0
            ? void 0
            : _a.selectedRowBookmark,
        ),
      },
      "check-box": {
        paddingInlineStart: 8,
        height: "100%",
        display: "flex",
        alignItems: "center",
      },
    };
  },
  { name: "row-container", theming: theme_1.theming },
);
//# sourceMappingURL=style.js.map
