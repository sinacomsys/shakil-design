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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Row = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var style_1 = require("./style");
var context_1 = require("../context");
var Row = function (_a) {
    var isChecked = _a.isChecked, isSelected = _a.isSelected, rowIndex = _a.rowIndex, rowData = _a.rowData, virtualItem = _a.virtualItem, onClick = _a.onClick, lastItem = _a.lastItem, rest = __rest(_a, ["isChecked", "isSelected", "rowIndex", "rowData", "virtualItem", "onClick", "lastItem"]);
    var _b = (0, context_1.useMyTableContext)(), onRow = _b.onRow, rowKey = _b.rowKey, mode = _b.mode, onSelectRow = _b.onSelectRow, onDeselectCheckedRows = _b.onDeselectCheckedRows;
    var _c = (0, react_1.useState)(false), isHoverd = _c[0], setIsHovered = _c[1];
    var classes = (0, style_1.useStyles)({
        isChecked: isChecked,
        isHoverd: isHoverd,
        isOnCheckedRowsAvailable: mode === "multiple",
        isSelected: isSelected,
    });
    return ((0, jsx_runtime_1.jsx)("tr", __assign({}, rest, onRow === null || onRow === void 0 ? void 0 : onRow(rowData, rowIndex), { ref: lastItem, "data-testid": rowKey ? "row-".concat(String(rowData[rowKey])) : rowIndex, onMouseEnter: function (e) {
            var _a, _b;
            (_b = onRow === null || onRow === void 0 ? void 0 : (_a = onRow(rowData, rowIndex)).onMouseEnter) === null || _b === void 0 ? void 0 : _b.call(_a, e);
            setIsHovered(true);
        }, onMouseLeave: function (e) {
            var _a, _b;
            (_b = onRow === null || onRow === void 0 ? void 0 : (_a = onRow(rowData, rowIndex)).onMouseLeave) === null || _b === void 0 ? void 0 : _b.call(_a, e);
            setIsHovered(false);
        }, onClick: function (e) {
            var _a, _b;
            (_b = onRow === null || onRow === void 0 ? void 0 : (_a = onRow(rowData, rowIndex)).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
            mode === "single" && (onSelectRow === null || onSelectRow === void 0 ? void 0 : onSelectRow(rowData));
            mode === "multiple" && onDeselectCheckedRows(rowData);
        }, className: classes["row"] })));
};
exports.Row = Row;
//# sourceMappingURL=index.js.map