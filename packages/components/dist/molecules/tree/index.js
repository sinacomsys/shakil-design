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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tree/index.tsx";
var src_1 = require("@shakil-design/utils/src");
var react_1 = require("react");
var collapse_1 = require("./collapse");
var levelProvider_1 = require("./context/levelProvider");
var treeProvider_1 = require("./context/treeProvider");
var style_1 = require("./style");
var classnames_1 = __importDefault(require("classnames"));
var types_1 = require("../../types");
var Tree = function (_a) {
    var data = _a.data, onSelectItem = _a.onSelectItem, onLoadData = _a.onLoadData, activeItemId = _a.activeItemId, defaultSeletedItem = _a.defaultSeletedItem;
    var level = (0, react_1.useContext)(levelProvider_1.LevelContext);
    var unit = (0, react_1.useContext)(treeProvider_1.TreeContext).unit;
    var flat = (0, src_1.flatData)(data);
    var grandPrents = (0, src_1.findGrandParents)(defaultSeletedItem, flat);
    var classes = (0, style_1.useStyle)();
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)(classes["wrapper"], level > 1 && unit === "pixel"
            ? "".concat(classes["wrapper"]).concat(types_1.PX_UNIT)
            : level > 1 &&
                unit === "viewport" &&
                "".concat(classes["wrapper"]).concat(types_1.VIEW_PORT_UNIT)) }, { children: data.map(function (child, index) {
            var _a;
            var isExist = grandPrents.find(function (item) { return item.id === child.id; });
            return ((0, jsx_dev_runtime_1.jsxDEV)(collapse_1.Collapse, __assign({ onClick: onSelectItem, data: child, title: child.title, level: level, onLoadData: onLoadData, id: child.id, activeItemId: activeItemId, defaultOpen: Boolean(isExist), index: index }, { children: ((_a = child === null || child === void 0 ? void 0 : child.children) === null || _a === void 0 ? void 0 : _a.length) ? ((0, jsx_dev_runtime_1.jsxDEV)(levelProvider_1.LevelContext.Provider, __assign({ value: level + 1 }, { children: (0, jsx_dev_runtime_1.jsxDEV)(Tree, { onSelectItem: onSelectItem, data: child.children, onLoadData: onLoadData, activeItemId: activeItemId, defaultSeletedItem: defaultSeletedItem }, void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 41 }, _this)) : null }), child.id, false, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 17 }, _this));
        }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 24, columnNumber: 11 }, _this));
};
var TreeWrapper = function (_a) {
    var _b = _a.unit, unit = _b === void 0 ? "viewport" : _b, props = __rest(_a, ["unit"]);
    return ((0, jsx_dev_runtime_1.jsxDEV)(treeProvider_1.TreeContext.Provider, __assign({ value: { unit: unit } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(Tree, __assign({}, props), void 0, false, { fileName: _jsxFileName, lineNumber: 74, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 72, columnNumber: 11 }, _this));
};
exports.Tree = TreeWrapper;
//# sourceMappingURL=index.js.map