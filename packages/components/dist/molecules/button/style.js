"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../theme");
var button = {
  overflow: "hidden",
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  borderRadius: 7,
  border: "none",
  outline: "none",
  position: "relative",
  paddingInline: 11,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
var useStyles = (0, react_jss_1.createUseStyles)(
  function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return {
      "@keyframes ripple": {
        to: {
          opacity: 0,
          transform: "scale(2)",
        },
      },
      button: __assign(__assign({}, button), {
        "&--small": {
          height: 32,
        },
        "&--middle": {
          height: 40,
        },
      }),
      buttonMain: __assign(__assign({}, button), {
        backgroundColor:
          (_a = theme.button) === null || _a === void 0 ? void 0 : _a.main,
        color: "white",
      }),
      buttonSuccess: __assign(__assign({}, button), {
        backgroundColor:
          (_b = theme.button) === null || _b === void 0 ? void 0 : _b.success,
        color: "white",
      }),
      buttonDanger: __assign(__assign({}, button), {
        backgroundColor:
          (_c = theme.button) === null || _c === void 0 ? void 0 : _c.danger,
        color: "white",
      }),
      ghostMain: __assign(__assign({}, button), {
        border: "2px solid ".concat(
          (_d = theme.button) === null || _d === void 0 ? void 0 : _d.main,
        ),
        color: (_e = theme.button) === null || _e === void 0 ? void 0 : _e.main,
        backgroundColor: "white",
      }),
      ghostSuccess: __assign(__assign({}, button), {
        border: "2px solid ".concat(
          (_f = theme.button) === null || _f === void 0 ? void 0 : _f.success,
        ),
        color:
          (_g = theme.button) === null || _g === void 0 ? void 0 : _g.success,
        backgroundColor: "white",
      }),
      ghostDanger: __assign(__assign({}, button), {
        border: "2px solid ".concat(
          (_h = theme.button) === null || _h === void 0 ? void 0 : _h.danger,
        ),
        color:
          (_j = theme.button) === null || _j === void 0 ? void 0 : _j.danger,
        backgroundColor: "white",
      }),
      cover: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        top: 0,
        left: 0,
        opacity: 0.3,
        cursor: "notAllowd",
      },
      ripple: {
        transform: "scale(0)",
        borderRadius: "100%",
        position: "absolute",
        opacity: 0.4,
        backgroundColor: "white",
        animation: "$ripple 750ms",
      },
      textContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      loadingContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      },
    };
  },
  { theming: theme_1.theming, name: "button" },
);
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map
