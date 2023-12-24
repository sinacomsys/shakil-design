"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(
  {
    table: {
      borderCollapse: "collapse",
      "& tr,td,th": {
        padding: 0,
        fontWeight: "unset",
      },
    },
    backDrop: {
      "&::after": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "(0,0,0,.1)",
        opacity: 0.4,
        display: "block",
        top: 0,
        left: 0,
      },
    },
    spinner: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    container: function (_a) {
      var height = _a.height;
      return {
        width: "100%",
        overflowY: "auto",
        position: "relative",
        height: height,
      };
    },
    "table-body": {
      flex: 1,
      overflowY: "auto",
    },
  },
  { theming: theme_1.theming, name: "table" },
);
//# sourceMappingURL=style.js.map
