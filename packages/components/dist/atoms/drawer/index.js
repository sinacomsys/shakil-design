"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var react_dom_1 = __importDefault(require("react-dom"));
var style_1 = require("./style");
var Drawer = function (_a) {
    var isVisible = _a.isVisible, children = _a.children, onClose = _a.onClose, getContainer = _a.getContainer, _b = _a.placement, placement = _b === void 0 ? "bottom" : _b, height = _a.height, width = _a.width, destroyOnClose = _a.destroyOnClose, _c = _a.maskCloseable, maskCloseable = _c === void 0 ? true : _c, contentClassName = _a.contentClassName, maskClassName = _a.maskClassName;
    var _d = (0, react_1.useState)(null), bodyRef = _d[0], setBodyRef = _d[1];
    (0, react_1.useEffect)(function () {
        setBodyRef(document.body);
    }, []);
    var portalContainerElement = (0, react_1.useMemo)(function () {
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
    var classes = (0, style_1.useStyle)(drawerPositionStrategy);
    var mask = ((0, jsx_runtime_1.jsx)("div", { onClick: function () {
            isVisible && maskCloseable && onClose();
        }, className: (0, classnames_1.default)(classes["mask"], maskClassName) }));
    var dimentions = (0, react_1.useMemo)(function () {
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
    var content = ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, __assign({ initial: __assign(__assign({}, dimentions === null || dimentions === void 0 ? void 0 : dimentions.initial), { opacity: 0 }), animate: __assign(__assign({}, (isVisible && (dimentions === null || dimentions === void 0 ? void 0 : dimentions.animateTo))), { opacity: isVisible ? 1 : 0 }), exit: __assign(__assign({}, dimentions === null || dimentions === void 0 ? void 0 : dimentions.initial), { opacity: 0 }), style: __assign({}, dimentions === null || dimentions === void 0 ? void 0 : dimentions.rect), className: (0, classnames_1.default)(contentClassName, classes["content"]) }, { children: children })));
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: portalContainerElement
            ? react_dom_1.default.createPortal((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [isVisible ? mask : null, (0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: !isVisible && destroyOnClose ? null : content })] }), portalContainerElement)
            : null }));
};
exports.Drawer = Drawer;
//# sourceMappingURL=index.js.map