"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyle = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../../theme");
exports.useStyle = (0, react_jss_1.createUseStyles)(
  {
    manualInput: { display: "flex", marginLeft: 75, marginTop: 20 },
    expand: {
      marginInlineStart: 14,
    },
    wrapper: {
      width: 320,
      borderRadius: 10,
      backgroundColor: "#575757",
      paddingBottom: 12,
    },
    "footer-icons": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingInline: 14,
    },
    "go-today": {
      marginInlineStart: 118,
    },
  },
  { theming: theme_1.theming, name: "date-picker-panel" },
);
//# sourceMappingURL=style.js.map
