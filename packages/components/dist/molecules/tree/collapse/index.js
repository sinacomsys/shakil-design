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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tree/collapse/index.tsx";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, useContext } from "react";
import Measure from "react-measure";
import { Item } from "../item";
import { useStyles } from "./style";
import { TreeContext } from "../context/treeProvider";
import { pxToVhString } from "@shakil-design/utils";
var Collapse = function (_a) {
    var title = _a.title, children = _a.children, level = _a.level, data = _a.data, onLoadData = _a.onLoadData, onClick = _a.onClick, activeItemId = _a.activeItemId, id = _a.id, defaultOpen = _a.defaultOpen;
    var ref = useRef(null);
    var unit = useContext(TreeContext).unit;
    var classes = useStyles();
    var _b = useState(false), isOpen = _b[0], setOpen = _b[1];
    var _c = useState(false), isLoading = _c[0], setLoading = _c[1];
    var handleOnClick = function () {
        var _a;
        onClick === null || onClick === void 0 ? void 0 : onClick({ data: data, level: level });
        if (children) {
            setOpen(function (prev) { return !prev; });
        }
        if (typeof onLoadData === "undefined")
            return;
        setLoading(true);
        (_a = onLoadData === null || onLoadData === void 0 ? void 0 : onLoadData({ data: data, level: level })) === null || _a === void 0 ? void 0 : _a.finally(function () {
            setLoading(false);
            if (!children) {
                setOpen(true);
            }
        });
    };
    useEffect(function () {
        var _a;
        if (defaultOpen) {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: "center", behavior: "smooth" });
            setOpen(true);
        }
    }, [defaultOpen]);
    var itemPaddingTop = unit === "viewport" ? pxToVhString(20) : 20;
    return (_jsxDEV("div", __assign({ style: { paddingTop: itemPaddingTop } }, { children: [_jsxDEV(Item, { data: data, isActive: id === activeItemId, isLoading: isLoading, level: level, title: title, onClick: handleOnClick, arrowDirection: children ? (isOpen ? "up" : "down") : undefined, ref: ref }, void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 7 }, _this), children ? (_jsxDEV(Measure, __assign({ bounds: true }, { children: function (_a) {
                    var _b, _c;
                    var contentRect = _a.contentRect, measureRef = _a.measureRef;
                    var height = (_c = (_b = contentRect.bounds) === null || _b === void 0 ? void 0 : _b.height) !== null && _c !== void 0 ? _c : 0;
                    return (_jsxDEV(motion.div, __assign({ className: classes["animation-wrapper"], animate: {
                            height: isOpen ? "auto" : 0,
                        } }, { children: _jsxDEV("div", __assign({ ref: measureRef }, { children: [children, _jsxDEV("div", { className: classes["dots"], style: {
                                        height: height - 15,
                                    } }, void 0, false, { fileName: _jsxFileName, lineNumber: 75, columnNumber: 19 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 73, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 66, columnNumber: 21 }, _this));
                } }), void 0, false, { fileName: _jsxFileName, lineNumber: 62, columnNumber: 20 }, _this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 11 }, _this));
};
export { Collapse };
//# sourceMappingURL=index.js.map