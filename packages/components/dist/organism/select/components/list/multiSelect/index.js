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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSelectList = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName =
  "D:/project/shakil-design-release/packages/components/src/organism/select/components/list/multiSelect/index.tsx";
var atoms_1 = require("../../../../../atoms");
var option_1 = require("../../option");
var theme_1 = require("../../../../../theme");
var useTheme = theme_1.theming.useTheme;
var MultiSelectList = function (_a) {
  var _b;
  var data = _a.data,
    labelExtractor = _a.labelExtractor,
    valueExtractor = _a.valueExtractor,
    onClick = _a.onClick,
    internalValue = _a.internalValue;
  var disableText = useTheme().disableText;
  var isNotSelectedItems = data.filter(function (item) {
    var _a;
    return !((_a = internalValue || []) === null || _a === void 0
      ? void 0
      : _a.find(function (_item) {
          return (
            (valueExtractor === null || valueExtractor === void 0
              ? void 0
              : valueExtractor(item)) === _item
          );
        }));
  });
  return (0, jsx_dev_runtime_1.jsxDEV)(
    atoms_1.ScrollView,
    __assign(
      { style: { flex: 1 } },
      {
        children: [
          (_b = internalValue || []) === null || _b === void 0
            ? void 0
            : _b.map(function (item) {
                var selectedItem = data.find(function (_item) {
                  return (
                    (valueExtractor === null || valueExtractor === void 0
                      ? void 0
                      : valueExtractor(_item)) === item
                  );
                });
                return (0, jsx_dev_runtime_1.jsxDEV)(
                  option_1.Option,
                  __assign(
                    {
                      multiple: true,
                      isSelected: true,
                      value: {
                        label: item,
                        value: item,
                      },
                      onClick: onClick,
                    },
                    {
                      children:
                        selectedItem &&
                        (labelExtractor === null || labelExtractor === void 0
                          ? void 0
                          : labelExtractor(selectedItem)),
                    },
                  ),
                  item,
                  false,
                  { fileName: _jsxFileName, lineNumber: 29, columnNumber: 17 },
                  _this,
                );
              }),
          (internalValue || []).length
            ? (0, jsx_dev_runtime_1.jsxDEV)(
                "div",
                { style: { height: 1, backgroundColor: disableText } },
                void 0,
                false,
                { fileName: _jsxFileName, lineNumber: 45, columnNumber: 53 },
                _this,
              )
            : null,
          isNotSelectedItems.map(function (item) {
            var isSelected =
              Array.isArray(internalValue) &&
              Boolean(
                internalValue.find(function (_item) {
                  return (
                    _item ===
                    (valueExtractor === null || valueExtractor === void 0
                      ? void 0
                      : valueExtractor(item))
                  );
                }),
              );
            return (0, jsx_dev_runtime_1.jsxDEV)(
              option_1.Option,
              __assign(
                {
                  multiple: true,
                  isSelected: isSelected,
                  value: {
                    label:
                      (labelExtractor === null || labelExtractor === void 0
                        ? void 0
                        : labelExtractor(item)) || "",
                    value:
                      valueExtractor === null || valueExtractor === void 0
                        ? void 0
                        : valueExtractor(item),
                  },
                  onClick: onClick,
                },
                {
                  children:
                    labelExtractor === null || labelExtractor === void 0
                      ? void 0
                      : labelExtractor(item),
                },
              ),
              valueExtractor === null || valueExtractor === void 0
                ? void 0
                : valueExtractor(item),
              false,
              { fileName: _jsxFileName, lineNumber: 56, columnNumber: 17 },
              _this,
            );
          }),
        ],
      },
    ),
    void 0,
    true,
    { fileName: _jsxFileName, lineNumber: 23, columnNumber: 11 },
    _this,
  );
};
exports.MultiSelectList = MultiSelectList;
//# sourceMappingURL=index.js.map
