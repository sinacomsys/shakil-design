var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/textInput/index.tsx";
import classNames from "classnames";
import * as React from "react";
import { composeRef } from "reactjs-view-core";
import { useStyles } from "./style";
import TextInputState from "./TextInputState";
import { useFonts } from "../../atoms/text/style";
import { pxToVh, pxToVhString } from "@shakil-design/utils";
import { BaseIcon } from "../../atoms";
import { useState } from "react";
/**
 * Determines whether a 'selection' prop differs from a node's existing
 * selection state.
 */
var isSelectionStale = function (node, selection) {
    var selectionEnd = node.selectionEnd, selectionStart = node.selectionStart;
    var start = selection.start, end = selection.end;
    return start !== selectionStart || end !== selectionEnd;
};
/**
 * Certain input types do no support 'selectSelectionRange' and will throw an
 * error.
 */
var setSelection = function (node, selection) {
    if (isSelectionStale(node, selection)) {
        var start = selection.start, end = selection.end;
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
var TextInput = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.autoCapitalize, autoCapitalize = _b === void 0 ? "sentences" : _b, autoComplete = _a.autoComplete, autoCompleteType = _a.autoCompleteType, _c = _a.autoCorrect, autoCorrect = _c === void 0 ? true : _c, blurOnSubmit = _a.blurOnSubmit, clearTextOnFocus = _a.clearTextOnFocus, _d = _a.editable, editable = _d === void 0 ? true : _d, _f = _a.keyboardType, keyboardType = _f === void 0 ? "default" : _f, _g = _a.multiline, multiline = _g === void 0 ? false : _g, _h = _a.numberOfLines, numberOfLines = _h === void 0 ? 1 : _h, onBlur = _a.onBlur, onChange = _a.onChange, onChangeText = _a.onChangeText, onContentSizeChange = _a.onContentSizeChange, onFocus = _a.onFocus, onKeyPress = _a.onKeyPress, onSelectionChange = _a.onSelectionChange, onSubmitEditing = _a.onSubmitEditing, returnKeyType = _a.returnKeyType, _j = _a.secureTextEntry, secureTextEntry = _j === void 0 ? false : _j, selection = _a.selection, selectTextOnFocus = _a.selectTextOnFocus, spellCheck = _a.spellCheck, className = _a.className, testID = _a.testID, disabled = _a.disabled, theme = _a.theme, _k = _a.unit, unit = _k === void 0 ? "viewport" : _k, AddonAfter = _a.AddonAfter, addonBefore = _a.addonBefore, addonAfterClassName = _a.addonAfterClassName, addonBeforeClassName = _a.addonBeforeClassName, addonAfterStyle = _a.addonAfterStyle, addonBeforeStyle = _a.addonBeforeStyle, value = _a.value, onClear = _a.onClear, wrapperStyle = _a.wrapperStyle, allowClear = _a.allowClear, rest = __rest(_a, ["autoCapitalize", "autoComplete", "autoCompleteType", "autoCorrect", "blurOnSubmit", "clearTextOnFocus", "editable", "keyboardType", "multiline", "numberOfLines", "onBlur", "onChange", "onChangeText", "onContentSizeChange", "onFocus", "onKeyPress", "onSelectionChange", "onSubmitEditing", "returnKeyType", "secureTextEntry", "selection", "selectTextOnFocus", "spellCheck", "className", "testID", "disabled", "theme", "unit", "AddonAfter", "addonBefore", "addonAfterClassName", "addonBeforeClassName", "addonAfterStyle", "addonBeforeStyle", "value", "onClear", "wrapperStyle", "allowClear"]);
    var classes = useStyles();
    var _l = useState(false), isHover = _l[0], setIsHover = _l[1];
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
    var handleContentSizeChange = React.useCallback(function (hostNode) {
        if (multiline && onContentSizeChange && hostNode != null) {
            var newHeight = hostNode.scrollHeight;
            var newWidth = hostNode.scrollWidth;
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
    var imperativeRef = React.useMemo(function () { return function (hostNode) {
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
                    TextInputState.currentlyFocusedField() === hostNode);
            };
            handleContentSizeChange(hostNode);
        }
    }; }, [handleContentSizeChange]);
    function handleBlur(e) {
        TextInputState._currentlyFocusedNode = null;
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
            TextInputState._currentlyFocusedNode = hostNode;
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
        var shouldBlurOnSubmit = blurOnSubmit == null ? isBlurOnSubmitDefault : blurOnSubmit;
        var nativeEvent = e.nativeEvent;
        var isComposing = isEventComposing(nativeEvent);
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
    var handleSelectionChange = function (e) {
        if (onSelectionChange) {
            try {
                var _e = e;
                var node = _e.target;
                var selectionStart = node.selectionStart, selectionEnd = node.selectionEnd;
                var nativeEvent = _e.nativeEvent;
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
    var onMouseEnter = function () {
        setIsHover(true);
    };
    var onMouseLeave = function () {
        setIsHover(false);
    };
    React.useEffect(function () {
        var node = hostRef.current;
        if (node && selection) {
            setSelection(node, selection);
        }
        if (document.activeElement === node) {
            TextInputState._currentlyFocusedNode = node;
        }
    }, [hostRef, selection]);
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
    // supportedProps.style = style;
    supportedProps.type = (multiline ? undefined : type);
    supportedProps.inputMode = inputMode;
    var setRef = composeRef(hostRef, imperativeRef, forwardedRef);
    var themes = useFonts();
    var _height = unit === "viewport" ? pxToVhString(32) : 32;
    var _borderRadius = unit === "viewport" ? pxToVhString(7) : 7;
    var _paddingBlock = unit === "viewport" ? pxToVhString(8) : 8;
    var _paddingInline = unit === "viewport" ? pxToVhString(10) : 10;
    var _fontSize = unit === "viewport" ? pxToVhString(14) : 14;
    var _clearIconSize = unit === "viewport" ? pxToVh(9) : 9;
    var _value = value === null || value === undefined ? "" : value;
    var _clearIcon = typeof allowClear === "object"
        ? allowClear
        : typeof allowClear === "boolean" && (_jsxDEV(BaseIcon, { onClick: onClear, wrapperStyle: {
                cursor: "pointer",
                visibility: isHover && _value ? "visible" : "hidden",
            }, name: "Every-Boxes-_-Cross-Icon", unit: unit, size: { height: _clearIconSize, width: _clearIconSize } }, void 0, false, { fileName: _jsxFileName, lineNumber: 363, columnNumber: 47 }, _this));
    var addOnAfterIcon = isHover && _value && allowClear
        ? _clearIcon
        : AddonAfter
            ? AddonAfter
            : null;
    return multiline ? (_jsxDEV("textarea", __assign({ ref: setRef }, supportedProps), void 0, false, { fileName: _jsxFileName, lineNumber: 383, columnNumber: 25 }, _this)) : (_jsxDEV("div", __assign({ onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, className: classes["inputWrapper"], style: wrapperStyle }, { children: [_jsxDEV("input", __assign({}, supportedProps, { value: _value, className: classNames(classes["textInput"], disabled && classes.disabled, themes[theme || "Regular"], className), ref: setRef, type: rest.type, disabled: disabled, style: __assign({ height: _height, borderRadius: _borderRadius, paddingInline: _paddingInline, paddingBlock: _paddingBlock, fontSize: _fontSize }, supportedProps.style) }), void 0, false, { fileName: _jsxFileName, lineNumber: 395, columnNumber: 9 }, _this), addonBefore ? (_jsxDEV("div", __assign({ className: classNames(classes["addonBefore"], addonBeforeClassName && addonBeforeClassName), style: addonBeforeStyle }, { children: addonBefore }), void 0, false, { fileName: _jsxFileName, lineNumber: 416, columnNumber: 25 }, _this)) : null, addOnAfterIcon ? (_jsxDEV("div", __assign({ className: classNames(classes["addonAfter"], addonAfterClassName && addonAfterClassName) }, { children: addOnAfterIcon }), void 0, false, { fileName: _jsxFileName, lineNumber: 428, columnNumber: 28 }, _this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 388, columnNumber: 10 }, _this));
});
TextInput.displayName = "TextInput";
export { TextInput };
//# sourceMappingURL=index.js.map