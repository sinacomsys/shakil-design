var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react/jsx-dev-runtime", "@shakil-design/utils", "react", "./collapse", "./context/levelProvider", "./context/treeProvider", "./style", "classnames", "../../types"], function (require, exports, jsx_dev_runtime_1, utils_1, react_1, collapse_1, levelProvider_1, treeProvider_1, style_1, classnames_1, types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tree = void 0;
    classnames_1 = __importDefault(classnames_1);
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tree/index.tsx";
    const Tree = ({ data, onSelectItem, onLoadData, activeItemId, defaultSeletedItem, }) => {
        const level = (0, react_1.useContext)(levelProvider_1.LevelContext);
        const { unit } = (0, react_1.useContext)(treeProvider_1.TreeContext);
        const flat = (0, utils_1.flatData)(data);
        const grandPrents = (0, utils_1.findGrandParents)(defaultSeletedItem, flat);
        const classes = (0, style_1.useStyle)();
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: (0, classnames_1.default)(classes["wrapper"], level > 1 && unit === "pixel"
                ? `${classes["wrapper"]}${types_1.PX_UNIT}`
                : level > 1 &&
                    unit === "viewport" &&
                    `${classes["wrapper"]}${types_1.VIEW_PORT_UNIT}`) }, { children: data.map((child) => {
                var _a;
                const isExist = grandPrents.find((item) => item.id === child.id);
                return ((0, jsx_dev_runtime_1.jsxDEV)(collapse_1.Collapse, Object.assign({ onClick: onSelectItem, data: child, title: child.title, level: level, onLoadData: onLoadData, id: child.id, activeItemId: activeItemId, defaultOpen: Boolean(isExist) }, { children: ((_a = child === null || child === void 0 ? void 0 : child.children) === null || _a === void 0 ? void 0 : _a.length) ? ((0, jsx_dev_runtime_1.jsxDEV)(levelProvider_1.LevelContext.Provider, Object.assign({ value: level + 1 }, { children: (0, jsx_dev_runtime_1.jsxDEV)(Tree, { onSelectItem: onSelectItem, data: child.children, onLoadData: onLoadData, activeItemId: activeItemId, defaultSeletedItem: defaultSeletedItem }, void 0, false, { fileName: _jsxFileName, lineNumber: 51, columnNumber: 17 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 41 }, this)) : null }), child.id, false, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 17 }, this));
            }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 24, columnNumber: 11 }, this));
    };
    const TreeWrapper = (_a) => {
        var { unit = "viewport" } = _a, props = __rest(_a, ["unit"]);
        return ((0, jsx_dev_runtime_1.jsxDEV)(treeProvider_1.TreeContext.Provider, Object.assign({ value: { unit } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(Tree, Object.assign({}, props), void 0, false, { fileName: _jsxFileName, lineNumber: 73, columnNumber: 7 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 71, columnNumber: 11 }, this));
    };
    exports.Tree = TreeWrapper;
});
//# sourceMappingURL=index.js.map