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
var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tree/index.tsx";
import { findGrandParents, flatData } from "@shakil-design/utils";
import { useContext } from "react";
import { Collapse } from "./collapse";
import { LevelContext } from "./context/levelProvider";
import { TreeContext } from "./context/treeProvider";
import { useStyle } from "./style";
import classNames from "classnames";
import { PX_UNIT, VIEW_PORT_UNIT } from "../../types";
var Tree = function (_a) {
    var data = _a.data, onSelectItem = _a.onSelectItem, onLoadData = _a.onLoadData, activeItemId = _a.activeItemId, defaultSeletedItem = _a.defaultSeletedItem;
    var level = useContext(LevelContext);
    var unit = useContext(TreeContext).unit;
    var flat = flatData(data);
    var grandPrents = findGrandParents(defaultSeletedItem, flat);
    var classes = useStyle();
    return (_jsxDEV("div", __assign({ className: classNames(classes["wrapper"], level > 1 && unit === "pixel"
            ? "".concat(classes["wrapper"]).concat(PX_UNIT)
            : level > 1 &&
                unit === "viewport" &&
                "".concat(classes["wrapper"]).concat(VIEW_PORT_UNIT)) }, { children: data.map(function (child) {
            var _a;
            var isExist = grandPrents.find(function (item) { return item.id === child.id; });
            return (_jsxDEV(Collapse, __assign({ onClick: onSelectItem, data: child, title: child.title, level: level, onLoadData: onLoadData, id: child.id, activeItemId: activeItemId, defaultOpen: Boolean(isExist) }, { children: ((_a = child === null || child === void 0 ? void 0 : child.children) === null || _a === void 0 ? void 0 : _a.length) ? (_jsxDEV(LevelContext.Provider, __assign({ value: level + 1 }, { children: _jsxDEV(Tree, { onSelectItem: onSelectItem, data: child.children, onLoadData: onLoadData, activeItemId: activeItemId, defaultSeletedItem: defaultSeletedItem }, void 0, false, { fileName: _jsxFileName, lineNumber: 51, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 41 }, _this)) : null }), child.id, false, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 17 }, _this));
        }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 24, columnNumber: 11 }, _this));
};
var TreeWrapper = function (_a) {
    var _b = _a.unit, unit = _b === void 0 ? "viewport" : _b, props = __rest(_a, ["unit"]);
    return (_jsxDEV(TreeContext.Provider, __assign({ value: { unit: unit } }, { children: _jsxDEV(Tree, __assign({}, props), void 0, false, { fileName: _jsxFileName, lineNumber: 73, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 71, columnNumber: 11 }, _this));
};
export { TreeWrapper as Tree };
//# sourceMappingURL=index.js.map