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
var _this = this;
import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/dropDown/index.tsx";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { usePopper } from "react-popper";
import { Text } from "../../atoms/text";
import { useOnClickOutSide } from "@shakil-design/utils";
import { useStyles } from "./style";
var DropDown = function (_a) {
    var children = _a.children, _b = _a.trigger, trigger = _b === void 0 ? "hover" : _b, _c = _a.placement, placement = _c === void 0 ? "bottom" : _c, isVisibleProp = _a.isVisible, items = _a.items, onChange = _a.onChange, propValue = _a.value;
    var classes = useStyles();
    var _d = useState(null), internalValue = _d[0], setInternalValue = _d[1];
    var body = useRef(null);
    var _e = useState(false), isVisible = _e[0], setVisible = _e[1];
    var _f = useState(null), referenceElement = _f[0], setReferenceElement = _f[1];
    var _g = useState(null), popperElement = _g[0], setPopperElement = _g[1];
    var timerDelay = useRef(null);
    var _h = usePopper(referenceElement, popperElement, {
        placement: placement,
        strategy: "fixed",
    }), styles = _h.styles, attributes = _h.attributes;
    var handleOnClick = function (e) {
        fireEvents("onClick", e);
        setVisible(function (prev) { return !prev; });
    };
    useEffect(function () {
        body.current = document.body;
    }, []);
    var handleOnMouseLeave = function (e) {
        fireEvents("onMouseLeave", e);
        timerDelay.current = setTimeout(function () {
            setVisible(false);
        }, 100);
    };
    var handleOnMouseEnter = function (e) {
        fireEvents("onMouseEnter", e);
        setVisible(true);
    };
    var newChildProps = {
        key: "trigger",
        ref: setReferenceElement,
    };
    if (trigger === "click") {
        newChildProps.onClick = handleOnClick;
    }
    if (trigger === "hover") {
        newChildProps.onMouseLeave = handleOnMouseLeave;
        newChildProps.onMouseEnter = handleOnMouseEnter;
    }
    var anchor = React.isValidElement(children) ? (React.cloneElement(children, newChildProps)) : (_jsxDEV("span", __assign({}, newChildProps, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 90, columnNumber: 8 }, _this));
    useOnClickOutSide({
        element: popperElement,
        extraElement: referenceElement,
        handler: function () {
            if (trigger === "click") {
                setVisible(false);
            }
        },
    });
    var handlePopupMouseLeave = function () {
        if (trigger === "hover") {
            setVisible(false);
        }
    };
    var handlePopupMouseEnter = function () {
        if (timerDelay.current) {
            clearTimeout(timerDelay.current);
        }
    };
    var fireEvents = function (type, e) {
        var childCallback = children.props[type];
        if (childCallback) {
            childCallback(e);
        }
    };
    // eslint-disable-next-line @typescript-eslint/naming-convention
    var _isVisible = isVisibleProp !== undefined ? isVisibleProp : isVisible;
    var onSelectItem = function (value) {
        setInternalValue(value.value);
        setVisible(false);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    };
    var _value = propValue || internalValue;
    var list = (_jsxDEV("div", __assign({ className: classes["overlay"] }, { children: items.map(function (item) {
            return (_jsxDEV("div", __assign({ onClick: function () { return onSelectItem(item); }, className: classNames(classes["item"], _value === item.value && classes["itemSelected"]) }, { children: _jsxDEV(Text, __assign({ size: 14, color: "#575757" }, { children: item.label }), void 0, false, { fileName: _jsxFileName, lineNumber: 149, columnNumber: 13 }, _this) }), item.value, false, { fileName: _jsxFileName, lineNumber: 140, columnNumber: 17 }, _this));
        }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 137, columnNumber: 17 }, _this));
    return (_jsxDEV(_Fragment, { children: [anchor, body.current && _isVisible
                ? ReactDOM.createPortal(_jsxDEV(_Fragment, { children: _jsxDEV("div", __assign({ onMouseEnter: handlePopupMouseEnter, onMouseLeave: handlePopupMouseLeave, ref: setPopperElement, style: styles.popper }, attributes.popper, { children: list }), void 0, false, { fileName: _jsxFileName, lineNumber: 164, columnNumber: 15 }, _this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 162, columnNumber: 33 }, _this), body.current)
                : null] }, void 0, true, { fileName: _jsxFileName, lineNumber: 158, columnNumber: 11 }, _this));
};
export { DropDown };
//# sourceMappingURL=index.js.map