"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(
  {
    table: {
      tableLayout: "fixed",
      borderCollapse: "collapse",
      "& tr,td,th": {
        padding: 0,
      },
    },
  },
  { theming: theme_1.theming, name: "table" },
);
//# sourceMappingURL=style.js.map
