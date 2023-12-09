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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBox = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName =
  "D:/project/shakil-design-release/packages/components/src/molecules/checkbox/index.tsx";
var text_1 = require("../../atoms/text");
var indeterminate_1 = require("./indeterminate");
var customSquare_1 = require("./customSquare");
var style_1 = require("./style");
var classnames_1 = __importDefault(require("classnames"));
var CheckBox = function (_a) {
  var checked = _a.checked,
    value = _a.value,
    onChange = _a.onChange,
    children = _a.children,
    name = _a.name,
    indeterminate = _a.indeterminate,
    rest = __rest(_a, [
      "checked",
      "value",
      "onChange",
      "children",
      "name",
      "indeterminate",
    ]);
  var classes = (0, style_1.useStyles)();
  var onChangeHandler = function (e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
  };
  return (0, jsx_dev_runtime_1.jsxDEV)(
    "label",
    __assign(
      { className: classes["label"] },
      {
        children: [
          (0, jsx_dev_runtime_1.jsxDEV)(
            "div",
            __assign(
              {
                "data-is-checked": checked,
                className: (0, classnames_1.default)(
                  classes["check-box-wrapper"],
                  typeof children !== "undefined" &&
                    "".concat(classes["check-box-wrapper"], "--with-label"),
                ),
              },
              {
                children: [
                  indeterminate
                    ? (0, jsx_dev_runtime_1.jsxDEV)(
                        indeterminate_1.Indeterminate,
                        {},
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 38,
                          columnNumber: 25,
                        },
                        _this,
                      )
                    : (0, jsx_dev_runtime_1.jsxDEV)(
                        customSquare_1.CustomSquare,
                        { checked: checked },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 38,
                          columnNumber: 45,
                        },
                        _this,
                      ),
                  (0, jsx_dev_runtime_1.jsxDEV)(
                    "input",
                    __assign(
                      {
                        className: classes["hiddenInput"],
                        type: "checkbox",
                        value: value,
                        name: name,
                        "data-is-checked": checked,
                        checked: checked,
                        onChange: onChangeHandler,
                      },
                      rest,
                    ),
                    void 0,
                    false,
                    { fileName: _jsxFileName, lineNumber: 40, columnNumber: 9 },
                    _this,
                  ),
                ],
              },
            ),
            void 0,
            true,
            { fileName: _jsxFileName, lineNumber: 30, columnNumber: 7 },
            _this,
          ),
          typeof children === "string"
            ? (0, jsx_dev_runtime_1.jsxDEV)(
                text_1.Text,
                { children: children },
                void 0,
                false,
                { fileName: _jsxFileName, lineNumber: 52, columnNumber: 38 },
                _this,
              )
            : children,
        ],
      },
    ),
    void 0,
    true,
    { fileName: _jsxFileName, lineNumber: 28, columnNumber: 11 },
    _this,
  );
};
exports.CheckBox = CheckBox;
//# sourceMappingURL=index.js.map
