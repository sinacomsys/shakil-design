"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
exports.useStyles = (0, react_jss_1.createUseStyles)(
  {
    start: {
      textAlign: "start",
    },
    end: {
      textAlign: "end",
    },
    center: {
      textAlign: "center",
    },
    ellipsis: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      wordBreak: "keep-all",
      overflowWrap: "break-word",
    },
  },
  { name: "table-cell" },
);
//# sourceMappingURL=style.js.map
