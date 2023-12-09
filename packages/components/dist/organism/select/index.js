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
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName =
  "D:/project/shakil-design-release/packages/components/src/organism/select/index.tsx";
var react_1 = require("react");
var react_dom_1 = __importDefault(require("react-dom"));
var react_popper_1 = require("react-popper");
var atoms_1 = require("../../atoms");
var textInput_1 = require("../../molecules/textInput");
var utils_1 = require("@shakil-design/utils");
var style_1 = require("./style");
var classnames_1 = __importDefault(require("classnames"));
var fleshIcon_1 = require("./components/fleshIcon");
var multiSelect_1 = require("./components/list/multiSelect");
var singleSelect_1 = require("./components/list/singleSelect");
var Select = function (_a) {
  var data = _a.data,
    propValue = _a.value,
    _b = _a.labelExtractor,
    labelExtractor =
      _b === void 0
        ? function (item) {
            return item.label;
          }
        : _b,
    _c = _a.valueExtractor,
    valueExtractor =
      _c === void 0
        ? function (item) {
            return item.value;
          }
        : _c,
    onChange = _a.onChange,
    onClear = _a.onClear,
    disabled = _a.disabled,
    allowClear = _a.allowClear,
    AddonAfter = _a.AddonAfter,
    addonAfterClassName = _a.addonAfterClassName,
    addonAfterStyle = _a.addonAfterStyle,
    addonBefore = _a.addonBefore,
    addonBeforeClassName = _a.addonBeforeClassName,
    addonBeforeStyle = _a.addonBeforeStyle,
    className = _a.className,
    onBlur = _a.onBlur,
    onFocus = _a.onFocus,
    placeholder = _a.placeholder,
    style = _a.style,
    wrapperClassName = _a.wrapperClassName,
    wrapperStyle = _a.wrapperStyle,
    popupClassName = _a.popupClassName,
    popupStyles = _a.popupStyles,
    multiple = _a.multiple,
    onSearch = _a.onSearch,
    _d = _a.hasSearch,
    hasSearch = _d === void 0 ? true : _d,
    onMouseEnter = _a.onMouseEnter,
    onMouseLeave = _a.onMouseLeave,
    testid = _a.testid,
    errorMessage = _a.errorMessage,
    errorMessageClassName = _a.errorMessageClassName,
    hasError = _a.hasError;
  var classes = (0, style_1.useStyles)();
  var _e = (0, react_1.useState)(null),
    internalValue = _e[0],
    setInternalValue = _e[1];
  var body = (0, react_1.useRef)(null);
  var _f = (0, react_1.useState)(0),
    width = _f[0],
    setWidth = _f[1];
  var _g = (0, react_1.useState)(false),
    isVisible = _g[0],
    setVisible = _g[1];
  var _h = (0, react_1.useState)(""),
    searchValue = _h[0],
    setSearchValue = _h[1];
  var _j = (0, react_1.useState)(null),
    referenceElement = _j[0],
    setReferenceElement = _j[1];
  var _k = (0, react_1.useState)(null),
    popperElement = _k[0],
    setPopperElement = _k[1];
  var _l = (0, react_popper_1.usePopper)(referenceElement, popperElement, {
      placement: "bottom",
      strategy: "fixed",
      modifiers: [{ name: "offset", options: { offset: [0, 2] } }],
    }),
    poperStyles = _l.styles,
    attributes = _l.attributes;
  (0, react_1.useEffect)(function () {
    body.current = document.body;
  }, []);
  (0, react_1.useEffect)(
    function () {
      setInternalValue(null);
    },
    [multiple],
  );
  (0, react_1.useEffect)(
    function () {
      setInternalValue(propValue);
    },
    [propValue],
  );
  var handleOnClick = function () {
    if (disabled) return;
    setVisible(function (prev) {
      return !prev;
    });
  };
  var handleRefOfRefrenceElement = function (node) {
    setWidth(
      node === null || node === void 0
        ? void 0
        : node.getBoundingClientRect().width,
    );
    setReferenceElement(node);
  };
  var handleOnChange = function (selectedItemValue) {
    if (multiple) {
      var alreadyExist = (internalValue || []).find(function (item) {
        return item === selectedItemValue;
      });
      if (alreadyExist) {
        var items = (internalValue || []).filter(function (item) {
          return item !== selectedItemValue;
        });
        onChange === null || onChange === void 0 ? void 0 : onChange(items);
        !propValue && setInternalValue(items);
      } else {
        onChange === null || onChange === void 0
          ? void 0
          : onChange(
              __spreadArray(
                __spreadArray([], internalValue || [], true),
                [selectedItemValue],
                false,
              ),
            );
        !propValue &&
          setInternalValue(
            __spreadArray(
              __spreadArray([], internalValue || [], true),
              [selectedItemValue],
              false,
            ),
          );
      }
      return;
    }
    !propValue && setInternalValue(selectedItemValue);
    onChange === null || onChange === void 0
      ? void 0
      : onChange(selectedItemValue);
    setVisible(false);
  };
  var handleOnClear = function () {
    setInternalValue(null);
    setVisible(false);
    onClear === null || onClear === void 0 ? void 0 : onClear();
    onChange === null || onChange === void 0 ? void 0 : onChange(null);
  };
  (0, utils_1.useOnClickOutSide)({
    element: popperElement,
    extraElement: referenceElement,
    handler: function () {
      setVisible(false);
    },
  });
  var displayValue = "";
  if (multiple) {
    displayValue =
      Array.isArray(internalValue) && internalValue.length
        ? "".concat(
            internalValue === null || internalValue === void 0
              ? void 0
              : internalValue.length,
            " Items Selected",
          )
        : "";
  } else {
    var value = data.find(function (item) {
      return valueExtractor(item) === internalValue;
    });
    displayValue = value ? labelExtractor(value) : "";
  }
  return (0, jsx_dev_runtime_1.jsxDEV)(
    jsx_dev_runtime_1.Fragment,
    {
      children: [
        (0, jsx_dev_runtime_1.jsxDEV)(
          textInput_1.TextInput,
          __assign(
            {},
            {
              AddonAfter: AddonAfter,
              addonAfterClassName: addonAfterClassName,
              addonAfterStyle: addonAfterStyle,
              addonBefore: addonBefore,
              addonBeforeClassName: addonBeforeClassName,
              addonBeforeStyle: addonBeforeStyle,
              className: className,
              onBlur: onBlur,
              onFocus: onFocus,
              wrapperClassName: wrapperClassName,
              wrapperStyle: wrapperStyle,
              onMouseEnter: onMouseEnter,
              onMouseLeave: onMouseLeave,
              errorMessage: errorMessage,
              errorMessageClassName: errorMessageClassName,
              hasError: hasError,
              testID:
                testid === null || testid === void 0 ? void 0 : testid.input,
            },
            {
              onClear: handleOnClear,
              ref: handleRefOfRefrenceElement,
              onClick: handleOnClick,
              value: displayValue,
              style: __assign({}, style),
              className: classes["textInput"],
              placeholder: placeholder,
              allowClear: allowClear,
              AddonAfter: (0, jsx_dev_runtime_1.jsxDEV)(
                fleshIcon_1.FleshIcon,
                { isVisible: isVisible },
                void 0,
                false,
                { fileName: _jsxFileName, lineNumber: 172, columnNumber: 21 },
                _this,
              ),
            },
          ),
          void 0,
          false,
          { fileName: _jsxFileName, lineNumber: 142, columnNumber: 7 },
          _this,
        ),
        body.current && isVisible
          ? react_dom_1.default.createPortal(
              (0, jsx_dev_runtime_1.jsxDEV)(
                jsx_dev_runtime_1.Fragment,
                {
                  children: (0, jsx_dev_runtime_1.jsxDEV)(
                    "div",
                    __assign(
                      { ref: setPopperElement, style: poperStyles.popper },
                      attributes.popper,
                      {
                        children: (0, jsx_dev_runtime_1.jsxDEV)(
                          "div",
                          __assign(
                            {
                              "data-testid":
                                testid === null || testid === void 0
                                  ? void 0
                                  : testid.overlay,
                              style: __assign({ width: width }, popupStyles),
                              className: (0, classnames_1.default)(
                                popupClassName,
                                classes["overlay"],
                              ),
                            },
                            {
                              children: [
                                hasSearch
                                  ? (0, jsx_dev_runtime_1.jsxDEV)(
                                      "div",
                                      __assign(
                                        { className: classes["inputWrapper"] },
                                        {
                                          children: (0,
                                          jsx_dev_runtime_1.jsxDEV)(
                                            textInput_1.TextInput,
                                            {
                                              value: searchValue,
                                              placeholder: "Search",
                                              AddonAfter: (0,
                                              jsx_dev_runtime_1.jsxDEV)(
                                                atoms_1.BaseIcon,
                                                {
                                                  color: "#d1d1d1",
                                                  name: "Search-Box_Search-Icon",
                                                  size: {
                                                    height: 15,
                                                    width: 15,
                                                  },
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 193,
                                                  columnNumber: 37,
                                                },
                                                _this,
                                              ),
                                              onChangeText: function (value) {
                                                onSearch === null ||
                                                onSearch === void 0
                                                  ? void 0
                                                  : onSearch(value);
                                                setSearchValue(value);
                                              },
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 190,
                                              columnNumber: 23,
                                            },
                                            _this,
                                          ),
                                        },
                                      ),
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 188,
                                        columnNumber: 33,
                                      },
                                      _this,
                                    )
                                  : null,
                                multiple
                                  ? (0, jsx_dev_runtime_1.jsxDEV)(
                                      multiSelect_1.MultiSelectList,
                                      {
                                        data: data,
                                        labelExtractor: labelExtractor,
                                        valueExtractor: valueExtractor,
                                        internalValue: internalValue,
                                        onClick: handleOnChange,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 208,
                                        columnNumber: 32,
                                      },
                                      _this,
                                    )
                                  : (0, jsx_dev_runtime_1.jsxDEV)(
                                      singleSelect_1.SingleSelectList,
                                      {
                                        data: data,
                                        labelExtractor: labelExtractor,
                                        valueExtractor: valueExtractor,
                                        internalValue: internalValue,
                                        onClick: handleOnChange,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 216,
                                        columnNumber: 24,
                                      },
                                      _this,
                                    ),
                              ],
                            },
                          ),
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 183,
                            columnNumber: 17,
                          },
                          _this,
                        ),
                      },
                    ),
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 178,
                      columnNumber: 15,
                    },
                    _this,
                  ),
                },
                void 0,
                false,
                { fileName: _jsxFileName, lineNumber: 176, columnNumber: 33 },
                _this,
              ),
              body.current,
            )
          : null,
      ],
    },
    void 0,
    true,
    { fileName: _jsxFileName, lineNumber: 140, columnNumber: 11 },
    _this,
  );
};
exports.Select = Select;
//# sourceMappingURL=index.js.map
