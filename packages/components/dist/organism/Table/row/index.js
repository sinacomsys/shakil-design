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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Row = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/row/index.tsx";
var react_1 = require("react");
var style_1 = require("./style");
var context_1 = require("../context");
var Row = function (_a) {
    var isChecked = _a.isChecked, isOnCheckedRowsAvailable = _a.isOnCheckedRowsAvailable, isSelected = _a.isSelected, rowKey = _a.rowKey, rowIndex = _a.rowIndex, rowData = _a.rowData, virtualItem = _a.virtualItem, rest = __rest(_a, ["isChecked", "isOnCheckedRowsAvailable", "isSelected", "rowKey", "rowIndex", "rowData", "virtualItem"]);
    var onRow = (0, context_1.useMyTableContext)().onRow;
    var _b = (0, react_1.useState)(false), isHoverd = _b[0], setIsHovered = _b[1];
    var classes = (0, style_1.useStyles)({
        isChecked: isChecked,
        isHoverd: isHoverd,
        isOnCheckedRowsAvailable: isOnCheckedRowsAvailable,
        isSelected: isSelected,
    });
    return ((0, jsx_dev_runtime_1.jsxDEV)("tr", __assign({}, rest, onRow === null || onRow === void 0 ? void 0 : onRow(rowData, rowIndex), { "data-testid": rowKey ? "row-".concat(String(rowData[rowKey])) : rowIndex, onMouseEnter: function (e) {
            var _a, _b;
            (_b = onRow === null || onRow === void 0 ? void 0 : (_a = onRow(rowData, rowIndex)).onMouseEnter) === null || _b === void 0 ? void 0 : _b.call(_a, e);
            setIsHovered(true);
        }, onMouseLeave: function (e) {
            var _a, _b;
            (_b = onRow === null || onRow === void 0 ? void 0 : (_a = onRow(rowData, rowIndex)).onMouseLeave) === null || _b === void 0 ? void 0 : _b.call(_a, e);
            setIsHovered(false);
        }, className: classes["row"] }), void 0, false, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 11 }, _this));
};
exports.Row = Row;
//# sourceMappingURL=index.js.map