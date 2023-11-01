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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/select/index.tsx";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { usePopper } from "react-popper";
import { BaseIcon } from "../../atoms";
import { TextInput } from "../../molecules/textInput";
import { useOnClickOutSide } from "@shakil-design/utils";
import { useStyles } from "./style";
import classnames from "classnames";
import { FleshIcon } from "./components/fleshIcon";
import { MultiSelectList } from "./components/list/multiSelect";
import { SingleSelectList } from "./components/list/singleSelect";
var Select = function (_a) {
    var data = _a.data, propValue = _a.value, _b = _a.labelExtractor, labelExtractor = _b === void 0 ? function (item) { return item.label; } : _b, _c = _a.valueExtractor, valueExtractor = _c === void 0 ? function (item) { return item.value; } : _c, onChange = _a.onChange, onClear = _a.onClear, disabled = _a.disabled, _d = _a.unit, unit = _d === void 0 ? "viewport" : _d, allowClear = _a.allowClear, AddonAfter = _a.AddonAfter, addonAfterClassName = _a.addonAfterClassName, addonAfterStyle = _a.addonAfterStyle, addonBefore = _a.addonBefore, addonBeforeClassName = _a.addonBeforeClassName, addonBeforeStyle = _a.addonBeforeStyle, className = _a.className, onBlur = _a.onBlur, onFocus = _a.onFocus, placeholder = _a.placeholder, style = _a.style, wrapperClassName = _a.wrapperClassName, wrapperStyle = _a.wrapperStyle, popupClassName = _a.popupClassName, popupStyles = _a.popupStyles, multiple = _a.multiple, onSearch = _a.onSearch, _e = _a.hasSearch, hasSearch = _e === void 0 ? true : _e, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave;
    var classes = useStyles();
    var _f = useState(null), internalValue = _f[0], setInternalValue = _f[1];
    var body = useRef(null);
    var _g = useState(0), width = _g[0], setWidth = _g[1];
    var _h = useState(false), isVisible = _h[0], setVisible = _h[1];
    var _j = useState(""), searchValue = _j[0], setSearchValue = _j[1];
    var _k = useState(null), referenceElement = _k[0], setReferenceElement = _k[1];
    var _l = useState(null), popperElement = _l[0], setPopperElement = _l[1];
    var _m = usePopper(referenceElement, popperElement, {
        placement: "bottom",
        strategy: "fixed",
        modifiers: [{ name: "offset", options: { offset: [0, 2] } }],
    }), poperStyles = _m.styles, attributes = _m.attributes;
    useEffect(function () {
        body.current = document.body;
    }, []);
    useEffect(function () {
        setInternalValue(null);
    }, [multiple]);
    useEffect(function () {
        setInternalValue(propValue);
    }, [propValue]);
    var handleOnClick = function () {
        if (disabled)
            return;
        setVisible(function (prev) { return !prev; });
    };
    var handleRefOfRefrenceElement = function (node) {
        setWidth(node === null || node === void 0 ? void 0 : node.getBoundingClientRect().width);
        setReferenceElement(node);
    };
    var handleOnChange = function (selectedItemValue) {
        if (multiple) {
            var alreadyExist = (internalValue || []).find(function (item) { return item === selectedItemValue; });
            if (alreadyExist) {
                var items = (internalValue || []).filter(function (item) {
                    return item !== selectedItemValue;
                });
                onChange === null || onChange === void 0 ? void 0 : onChange(items);
                !propValue && setInternalValue(items);
            }
            else {
                onChange === null || onChange === void 0 ? void 0 : onChange(__spreadArray(__spreadArray([], (internalValue || []), true), [selectedItemValue], false));
                !propValue &&
                    setInternalValue(__spreadArray(__spreadArray([], (internalValue || []), true), [
                        selectedItemValue,
                    ], false));
            }
            return;
        }
        !propValue && setInternalValue(selectedItemValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(selectedItemValue);
        setVisible(false);
    };
    var handleOnClear = function () {
        setInternalValue(null);
        setVisible(false);
        onClear === null || onClear === void 0 ? void 0 : onClear();
        onChange === null || onChange === void 0 ? void 0 : onChange(null);
    };
    useOnClickOutSide({
        element: popperElement,
        extraElement: referenceElement,
        handler: function () {
            setVisible(false);
        },
    });
    var displayValue = null;
    if (multiple) {
        displayValue =
            Array.isArray(internalValue) && internalValue.length
                ? "".concat(internalValue === null || internalValue === void 0 ? void 0 : internalValue.length, " Items Selected")
                : undefined;
    }
    else {
        displayValue = internalValue;
    }
    return (_jsxDEV(_Fragment, { children: [_jsxDEV(TextInput, __assign({}, {
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
            }, { onClear: handleOnClear, ref: handleRefOfRefrenceElement, onClick: handleOnClick, value: displayValue, style: __assign({}, style), className: classes["textInput"], unit: unit, placeholder: placeholder, allowClear: allowClear, AddonAfter: _jsxDEV(FleshIcon, { isVisible: isVisible }, void 0, false, { fileName: _jsxFileName, lineNumber: 165, columnNumber: 21 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 138, columnNumber: 7 }, _this), body.current && isVisible
                ? ReactDOM.createPortal(_jsxDEV(_Fragment, { children: _jsxDEV("div", __assign({ ref: setPopperElement, style: poperStyles.popper }, attributes.popper, { children: _jsxDEV("div", __assign({ style: __assign({ width: width }, popupStyles), className: classnames(popupClassName, classes["overlay"]) }, { children: [hasSearch ? (_jsxDEV("div", __assign({ className: classes["inputWrapper"] }, { children: _jsxDEV(TextInput, { value: searchValue, placeholder: "Search", unit: "pixel", AddonAfter: _jsxDEV(BaseIcon, { color: "#d1d1d1", name: "Search-Box_Search-Icon", unit: "pixel", size: { height: 15, width: 15 } }, void 0, false, { fileName: _jsxFileName, lineNumber: 186, columnNumber: 37 }, _this), onChangeText: function (value) {
                                            onSearch === null || onSearch === void 0 ? void 0 : onSearch(value);
                                            setSearchValue(value);
                                        } }, void 0, false, { fileName: _jsxFileName, lineNumber: 182, columnNumber: 23 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 180, columnNumber: 33 }, _this)) : null, multiple ? (_jsxDEV(MultiSelectList, { data: data, labelExtractor: labelExtractor, valueExtractor: valueExtractor, internalValue: internalValue, onClick: handleOnChange }, void 0, false, { fileName: _jsxFileName, lineNumber: 202, columnNumber: 32 }, _this)) : (_jsxDEV(SingleSelectList, { data: data, labelExtractor: labelExtractor, valueExtractor: valueExtractor, internalValue: internalValue, onClick: handleOnChange }, void 0, false, { fileName: _jsxFileName, lineNumber: 210, columnNumber: 24 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 176, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 171, columnNumber: 15 }, _this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 169, columnNumber: 33 }, _this), body.current)
                : null] }, void 0, true, { fileName: _jsxFileName, lineNumber: 136, columnNumber: 11 }, _this));
};
export { Select };
//# sourceMappingURL=index.js.map