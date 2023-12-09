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
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.TextInput = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName =
  "D:/project/shakil-design-release/packages/components/src/molecules/textInput/index.tsx";
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var reactjs_view_core_1 = require("reactjs-view-core");
var style_1 = require("./style");
var TextInputState_1 = __importDefault(require("./TextInputState"));
var style_2 = require("../../atoms/text/style");
var atoms_1 = require("../../atoms");
var react_1 = require("react");
var theme_1 = require("../../theme");
var useTheme = theme_1.theming.useTheme;
/**
 * Determines whether a 'selection' prop differs from a node's existing
 * selection state.
 */
var isSelectionStale = function (node, selection) {
  var selectionEnd = node.selectionEnd,
    selectionStart = node.selectionStart;
  var start = selection.start,
    end = selection.end;
  return start !== selectionStart || end !== selectionEnd;
};
/**
 * Certain input types do no support 'selectSelectionRange' and will throw an
 * error.
 */
var setSelection = function (node, selection) {
  if (isSelectionStale(node, selection)) {
    var start = selection.start,
      end = selection.end;
    try {
      node.setSelectionRange(start, end || start);
    } catch (e) {}
  }
};
// If an Input Method Editor is processing key input, the 'keyCode' is 229.
// https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
function isEventComposing(nativeEvent) {
  return nativeEvent.isComposing || nativeEvent.keyCode === 229;
}
var TextInput = React.forwardRef(function (_a, forwardedRef) {
  var _b;
  var _c = _a.autoCapitalize,
    autoCapitalize = _c === void 0 ? "sentences" : _c,
    autoComplete = _a.autoComplete,
    autoCompleteType = _a.autoCompleteType,
    _d = _a.autoCorrect,
    autoCorrect = _d === void 0 ? true : _d,
    blurOnSubmit = _a.blurOnSubmit,
    clearTextOnFocus = _a.clearTextOnFocus,
    _f = _a.editable,
    editable = _f === void 0 ? true : _f,
    _g = _a.keyboardType,
    keyboardType = _g === void 0 ? "default" : _g,
    _h = _a.multiline,
    multiline = _h === void 0 ? false : _h,
    _j = _a.numberOfLines,
    numberOfLines = _j === void 0 ? 1 : _j,
    onBlur = _a.onBlur,
    onChange = _a.onChange,
    onChangeText = _a.onChangeText,
    onContentSizeChange = _a.onContentSizeChange,
    onFocus = _a.onFocus,
    onKeyPress = _a.onKeyPress,
    onSelectionChange = _a.onSelectionChange,
    onSubmitEditing = _a.onSubmitEditing,
    returnKeyType = _a.returnKeyType,
    _k = _a.secureTextEntry,
    secureTextEntry = _k === void 0 ? false : _k,
    selection = _a.selection,
    selectTextOnFocus = _a.selectTextOnFocus,
    spellCheck = _a.spellCheck,
    className = _a.className,
    testID = _a.testID,
    disabled = _a.disabled,
    theme = _a.theme,
    AddonAfter = _a.AddonAfter,
    addonBefore = _a.addonBefore,
    addonAfterClassName = _a.addonAfterClassName,
    addonBeforeClassName = _a.addonBeforeClassName,
    addonAfterStyle = _a.addonAfterStyle,
    addonBeforeStyle = _a.addonBeforeStyle,
    value = _a.value,
    onClear = _a.onClear,
    wrapperStyle = _a.wrapperStyle,
    allowClear = _a.allowClear,
    wrapperClassName = _a.wrapperClassName,
    errorMessage = _a.errorMessage,
    errorMessageClassName = _a.errorMessageClassName,
    hasError = _a.hasError,
    rest = __rest(_a, [
      "autoCapitalize",
      "autoComplete",
      "autoCompleteType",
      "autoCorrect",
      "blurOnSubmit",
      "clearTextOnFocus",
      "editable",
      "keyboardType",
      "multiline",
      "numberOfLines",
      "onBlur",
      "onChange",
      "onChangeText",
      "onContentSizeChange",
      "onFocus",
      "onKeyPress",
      "onSelectionChange",
      "onSubmitEditing",
      "returnKeyType",
      "secureTextEntry",
      "selection",
      "selectTextOnFocus",
      "spellCheck",
      "className",
      "testID",
      "disabled",
      "theme",
      "AddonAfter",
      "addonBefore",
      "addonAfterClassName",
      "addonBeforeClassName",
      "addonAfterStyle",
      "addonBeforeStyle",
      "value",
      "onClear",
      "wrapperStyle",
      "allowClear",
      "wrapperClassName",
      "errorMessage",
      "errorMessageClassName",
      "hasError",
    ]);
  var classes = (0, style_1.useStyles)();
  var _l = (0, react_1.useState)(false),
    isHover = _l[0],
    setIsHover = _l[1];
  var Colors = useTheme();
  var type;
  var inputMode;
  switch (keyboardType) {
    case "email-address":
      type = "email";
      break;
    case "number-pad":
    case "numeric":
      inputMode = "numeric";
      type = "number";
      break;
    case "decimal-pad":
      inputMode = "decimal";
      break;
    case "phone-pad":
      type = "tel";
      break;
    case "search":
    case "web-search":
      type = "search";
      break;
    case "url":
      type = "url";
      break;
    default:
      type = "text";
  }
  if (secureTextEntry) {
    type = "password";
  }
  var dimensions = React.useRef({ height: 0, width: 0 });
  var hostRef = React.useRef(null);
  var handleContentSizeChange = React.useCallback(
    function (hostNode) {
      if (multiline && onContentSizeChange && hostNode != null) {
        var newHeight = hostNode.scrollHeight;
        var newWidth = hostNode.scrollWidth;
        if (
          newHeight !== dimensions.current.height ||
          newWidth !== dimensions.current.width
        ) {
          dimensions.current.height = newHeight;
          dimensions.current.width = newWidth;
          onContentSizeChange({
            nativeEvent: {
              contentSize: {
                height: dimensions.current.height,
                width: dimensions.current.width,
              },
            },
          });
        }
      }
    },
    [multiline, onContentSizeChange],
  );
  var imperativeRef = React.useMemo(
    function () {
      return function (hostNode) {
        // TextInput needs to add more methods to the hostNode in addition to those
        // added by `usePlatformMethods`. This is temporarily until an API like
        // `TextInput.clear(hostRef)` is added to React Native.
        if (hostNode != null) {
          hostNode.clear = function () {
            if (hostNode != null) {
              hostNode.value = "";
            }
          };
          hostNode.isFocused = function () {
            return (
              hostNode != null &&
              TextInputState_1.default.currentlyFocusedField() === hostNode
            );
          };
          handleContentSizeChange(hostNode);
        }
      };
    },
    [handleContentSizeChange],
  );
  function handleBlur(e) {
    TextInputState_1.default._currentlyFocusedNode = null;
    if (onBlur) {
      //@ts-ignore
      e.nativeEvent.text = e.target.value;
      onBlur(e);
    }
  }
  function handleChange(e) {
    var hostNode = e.target;
    var text = hostNode.value;
    //@ts-ignore
    e.nativeEvent.text = text;
    handleContentSizeChange(hostNode);
    if (onChange) {
      onChange(e);
    }
    if (onChangeText) {
      onChangeText(text);
    }
  }
  function handleFocus(e) {
    var hostNode = e.target;
    if (onFocus) {
      //@ts-ignore
      e.nativeEvent.text = hostNode.value;
      onFocus(e);
    }
    if (hostNode != null) {
      TextInputState_1.default._currentlyFocusedNode = hostNode;
      if (clearTextOnFocus) {
        hostNode.value = "";
      }
      if (selectTextOnFocus) {
        // Safari requires selection to occur in a setTimeout
        setTimeout(function () {
          hostNode.select();
        }, 0);
      }
    }
  }
  function handleKeyDown(e) {
    var hostNode = e.target;
    // Prevent key events bubbling (see #612)
    e.stopPropagation();
    var isBlurOnSubmitDefault = !multiline;
    var shouldBlurOnSubmit =
      blurOnSubmit == null ? isBlurOnSubmitDefault : blurOnSubmit;
    var nativeEvent = e.nativeEvent;
    var isComposing = isEventComposing(nativeEvent);
    if (onKeyPress) {
      onKeyPress(e);
    }
    if (
      e.key === "Enter" &&
      !e.shiftKey &&
      // Do not call submit if composition is occuring.
      !isComposing &&
      !e.isDefaultPrevented()
    ) {
      if ((blurOnSubmit || !multiline) && onSubmitEditing) {
        // prevent "Enter" from inserting a newline or submitting a form
        e.preventDefault();
        //@ts-ignore
        nativeEvent.text = e.target.value;
        onSubmitEditing(e);
      }
      if (shouldBlurOnSubmit && hostNode != null) {
        //@ts-ignore
        hostNode.blur();
      }
    }
  }
  var handleSelectionChange = function (e) {
    if (onSelectionChange) {
      try {
        var _e = e;
        var node = _e.target;
        var selectionStart = node.selectionStart,
          selectionEnd = node.selectionEnd;
        var nativeEvent = _e.nativeEvent;
        nativeEvent.selection = {
          start: selectionStart,
          end: selectionEnd,
        };
        nativeEvent.text = node.value;
        onSelectionChange(_e);
      } catch (_e) {}
    }
  };
  var onMouseEnter = function () {
    setIsHover(true);
  };
  var onMouseLeave = function () {
    setIsHover(false);
  };
  React.useEffect(
    function () {
      var node = hostRef.current;
      if (node && selection) {
        setSelection(node, selection);
      }
      if (document.activeElement === node) {
        TextInputState_1.default._currentlyFocusedNode = node;
      }
    },
    [hostRef, selection],
  );
  var supportedProps = rest;
  supportedProps.value;
  supportedProps.autoCapitalize = autoCapitalize;
  supportedProps.autoComplete = autoComplete || autoCompleteType || "on";
  supportedProps.autoCorrect = autoCorrect ? "on" : "off";
  supportedProps.enterKeyHint = returnKeyType;
  supportedProps.onBlur = handleBlur;
  supportedProps.onChange = handleChange;
  supportedProps.onFocus = handleFocus;
  supportedProps.onKeyDown = handleKeyDown;
  supportedProps.onSelect = handleSelectionChange;
  supportedProps.readOnly = !editable;
  // @ts-ignore
  supportedProps.rows = multiline ? numberOfLines : undefined;
  supportedProps.spellCheck = spellCheck != null ? spellCheck : autoCorrect;
  supportedProps.type = multiline ? undefined : type;
  supportedProps.inputMode = inputMode;
  var setRef = (0, reactjs_view_core_1.composeRef)(
    hostRef,
    imperativeRef,
    forwardedRef,
  );
  var themes = (0, style_2.useFonts)();
  var _value = value === null || value === undefined ? "" : value;
  var _clearIcon =
    typeof allowClear === "object"
      ? allowClear
      : typeof allowClear === "boolean" &&
        (0, jsx_dev_runtime_1.jsxDEV)(
          atoms_1.BaseIcon,
          {
            wrapperClassName:
              isHover && _value
                ? classes["clear--visible"]
                : classes["clear--hidden"],
            onClick: onClear,
            name: "Every-Boxes-_-Cross-Icon",
            size: { height: 12, width: 12 },
          },
          void 0,
          false,
          { fileName: _jsxFileName, lineNumber: 362, columnNumber: 47 },
          _this,
        );
  var addOnAfterIcon =
    isHover && _value && allowClear
      ? _clearIcon
      : AddonAfter
      ? AddonAfter
      : null;
  return multiline
    ? (0, jsx_dev_runtime_1.jsxDEV)(
        "textarea",
        __assign(
          {
            className: (0, classnames_1.default)(
              classes["text-area"],
              disabled && classes.disabled,
              (hasError || errorMessage) && classes["input-with-error"],
              themes[theme || "Regular"],
              className,
            ),
            ref: setRef,
          },
          supportedProps,
        ),
        void 0,
        false,
        { fileName: _jsxFileName, lineNumber: 382, columnNumber: 25 },
        _this,
      )
    : (0, jsx_dev_runtime_1.jsxDEV)(
        "div",
        __assign(
          {
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            className: (0, classnames_1.default)(
              classes["inputWrapper"],
              wrapperClassName && wrapperClassName,
            ),
            style: wrapperStyle,
          },
          {
            children: [
              (0, jsx_dev_runtime_1.jsxDEV)(
                "input",
                __assign({}, supportedProps, {
                  value: _value,
                  className: (0, classnames_1.default)(
                    classes["textInput"],
                    disabled && classes.disabled,
                    (hasError || errorMessage) && classes["input-with-error"],
                    themes[theme || "Regular"],
                    className,
                  ),
                  ref: setRef,
                  type: rest.type,
                  disabled: disabled,
                  "data-testid": supportedProps["data-testid"] || testID,
                  style: __assign({}, supportedProps.style),
                }),
                void 0,
                false,
                { fileName: _jsxFileName, lineNumber: 404, columnNumber: 9 },
                _this,
              ),
              errorMessage
                ? (0, jsx_dev_runtime_1.jsxDEV)(
                    atoms_1.Text,
                    __assign(
                      {
                        className: (0, classnames_1.default)(
                          classes["error-message"],
                          errorMessageClassName,
                        ),
                        color:
                          (_b = Colors.textInput) === null || _b === void 0
                            ? void 0
                            : _b.errorMessage,
                        size: 13,
                      },
                      { children: errorMessage },
                    ),
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 423,
                      columnNumber: 26,
                    },
                    _this,
                  )
                : null,
              addonBefore
                ? (0, jsx_dev_runtime_1.jsxDEV)(
                    "div",
                    __assign(
                      {
                        className: (0, classnames_1.default)(
                          classes["addonBefore"],
                          addonBeforeClassName && addonBeforeClassName,
                        ),
                        style: addonBeforeStyle,
                      },
                      { children: addonBefore },
                    ),
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 435,
                      columnNumber: 25,
                    },
                    _this,
                  )
                : null,
              addOnAfterIcon
                ? (0, jsx_dev_runtime_1.jsxDEV)(
                    "div",
                    __assign(
                      {
                        className: (0, classnames_1.default)(
                          classes["addonAfter"],
                          addonAfterClassName && addonAfterClassName,
                        ),
                      },
                      { children: addOnAfterIcon },
                    ),
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 447,
                      columnNumber: 28,
                    },
                    _this,
                  )
                : null,
            ],
          },
        ),
        void 0,
        true,
        { fileName: _jsxFileName, lineNumber: 394, columnNumber: 10 },
        _this,
      );
});
exports.TextInput = TextInput;
TextInput.displayName = "TextInput";
//# sourceMappingURL=index.js.map
