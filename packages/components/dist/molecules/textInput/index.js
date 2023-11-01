"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/textInput/index.tsx";
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const reactjs_view_core_1 = require("reactjs-view-core");
const style_1 = require("./style");
const TextInputState_1 = __importDefault(require("./TextInputState"));
const style_2 = require("../../atoms/text/style");
const utils_1 = require("@shakil-design/utils");
const atoms_1 = require("../../atoms");
const react_1 = require("react");
/**
 * Determines whether a 'selection' prop differs from a node's existing
 * selection state.
 */
const isSelectionStale = (node, selection) => {
    const { selectionEnd, selectionStart } = node;
    const { start, end } = selection;
    return start !== selectionStart || end !== selectionEnd;
};
/**
 * Certain input types do no support 'selectSelectionRange' and will throw an
 * error.
 */
const setSelection = (node, selection) => {
    if (isSelectionStale(node, selection)) {
        const { start, end } = selection;
        try {
            node.setSelectionRange(start, end || start);
        }
        catch (e) { }
    }
};
// If an Input Method Editor is processing key input, the 'keyCode' is 229.
// https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
function isEventComposing(nativeEvent) {
    return nativeEvent.isComposing || nativeEvent.keyCode === 229;
}
const TextInput = React.forwardRef((_a, forwardedRef) => {
    var { autoCapitalize = "sentences", autoComplete, autoCompleteType, autoCorrect = true, blurOnSubmit, clearTextOnFocus, editable = true, keyboardType = "default", multiline = false, numberOfLines = 1, onBlur, onChange, onChangeText, onContentSizeChange, onFocus, onKeyPress, onSelectionChange, onSubmitEditing, returnKeyType, secureTextEntry = false, selection, selectTextOnFocus, spellCheck, className, testID, disabled, theme, unit = "viewport", AddonAfter, addonBefore, addonAfterClassName, addonBeforeClassName, addonAfterStyle, addonBeforeStyle, value, onClear, wrapperStyle, allowClear } = _a, rest = __rest(_a, ["autoCapitalize", "autoComplete", "autoCompleteType", "autoCorrect", "blurOnSubmit", "clearTextOnFocus", "editable", "keyboardType", "multiline", "numberOfLines", "onBlur", "onChange", "onChangeText", "onContentSizeChange", "onFocus", "onKeyPress", "onSelectionChange", "onSubmitEditing", "returnKeyType", "secureTextEntry", "selection", "selectTextOnFocus", "spellCheck", "className", "testID", "disabled", "theme", "unit", "AddonAfter", "addonBefore", "addonAfterClassName", "addonBeforeClassName", "addonAfterStyle", "addonBeforeStyle", "value", "onClear", "wrapperStyle", "allowClear"]);
    const classes = (0, style_1.useStyles)();
    const [isHover, setIsHover] = (0, react_1.useState)(false);
    let type;
    let inputMode;
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
    const dimensions = React.useRef({ height: 0, width: 0 });
    const hostRef = React.useRef(null);
    const handleContentSizeChange = React.useCallback((hostNode) => {
        if (multiline && onContentSizeChange && hostNode != null) {
            const newHeight = hostNode.scrollHeight;
            const newWidth = hostNode.scrollWidth;
            if (newHeight !== dimensions.current.height ||
                newWidth !== dimensions.current.width) {
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
    }, [multiline, onContentSizeChange]);
    const imperativeRef = React.useMemo(() => (hostNode) => {
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
                return (hostNode != null &&
                    TextInputState_1.default.currentlyFocusedField() === hostNode);
            };
            handleContentSizeChange(hostNode);
        }
    }, [handleContentSizeChange]);
    function handleBlur(e) {
        TextInputState_1.default._currentlyFocusedNode = null;
        if (onBlur) {
            //@ts-ignore
            e.nativeEvent.text = e.target.value;
            onBlur(e);
        }
    }
    function handleChange(e) {
        const hostNode = e.target;
        const text = hostNode.value;
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
        const hostNode = e.target;
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
                setTimeout(() => {
                    hostNode.select();
                }, 0);
            }
        }
    }
    function handleKeyDown(e) {
        const hostNode = e.target;
        // Prevent key events bubbling (see #612)
        e.stopPropagation();
        const isBlurOnSubmitDefault = !multiline;
        const shouldBlurOnSubmit = blurOnSubmit == null ? isBlurOnSubmitDefault : blurOnSubmit;
        const nativeEvent = e.nativeEvent;
        const isComposing = isEventComposing(nativeEvent);
        if (onKeyPress) {
            onKeyPress(e);
        }
        if (e.key === "Enter" &&
            !e.shiftKey &&
            // Do not call submit if composition is occuring.
            !isComposing &&
            !e.isDefaultPrevented()) {
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
    const handleSelectionChange = (e) => {
        if (onSelectionChange) {
            try {
                const _e = e;
                const node = _e.target;
                const { selectionStart, selectionEnd } = node;
                const nativeEvent = _e.nativeEvent;
                nativeEvent.selection = {
                    start: selectionStart,
                    end: selectionEnd,
                };
                nativeEvent.text = node.value;
                onSelectionChange(_e);
            }
            catch (_e) { }
        }
    };
    const onMouseEnter = () => {
        setIsHover(true);
    };
    const onMouseLeave = () => {
        setIsHover(false);
    };
    React.useEffect(() => {
        const node = hostRef.current;
        if (node && selection) {
            setSelection(node, selection);
        }
        if (document.activeElement === node) {
            TextInputState_1.default._currentlyFocusedNode = node;
        }
    }, [hostRef, selection]);
    const supportedProps = rest;
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
    // supportedProps.style = style;
    supportedProps.type = (multiline ? undefined : type);
    supportedProps.inputMode = inputMode;
    const setRef = (0, reactjs_view_core_1.composeRef)(hostRef, imperativeRef, forwardedRef);
    const themes = (0, style_2.useFonts)();
    const _height = unit === "viewport" ? (0, utils_1.pxToVhString)(32) : 32;
    const _borderRadius = unit === "viewport" ? (0, utils_1.pxToVhString)(7) : 7;
    const _paddingBlock = unit === "viewport" ? (0, utils_1.pxToVhString)(8) : 8;
    const _paddingInline = unit === "viewport" ? (0, utils_1.pxToVhString)(10) : 10;
    const _fontSize = unit === "viewport" ? (0, utils_1.pxToVhString)(14) : 14;
    const _clearIconSize = unit === "viewport" ? (0, utils_1.pxToVh)(9) : 9;
    const _value = value === null || value === undefined ? "" : value;
    const _clearIcon = typeof allowClear === "object"
        ? allowClear
        : typeof allowClear === "boolean" && ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { onClick: onClear, wrapperStyle: {
                cursor: "pointer",
                visibility: isHover && _value ? "visible" : "hidden",
            }, name: "Every-Boxes-_-Cross-Icon", unit: unit, size: { height: _clearIconSize, width: _clearIconSize } }, void 0, false, { fileName: _jsxFileName, lineNumber: 363, columnNumber: 47 }, this));
    const addOnAfterIcon = isHover && _value && allowClear
        ? _clearIcon
        : AddonAfter
            ? AddonAfter
            : null;
    return multiline ? ((0, jsx_dev_runtime_1.jsxDEV)("textarea", Object.assign({ ref: setRef }, supportedProps), void 0, false, { fileName: _jsxFileName, lineNumber: 383, columnNumber: 25 }, this)) : ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, className: classes["inputWrapper"], style: wrapperStyle }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("input", Object.assign({}, supportedProps, { value: _value, className: (0, classnames_1.default)(classes["textInput"], disabled && classes.disabled, themes[theme || "Regular"], className), ref: setRef, type: rest.type, disabled: disabled, style: Object.assign({ height: _height, borderRadius: _borderRadius, paddingInline: _paddingInline, paddingBlock: _paddingBlock, fontSize: _fontSize }, supportedProps.style) }), void 0, false, { fileName: _jsxFileName, lineNumber: 395, columnNumber: 9 }, this), addonBefore ? ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: (0, classnames_1.default)(classes["addonBefore"], addonBeforeClassName && addonBeforeClassName), style: addonBeforeStyle }, { children: addonBefore }), void 0, false, { fileName: _jsxFileName, lineNumber: 416, columnNumber: 25 }, this)) : null, addOnAfterIcon ? ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: (0, classnames_1.default)(classes["addonAfter"], addonAfterClassName && addonAfterClassName) }, { children: addOnAfterIcon }), void 0, false, { fileName: _jsxFileName, lineNumber: 428, columnNumber: 28 }, this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 388, columnNumber: 10 }, this));
});
exports.TextInput = TextInput;
TextInput.displayName = "TextInput";
//# sourceMappingURL=index.js.map