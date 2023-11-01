"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/drawer/index.tsx";
const classnames_1 = __importDefault(require("classnames"));
const framer_motion_1 = require("framer-motion");
const react_1 = require("react");
const react_dom_1 = __importDefault(require("react-dom"));
const style_1 = require("./style");
const Drawer = ({ isVisible, children, onClose, getContainer, placement = "bottom", height, width, destroyOnClose, maskCloseable = true, }) => {
    const classes = (0, style_1.useStyle)();
    const [bodyRef, setBodyRef] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        setBodyRef(document.body);
    }, []);
    const mask = ((0, jsx_dev_runtime_1.jsxDEV)("div", { onClick: () => {
            isVisible && maskCloseable && onClose();
        }, className: (0, classnames_1.default)(classes["mask"]) }, void 0, false, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 17 }, this));
    const portalContainerElement = (0, react_1.useMemo)(() => {
        if (getContainer &&
            (getContainer === null || getContainer === void 0 ? void 0 : getContainer.style.position) &&
            (getContainer === null || getContainer === void 0 ? void 0 : getContainer.style.position) !== "static" &&
            getContainer.style.overflow === "hidden") {
            return getContainer;
        }
        else
            return bodyRef;
    }, [getContainer, bodyRef]);
    const drawerPositionStrategy = (portalContainerElement === null || portalContainerElement === void 0 ? void 0 : portalContainerElement.localName) === "body" ? "fixed" : "absolute";
    const dimentions = (0, react_1.useMemo)(() => {
        const portalContainerElementRect = portalContainerElement === null || portalContainerElement === void 0 ? void 0 : portalContainerElement.getBoundingClientRect();
        const containerHeight = portalContainerElementRect === null || portalContainerElementRect === void 0 ? void 0 : portalContainerElementRect.height;
        const containerWidth = portalContainerElementRect === null || portalContainerElementRect === void 0 ? void 0 : portalContainerElementRect.width;
        if (!containerHeight || !containerWidth)
            return;
        else if (placement === "bottom") {
            const _height = height || containerHeight - 100;
            return {
                rect: { width: "100%", height: _height },
                initial: { bottom: -_height, left: 0 },
                animateTo: { bottom: 0, left: 0 },
            };
        }
        else if (placement === "right") {
            const _width = width || containerWidth - 100;
            return {
                rect: { height: "100%", width: _width },
                initial: { bottom: 0, right: -_width },
                animateTo: { bottom: 0, right: 0 },
            };
        }
        else if (placement === "top") {
            const _height = height || containerHeight - 100;
            return {
                rect: { width: "100%", height: _height },
                initial: { left: 0, top: -_height },
                animateTo: { top: 0, left: 0 },
            };
        }
        else if (placement === "left") {
            const _width = width || containerWidth - 100;
            return {
                rect: { height: "100%", width: _width },
                initial: { top: 0, left: -_width },
                animateTo: { top: 0, left: 0 },
            };
        }
    }, [height, placement, portalContainerElement, width]);
    const content = ((0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.motion.div, Object.assign({ initial: Object.assign(Object.assign({}, dimentions === null || dimentions === void 0 ? void 0 : dimentions.initial), { opacity: 0 }), animate: Object.assign(Object.assign({}, (isVisible && (dimentions === null || dimentions === void 0 ? void 0 : dimentions.animateTo))), { opacity: isVisible ? 1 : 0 }), exit: Object.assign(Object.assign({}, dimentions === null || dimentions === void 0 ? void 0 : dimentions.initial), { opacity: 0 }), style: Object.assign({ position: drawerPositionStrategy, backgroundColor: "white" }, dimentions === null || dimentions === void 0 ? void 0 : dimentions.rect) }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 118, columnNumber: 20 }, this));
    return ((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: portalContainerElement
            ? react_dom_1.default.createPortal((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: [isVisible ? mask : null, (0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.AnimatePresence, { children: !isVisible && destroyOnClose ? null : content }, void 0, false, { fileName: _jsxFileName, lineNumber: 142, columnNumber: 15 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 139, columnNumber: 33 }, this), portalContainerElement)
            : null }, void 0, false, { fileName: _jsxFileName, lineNumber: 136, columnNumber: 11 }, this));
};
exports.Drawer = Drawer;
//# sourceMappingURL=index.js.map