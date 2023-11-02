var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react/jsx-dev-runtime", "framer-motion", "react", "react-measure", "../item", "./style", "../context/treeProvider", "@shakil-design/utils"], function (require, exports, jsx_dev_runtime_1, framer_motion_1, react_1, react_measure_1, item_1, style_1, treeProvider_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Collapse = void 0;
    react_measure_1 = __importDefault(react_measure_1);
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tree/collapse/index.tsx";
    const Collapse = ({ title, children, level, data, onLoadData, onClick, activeItemId, id, defaultOpen, }) => {
        const ref = (0, react_1.useRef)(null);
        const { unit } = (0, react_1.useContext)(treeProvider_1.TreeContext);
        const classes = (0, style_1.useStyles)();
        const [isOpen, setOpen] = (0, react_1.useState)(false);
        const [isLoading, setLoading] = (0, react_1.useState)(false);
        const handleOnClick = () => {
            var _a;
            onClick === null || onClick === void 0 ? void 0 : onClick({ data, level });
            if (children) {
                setOpen((prev) => !prev);
            }
            if (typeof onLoadData === "undefined")
                return;
            setLoading(true);
            (_a = onLoadData === null || onLoadData === void 0 ? void 0 : onLoadData({ data, level })) === null || _a === void 0 ? void 0 : _a.finally(() => {
                setLoading(false);
                if (!children) {
                    setOpen(true);
                }
            });
        };
        (0, react_1.useEffect)(() => {
            var _a;
            if (defaultOpen) {
                (_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: "center", behavior: "smooth" });
                setOpen(true);
            }
        }, [defaultOpen]);
        const itemPaddingTop = unit === "viewport" ? (0, utils_1.pxToVhString)(20) : 20;
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { paddingTop: itemPaddingTop } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(item_1.Item, { data: data, isActive: id === activeItemId, isLoading: isLoading, level: level, title: title, onClick: handleOnClick, arrowDirection: children ? (isOpen ? "up" : "down") : undefined, ref: ref }, void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 7 }, this), children ? ((0, jsx_dev_runtime_1.jsxDEV)(react_measure_1.default, Object.assign({ bounds: true }, { children: ({ contentRect, measureRef }) => {
                        var _a, _b;
                        const height = (_b = (_a = contentRect.bounds) === null || _a === void 0 ? void 0 : _a.height) !== null && _b !== void 0 ? _b : 0;
                        return ((0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.motion.div, Object.assign({ className: classes["animation-wrapper"], animate: {
                                height: isOpen ? "auto" : 0,
                            } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ ref: measureRef }, { children: [children, (0, jsx_dev_runtime_1.jsxDEV)("div", { className: classes["dots"], style: {
                                            height: height - 15,
                                        } }, void 0, false, { fileName: _jsxFileName, lineNumber: 75, columnNumber: 19 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 73, columnNumber: 17 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 66, columnNumber: 21 }, this));
                    } }), void 0, false, { fileName: _jsxFileName, lineNumber: 62, columnNumber: 20 }, this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 11 }, this));
    };
    exports.Collapse = Collapse;
});
//# sourceMappingURL=index.js.map