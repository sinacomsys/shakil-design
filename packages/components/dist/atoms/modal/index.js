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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/modal/index.tsx";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { useStyles } from "./style";
var Modal = function (_a) {
    var getContainer = _a.getContainer, isVisible = _a.isVisible, onClose = _a.onClose, children = _a.children, style = _a.style, className = _a.className, centered = _a.centered, destroyOnClose = _a.destroyOnClose, _b = _a.maskCloseable, maskCloseable = _b === void 0 ? true : _b;
    var classes = useStyles();
    var _c = useState(null), bodyRef = _c[0], setBodyRef = _c[1];
    useEffect(function () {
        setBodyRef(document.body);
    }, []);
    var modalContainerElement = useMemo(function () {
        if (getContainer &&
            (getContainer === null || getContainer === void 0 ? void 0 : getContainer.style.position) &&
            (getContainer === null || getContainer === void 0 ? void 0 : getContainer.style.position) !== "static") {
            return getContainer;
        }
        else
            return bodyRef;
    }, [getContainer, bodyRef]);
    var drawerPositionStrategy = (modalContainerElement === null || modalContainerElement === void 0 ? void 0 : modalContainerElement.localName) === "body" ? "fixed" : "absolute";
    var mask = (_jsxDEV("div", { onClick: function () {
            isVisible && maskCloseable && (onClose === null || onClose === void 0 ? void 0 : onClose());
        }, className: classes.mask }, void 0, false, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 17 }, _this));
    var content = (_jsxDEV("div", __assign({ className: classNames(classes.modalContainer, centered && classes.centerd, className), style: __assign({ position: drawerPositionStrategy, display: isVisible ? "block" : "none" }, style) }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 57, columnNumber: 20 }, _this));
    return (_jsxDEV(_Fragment, { children: modalContainerElement ? (_jsxDEV(_Fragment, { children: ReactDOM.createPortal(_jsxDEV(_Fragment, { children: [isVisible ? mask : null, !isVisible && destroyOnClose ? null : content] }, void 0, true, { fileName: _jsxFileName, lineNumber: 78, columnNumber: 34 }, _this), modalContainerElement) }, void 0, false, { fileName: _jsxFileName, lineNumber: 76, columnNumber: 33 }, _this)) : null }, void 0, false, { fileName: _jsxFileName, lineNumber: 74, columnNumber: 11 }, _this));
};
export { Modal };
//# sourceMappingURL=index.js.map