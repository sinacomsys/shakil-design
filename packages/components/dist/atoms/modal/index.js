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
exports.Modal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var react_1 = require("react");
var react_dom_1 = __importDefault(require("react-dom"));
var style_1 = require("./style");
var utils_1 = require("@shakil-design/utils");
var Modal = function (_a) {
    var getContainer = _a.getContainer, isVisible = _a.isVisible, onClose = _a.onClose, children = _a.children, style = _a.style, className = _a.className, centered = _a.centered, destroyOnClose = _a.destroyOnClose, _b = _a.maskCloseable, maskCloseable = _b === void 0 ? true : _b, maskClassName = _a.maskClassName;
    var classes = (0, style_1.useStyles)();
    var _c = (0, react_1.useState)(null), bodyRef = _c[0], setBodyRef = _c[1];
    var height = (0, utils_1.useWindowSize)().height;
    var vh = height / 100;
    var widthGutter = (0, utils_1.pxToVw)(32) * vh;
    (0, react_1.useEffect)(function () {
        setBodyRef(document.body);
    }, []);
    var modalContainerElement = (0, react_1.useMemo)(function () {
        if (getContainer &&
            (getContainer === null || getContainer === void 0 ? void 0 : getContainer.style.position) &&
            (getContainer === null || getContainer === void 0 ? void 0 : getContainer.style.position) !== "static") {
            return getContainer;
        }
        else
            return bodyRef;
    }, [getContainer, bodyRef]);
    var drawerPositionStrategy = (modalContainerElement === null || modalContainerElement === void 0 ? void 0 : modalContainerElement.localName) === "body" ? "fixed" : "absolute";
    var mask = ((0, jsx_runtime_1.jsx)("div", { onClick: function () {
            isVisible && maskCloseable && (onClose === null || onClose === void 0 ? void 0 : onClose());
        }, className: (0, classnames_1.default)(maskClassName, classes.mask) }));
    var content = ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)(classes.modalContainer, centered && classes.centerd, className), style: __assign({ position: drawerPositionStrategy, display: isVisible ? "block" : "none", maxWidth: "calc(100% - ".concat(widthGutter, "px)"), maxHeight: "calc(100% - ".concat(widthGutter, "px)") }, style) }, { children: children })));
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: modalContainerElement ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: react_dom_1.default.createPortal((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [isVisible ? mask : null, !isVisible && destroyOnClose ? null : content] }), modalContainerElement) })) : null }));
};
exports.Modal = Modal;
//# sourceMappingURL=index.js.map