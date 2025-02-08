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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_popper_1 = require("react-popper");
var src_1 = require("@shakil-design/utils/src");
var style_1 = require("./style");
var Tooltip = function (_a) {
    var _b;
    var children = _a.children, content = _a.content, _c = _a.trigger, trigger = _c === void 0 ? "hover" : _c, arrowColor = _a.arrowColor, _d = _a.placement, placement = _d === void 0 ? "top" : _d, hasMask = _a.hasMask, maskStyle = _a.maskStyle, isVisibleProp = _a.isVisible, onClose = _a.onClose, onOpen = _a.onOpen, disable = _a.disable;
    var classes = (0, style_1.useStyles)();
    var body = (0, react_1.useRef)(null);
    var anchorElement = (0, react_1.useRef)(null);
    var _e = (0, react_1.useState)(false), isVisible = _e[0], setVisible = _e[1];
    var _f = (0, react_1.useState)(null), popperElement = _f[0], setPopperElement = _f[1];
    var _g = (0, react_1.useState)(null), arrowElement = _g[0], setArrowElement = _g[1];
    var timerDelay = (0, react_1.useRef)(null);
    var _h = (0, react_popper_1.usePopper)(anchorElement.current, popperElement, {
        placement: placement,
        strategy: "fixed",
        modifiers: [
            { name: "arrow", options: { element: arrowElement } },
            { name: "offset", options: { offset: [0, 10] } },
        ],
    }), styles = _h.styles, attributes = _h.attributes, state = _h.state;
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
    (0, react_1.useEffect)(function () {
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
        ref: anchorElement,
    };
    if (trigger === "click" && !disable) {
        newChildProps.onClick = handleOnClick;
    }
    if (trigger === "hover" && !disable) {
        newChildProps.onMouseLeave = handleOnMouseLeave;
        newChildProps.onMouseEnter = handleOnMouseEnter;
    }
    var anchor = react_1.default.isValidElement(children) ? (react_1.default.cloneElement(children, newChildProps)) : ((0, jsx_runtime_1.jsx)("span", __assign({}, newChildProps, { children: children })));
    (0, src_1.useOnClickOutSide)({
        element: popperElement,
        extraElement: anchorElement.current,
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
    var arrow = ((0, jsx_runtime_1.jsx)("div", { className: classes["arrow"], ref: setArrowElement, style: __assign(__assign(__assign(__assign(__assign(__assign({}, styles.arrow), { transform: "".concat((_b = styles === null || styles === void 0 ? void 0 : styles.arrow) === null || _b === void 0 ? void 0 : _b.transform, " rotate(45deg)"), backgroundColor: arrowColor }), ((currentPlacement === null || currentPlacement === void 0 ? void 0 : currentPlacement.includes("top")) && { bottom: -4 })), ((currentPlacement === null || currentPlacement === void 0 ? void 0 : currentPlacement.includes("bottom")) && { top: -4 })), ((currentPlacement === null || currentPlacement === void 0 ? void 0 : currentPlacement.includes("left")) && { right: -4 })), ((currentPlacement === null || currentPlacement === void 0 ? void 0 : currentPlacement.includes("right")) && { left: -4 })) }));
    var mask = trigger === "click" ? ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(classes["mask"], classes["maskVisible"]), style: __assign({}, maskStyle) })) : null;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    var _isVisible = isVisibleProp !== undefined ? isVisibleProp : isVisible;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [anchor, body.current && _isVisible && content
                ? react_dom_1.default.createPortal((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [hasMask ? mask : null, (0, jsx_runtime_1.jsxs)("div", __assign({ onMouseEnter: handlePopupMouseEnter, onMouseLeave: handlePopupMouseLeave, ref: setPopperElement, style: styles.popper }, attributes.popper, { children: [content, arrowColor ? arrow : null] }))] }), body.current)
                : null] }));
};
exports.Tooltip = Tooltip;
//# sourceMappingURL=index.js.map