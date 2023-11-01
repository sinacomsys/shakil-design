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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/drawer/index.tsx";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { useStyle } from "./style";
var Drawer = function (_a) {
    var isVisible = _a.isVisible, children = _a.children, onClose = _a.onClose, getContainer = _a.getContainer, _b = _a.placement, placement = _b === void 0 ? "bottom" : _b, height = _a.height, width = _a.width, destroyOnClose = _a.destroyOnClose, _c = _a.maskCloseable, maskCloseable = _c === void 0 ? true : _c;
    var classes = useStyle();
    var _d = useState(null), bodyRef = _d[0], setBodyRef = _d[1];
    useEffect(function () {
        setBodyRef(document.body);
    }, []);
    var mask = (_jsxDEV("div", { onClick: function () {
            isVisible && maskCloseable && onClose();
        }, className: classNames(classes["mask"]) }, void 0, false, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 17 }, _this));
    var portalContainerElement = useMemo(function () {
        if (getContainer &&
            (getContainer === null || getContainer === void 0 ? void 0 : getContainer.style.position) &&
            (getContainer === null || getContainer === void 0 ? void 0 : getContainer.style.position) !== "static" &&
            getContainer.style.overflow === "hidden") {
            return getContainer;
        }
        else
            return bodyRef;
    }, [getContainer, bodyRef]);
    var drawerPositionStrategy = (portalContainerElement === null || portalContainerElement === void 0 ? void 0 : portalContainerElement.localName) === "body" ? "fixed" : "absolute";
    var dimentions = useMemo(function () {
        var portalContainerElementRect = portalContainerElement === null || portalContainerElement === void 0 ? void 0 : portalContainerElement.getBoundingClientRect();
        var containerHeight = portalContainerElementRect === null || portalContainerElementRect === void 0 ? void 0 : portalContainerElementRect.height;
        var containerWidth = portalContainerElementRect === null || portalContainerElementRect === void 0 ? void 0 : portalContainerElementRect.width;
        if (!containerHeight || !containerWidth)
            return;
        else if (placement === "bottom") {
            var _height = height || containerHeight - 100;
            return {
                rect: { width: "100%", height: _height },
                initial: { bottom: -_height, left: 0 },
                animateTo: { bottom: 0, left: 0 },
            };
        }
        else if (placement === "right") {
            var _width = width || containerWidth - 100;
            return {
                rect: { height: "100%", width: _width },
                initial: { bottom: 0, right: -_width },
                animateTo: { bottom: 0, right: 0 },
            };
        }
        else if (placement === "top") {
            var _height = height || containerHeight - 100;
            return {
                rect: { width: "100%", height: _height },
                initial: { left: 0, top: -_height },
                animateTo: { top: 0, left: 0 },
            };
        }
        else if (placement === "left") {
            var _width = width || containerWidth - 100;
            return {
                rect: { height: "100%", width: _width },
                initial: { top: 0, left: -_width },
                animateTo: { top: 0, left: 0 },
            };
        }
    }, [height, placement, portalContainerElement, width]);
    var content = (_jsxDEV(motion.div, __assign({ initial: __assign(__assign({}, dimentions === null || dimentions === void 0 ? void 0 : dimentions.initial), { opacity: 0 }), animate: __assign(__assign({}, (isVisible && (dimentions === null || dimentions === void 0 ? void 0 : dimentions.animateTo))), { opacity: isVisible ? 1 : 0 }), exit: __assign(__assign({}, dimentions === null || dimentions === void 0 ? void 0 : dimentions.initial), { opacity: 0 }), style: __assign({ position: drawerPositionStrategy, backgroundColor: "white" }, dimentions === null || dimentions === void 0 ? void 0 : dimentions.rect) }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 118, columnNumber: 20 }, _this));
    return (_jsxDEV(_Fragment, { children: portalContainerElement
            ? ReactDOM.createPortal(_jsxDEV(_Fragment, { children: [isVisible ? mask : null, _jsxDEV(AnimatePresence, { children: !isVisible && destroyOnClose ? null : content }, void 0, false, { fileName: _jsxFileName, lineNumber: 142, columnNumber: 15 }, _this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 139, columnNumber: 33 }, _this), portalContainerElement)
            : null }, void 0, false, { fileName: _jsxFileName, lineNumber: 136, columnNumber: 11 }, _this));
};
export { Drawer };
//# sourceMappingURL=index.js.map