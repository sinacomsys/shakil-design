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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collapse = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tree/collapse/index.tsx";
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var react_measure_1 = __importDefault(require("react-measure"));
var item_1 = require("../item");
var style_1 = require("./style");
var treeProvider_1 = require("../context/treeProvider");
var classnames_1 = __importDefault(require("classnames"));
var types_1 = require("../../../types");
var Collapse = function (_a) {
    var title = _a.title, children = _a.children, level = _a.level, data = _a.data, onLoadData = _a.onLoadData, onClick = _a.onClick, activeItemId = _a.activeItemId, id = _a.id, defaultOpen = _a.defaultOpen, index = _a.index;
    var ref = (0, react_1.useRef)(null);
    var unit = (0, react_1.useContext)(treeProvider_1.TreeContext).unit;
    var classes = (0, style_1.useStyles)();
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useState)(false), isLoading = _c[0], setLoading = _c[1];
    var handleOnClick = function () {
        var _a;
        if (isLoading)
            return;
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
    (0, react_1.useEffect)(function () {
        var _a;
        if (defaultOpen) {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: "center", behavior: "smooth" });
            setOpen(true);
        }
    }, [defaultOpen]);
    var isFirstItem = index === 0 && level === 1;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: isFirstItem
            ? (0, classnames_1.default)(classes.wrapper, "".concat(classes.wrapper, "--first-item"))
            : unit === "viewport"
                ? (0, classnames_1.default)(classes.wrapper, "".concat(classes.wrapper).concat(types_1.VIEW_PORT_UNIT))
                : classes.wrapper }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(item_1.Item, { data: data, isActive: id === activeItemId, isLoading: isLoading, level: level, title: title, onClick: handleOnClick, arrowDirection: children ? (isOpen ? "up" : "down") : undefined, ref: ref }, void 0, false, { fileName: _jsxFileName, lineNumber: 63, columnNumber: 7 }, _this), children ? ((0, jsx_dev_runtime_1.jsxDEV)(react_measure_1.default, __assign({ bounds: true }, { children: function (_a) {
                    var _b, _c;
                    var contentRect = _a.contentRect, measureRef = _a.measureRef;
                    var height = (_c = (_b = contentRect.bounds) === null || _b === void 0 ? void 0 : _b.height) !== null && _c !== void 0 ? _c : 0;
                    return ((0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.motion.div, __assign({ className: classes["animation-wrapper"], animate: {
                            height: isOpen ? "auto" : 0,
                        } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ ref: measureRef }, { children: [children, (0, jsx_dev_runtime_1.jsxDEV)("div", { className: classes["dots"], style: {
                                        height: height - 15,
                                    } }, void 0, false, { fileName: _jsxFileName, lineNumber: 86, columnNumber: 19 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 84, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 77, columnNumber: 21 }, _this));
                } }), void 0, false, { fileName: _jsxFileName, lineNumber: 73, columnNumber: 20 }, _this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 11 }, _this));
};
exports.Collapse = Collapse;
//# sourceMappingURL=index.js.map