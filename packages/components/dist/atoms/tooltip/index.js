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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/tooltip/index.tsx";
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_popper_1 = require("react-popper");
const utils_1 = require("@shakil-design/utils");
const style_1 = require("./style");
const Tooltip = ({ children, content, trigger = "hover", arrowColor, placement = "top", hasMask, maskStyle, isVisible: isVisibleProp, onClose, onOpen, }) => {
    var _a;
    const classes = (0, style_1.useStyles)();
    const body = (0, react_1.useRef)(null);
    const [isVisible, setVisible] = (0, react_1.useState)(false);
    const [referenceElement, setReferenceElement] = (0, react_1.useState)(null);
    const [popperElement, setPopperElement] = (0, react_1.useState)(null);
    const [arrowElement, setArrowElement] = (0, react_1.useState)(null);
    const timerDelay = (0, react_1.useRef)(null);
    const { styles, attributes, state } = (0, react_popper_1.usePopper)(referenceElement, popperElement, {
        placement: placement,
        strategy: "fixed",
        modifiers: [
            { name: "arrow", options: { element: arrowElement } },
            { name: "offset", options: { offset: [0, 10] } },
        ],
    });
    const currentPlacement = state === null || state === void 0 ? void 0 : state.placement;
    const triggerOnClose = () => {
        onClose === null || onClose === void 0 ? void 0 : onClose();
        setVisible(false);
    };
    const triggerOnOpen = () => {
        onOpen === null || onOpen === void 0 ? void 0 : onOpen();
        setVisible(true);
    };
    const handleOnClick = (e) => {
        fireEvents("onClick", e);
        setVisible((prev) => {
            if (prev)
                triggerOnClose();
            else if (!prev)
                triggerOnOpen();
            return !prev;
        });
    };
    (0, react_1.useEffect)(() => {
        body.current = document.body;
    }, []);
    const handleOnMouseLeave = (e) => {
        fireEvents("onMouseLeave", e);
        timerDelay.current = setTimeout(() => {
            triggerOnClose();
        }, 100);
    };
    const handleOnMouseEnter = (e) => {
        fireEvents("onMouseEnter", e);
        triggerOnOpen();
    };
    const newChildProps = {
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
    const anchor = react_1.default.isValidElement(children) ? (react_1.default.cloneElement(children, newChildProps)) : ((0, jsx_dev_runtime_1.jsxDEV)("span", Object.assign({}, newChildProps, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 111, columnNumber: 8 }, this));
    (0, utils_1.useOnClickOutSide)({
        element: popperElement,
        extraElement: referenceElement,
        handler() {
            if (trigger === "click") {
                triggerOnClose();
            }
        },
    });
    const handlePopupMouseLeave = () => {
        if (trigger === "hover") {
            triggerOnClose();
        }
    };
    const handlePopupMouseEnter = () => {
        if (timerDelay.current) {
            clearTimeout(timerDelay.current);
        }
    };
    const fireEvents = (type, e) => {
        const childCallback = children.props[type];
        if (childCallback) {
            childCallback(e);
        }
    };
    const arrow = ((0, jsx_dev_runtime_1.jsxDEV)("div", { className: classes["arrow"], ref: setArrowElement, style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, styles.arrow), { transform: `${(_a = styles === null || styles === void 0 ? void 0 : styles.arrow) === null || _a === void 0 ? void 0 : _a.transform} rotate(45deg)`, backgroundColor: arrowColor }), ((currentPlacement === null || currentPlacement === void 0 ? void 0 : currentPlacement.includes("top")) && { bottom: -4 })), ((currentPlacement === null || currentPlacement === void 0 ? void 0 : currentPlacement.includes("bottom")) && { top: -4 })), ((currentPlacement === null || currentPlacement === void 0 ? void 0 : currentPlacement.includes("left")) && { right: -4 })), ((currentPlacement === null || currentPlacement === void 0 ? void 0 : currentPlacement.includes("right")) && { left: -4 })) }, void 0, false, { fileName: _jsxFileName, lineNumber: 146, columnNumber: 18 }, this));
    const mask = trigger === "click" ? ((0, jsx_dev_runtime_1.jsxDEV)("div", { className: (0, classnames_1.default)(classes["mask"], classes["maskVisible"]), style: Object.assign({}, maskStyle) }, void 0, false, { fileName: _jsxFileName, lineNumber: 163, columnNumber: 28 }, this)) : null;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const _isVisible = isVisibleProp !== undefined ? isVisibleProp : isVisible;
    return ((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: [anchor, body.current && _isVisible && content
                ? react_dom_1.default.createPortal((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: [hasMask ? mask : null, (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ onMouseEnter: handlePopupMouseEnter, onMouseLeave: handlePopupMouseLeave, ref: setPopperElement, style: styles.popper }, attributes.popper, { children: [content, arrowColor ? arrow : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 180, columnNumber: 15 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 177, columnNumber: 33 }, this), body.current)
                : null] }, void 0, true, { fileName: _jsxFileName, lineNumber: 173, columnNumber: 11 }, this));
};
exports.Tooltip = Tooltip;
//# sourceMappingURL=index.js.map