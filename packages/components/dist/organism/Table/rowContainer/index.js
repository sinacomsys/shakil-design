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
exports.RowContainer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var checkbox_1 = require("../../../molecules/checkbox");
var cell_1 = require("../cell");
var context_1 = require("../context");
var row_1 = require("../row");
var style_1 = require("./style");
var classnames_1 = __importDefault(require("classnames"));
var RowContainer = function (_a) {
    var rowData = _a.rowData, columns = _a.columns, rowIndex = _a.index, virtualItem = _a.virtualItem, lastItem = _a.lastItem;
    var _b = (0, context_1.useMyTableContext)(), selectedRow = _b.selectedRow, handleCheckRow = _b.handleCheckRow, checkedRows = _b.checkedRows, rowKey = _b.rowKey, data = _b.data, mode = _b.mode, expandedRows = _b.expandedRows;
    var classes = (0, style_1.useStyles)();
    var isChecked = checkedRows.find(function (item) { return rowKey && item === rowData[rowKey]; });
    var isExpanded = expandedRows === null || expandedRows === void 0 ? void 0 : expandedRows.find(function (item) {
        if (!rowKey)
            return;
        return item === rowData[rowKey];
    });
    return ((0, jsx_runtime_1.jsxs)(row_1.Row, __assign({ lastItem: lastItem, virtualItem: virtualItem, rowData: rowData, rowIndex: rowIndex, isSelected: Boolean(rowKey && selectedRow && selectedRow === rowData[rowKey]), isChecked: Boolean(isChecked) }, { children: [(0, jsx_runtime_1.jsxs)("td", __assign({ style: { height: "inherit" } }, { children: [rowKey && selectedRow && selectedRow === rowData[rowKey] ? ((0, jsx_runtime_1.jsx)("div", { className: classes["selected"] })) : null, mode === "multiple" ? ((0, jsx_runtime_1.jsx)("div", __assign({ onClick: function (e) {
                            e.stopPropagation();
                            rowKey && handleCheckRow({ rowId: rowData[rowKey] });
                        }, className: classes["check-box"] }, { children: (0, jsx_runtime_1.jsx)(checkbox_1.CheckBox, { "data-testid": rowKey ? "row-".concat(String(rowData[rowKey])) : rowIndex, checked: Boolean(isChecked) }) }))) : null] })), columns.map(function (_a, index) {
                var dataIndex = _a.dataIndex, render = _a.render, align = _a.align, ellipsis = _a.ellipsis, renderExpandRow = _a.renderExpandRow;
                var cell = rowData[dataIndex];
                return ((0, jsx_runtime_1.jsxs)(cell_1.Cell, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)(classes["cell"], align === "start" && classes["start"], align === "center" && classes["center"], align === "end" && classes["end"], ellipsis && classes["ellipsis"]) }, { children: render
                                ? render({
                                    value: cell,
                                    index: rowIndex,
                                    row: rowData,
                                    data: data,
                                })
                                : cell })), isExpanded && renderExpandRow
                            ? renderExpandRow({
                                value: cell,
                                index: rowIndex,
                                row: rowData,
                                data: data,
                            })
                            : null] }, index));
            })] })));
};
exports.RowContainer = RowContainer;
//# sourceMappingURL=index.js.map