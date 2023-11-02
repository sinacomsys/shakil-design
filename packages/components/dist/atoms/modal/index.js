var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react/jsx-dev-runtime", "classnames", "react", "react-dom", "./style"], function (require, exports, jsx_dev_runtime_1, classnames_1, react_1, react_dom_1, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Modal = void 0;
    classnames_1 = __importDefault(classnames_1);
    react_dom_1 = __importDefault(react_dom_1);
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/modal/index.tsx";
    const Modal = ({ getContainer, isVisible, onClose, children, style, className, centered, destroyOnClose, maskCloseable = true, }) => {
        const classes = (0, style_1.useStyles)();
        const [bodyRef, setBodyRef] = (0, react_1.useState)(null);
        (0, react_1.useEffect)(() => {
            setBodyRef(document.body);
        }, []);
        const modalContainerElement = (0, react_1.useMemo)(() => {
            if (getContainer &&
                (getContainer === null || getContainer === void 0 ? void 0 : getContainer.style.position) &&
                (getContainer === null || getContainer === void 0 ? void 0 : getContainer.style.position) !== "static") {
                return getContainer;
            }
            else
                return bodyRef;
        }, [getContainer, bodyRef]);
        const drawerPositionStrategy = (modalContainerElement === null || modalContainerElement === void 0 ? void 0 : modalContainerElement.localName) === "body" ? "fixed" : "absolute";
        const mask = ((0, jsx_dev_runtime_1.jsxDEV)("div", { onClick: () => {
                isVisible && maskCloseable && (onClose === null || onClose === void 0 ? void 0 : onClose());
            }, className: classes.mask }, void 0, false, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 17 }, this));
        const content = ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: (0, classnames_1.default)(classes.modalContainer, centered && classes.centerd, className), style: Object.assign({ position: drawerPositionStrategy, display: isVisible ? "block" : "none" }, style) }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 57, columnNumber: 20 }, this));
        return ((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: modalContainerElement ? ((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: react_dom_1.default.createPortal((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: [isVisible ? mask : null, !isVisible && destroyOnClose ? null : content] }, void 0, true, { fileName: _jsxFileName, lineNumber: 78, columnNumber: 34 }, this), modalContainerElement) }, void 0, false, { fileName: _jsxFileName, lineNumber: 76, columnNumber: 33 }, this)) : null }, void 0, false, { fileName: _jsxFileName, lineNumber: 74, columnNumber: 11 }, this));
    };
    exports.Modal = Modal;
});
//# sourceMappingURL=index.js.map