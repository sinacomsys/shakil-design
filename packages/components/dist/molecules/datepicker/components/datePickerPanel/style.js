"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyle = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../../theme");
exports.useStyle = (0, react_jss_1.createUseStyles)(
  {
    manualInput: {
      display: "flex",
      marginLeft: 75,
      marginTop: 20,
      position: "relative",
    },
    expand: {
      marginInlineStart: 14,
    },
    overlay: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      opacity: 0.3,
      backgroundColor: "#575757",
    },
  },
  { theming: theme_1.theming, name: "date-picker-panel" },
);
//# sourceMappingURL=style.js.map
