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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/tooltip/index.tsx";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { usePopper } from "react-popper";
import { useOnClickOutSide } from "@shakil-design/utils";
import { useStyles } from "./style";
var Tooltip = function (_a) {
    var _b;
    var children = _a.children, content = _a.content, _c = _a.trigger, trigger = _c === void 0 ? "hover" : _c, arrowColor = _a.arrowColor, _d = _a.placement, placement = _d === void 0 ? "top" : _d, hasMask = _a.hasMask, maskStyle = _a.maskStyle, isVisibleProp = _a.isVisible, onClose = _a.onClose, onOpen = _a.onOpen;
    var classes = useStyles();
    var body = useRef(null);
    var _e = useState(false), isVisible = _e[0], setVisible = _e[1];
    var _f = useState(null), referenceElement = _f[0], setReferenceElement = _f[1];
    var _g = useState(null), popperElement = _g[0], setPopperElement = _g[1];
    var _h = useState(null), arrowElement = _h[0], setArrowElement = _h[1];
    var timerDelay = useRef(null);
    var _j = usePopper(referenceElement, popperElement, {
        placement: placement,
        strategy: "fixed",
        modifiers: [
            { name: "arrow", options: { element: arrowElement } },
            { name: "offset", options: { offset: [0, 10] } },
        ],
    }), styles = _j.styles, attributes = _j.attributes, state = _j.state;
    var currentPlacement = state === null || state === void 0 ? void 0 : state.placement;
    var triggerOnClose = function () {
        onClose === null || onClose === void 0 ? void 0 : onClose();
        setVisible(false);
    };
    var triggerOnOpen = function () {
        onOpen === null || onOpen === void 0 ? void 0 : onOpen();
        setVisible(true);
    };
    var handleOnClick = function (e) {
        fireEvents("onClick", e);
        setVisible(function (prev) {
            if (prev)
                triggerOnClose();
            else if (!prev)
                triggerOnOpen();
            return !prev;
        });
    };
    useEffect(function () {
        body.current = document.body;
    }, []);
    var handleOnMouseLeave = function (e) {
        fireEvents("onMouseLeave", e);
        timerDelay.current = setTimeout(function () {
            triggerOnClose();
        }, 100);
    };
    var handleOnMouseEnter = function (e) {
        fireEvents("onMouseEnter", e);
        triggerOnOpen();
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
    var anchor = React.isValidElement(children) ? (React.cloneElement(children, newChildProps)) : (_jsxDEV("span", __assign({}, newChildProps, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 111, columnNumber: 8 }, _this));
    useOnClickOutSide({
        element: popperElement,
        extraElement: referenceElement,
        handler: function () {
            if (trigger === "click") {
                triggerOnClose();
            }
        },
    });
    var handlePopupMouseLeave = function () {
        if (trigger === "hover") {
            triggerOnClose();
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
    var arrow = (_jsxDEV("div", { className: classes["arrow"], ref: setArrowElement, style: __assign(__assign(__assign(__assign(__assign(__assign({}, styles.arrow), { transform: "".concat((_b = styles === null || styles === void 0 ? void 0 : styles.arrow) === null || _b === void 0 ? void 0 : _b.transform, " rotate(45deg)"), backgroundColor: arrowColor }), ((currentPlacement === null || currentPlacement === void 0 ? void 0 : currentPlacement.includes("top")) && { bottom: -4 })), ((currentPlacement === null || currentPlacement === void 0 ? void 0 : currentPlacement.includes("bottom")) && { top: -4 })), ((currentPlacement === null || currentPlacement === void 0 ? void 0 : currentPlacement.includes("left")) && { right: -4 })), ((currentPlacement === null || currentPlacement === void 0 ? void 0 : currentPlacement.includes("right")) && { left: -4 })) }, void 0, false, { fileName: _jsxFileName, lineNumber: 146, columnNumber: 18 }, _this));
    var mask = trigger === "click" ? (_jsxDEV("div", { className: classNames(classes["mask"], classes["maskVisible"]), style: __assign({}, maskStyle) }, void 0, false, { fileName: _jsxFileName, lineNumber: 163, columnNumber: 28 }, _this)) : null;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    var _isVisible = isVisibleProp !== undefined ? isVisibleProp : isVisible;
    return (_jsxDEV(_Fragment, { children: [anchor, body.current && _isVisible && content
                ? ReactDOM.createPortal(_jsxDEV(_Fragment, { children: [hasMask ? mask : null, _jsxDEV("div", __assign({ onMouseEnter: handlePopupMouseEnter, onMouseLeave: handlePopupMouseLeave, ref: setPopperElement, style: styles.popper }, attributes.popper, { children: [content, arrowColor ? arrow : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 180, columnNumber: 15 }, _this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 177, columnNumber: 33 }, _this), body.current)
                : null] }, void 0, true, { fileName: _jsxFileName, lineNumber: 173, columnNumber: 11 }, _this));
};
export { Tooltip };
//# sourceMappingURL=index.js.map