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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rows = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "/home/amir/project/TML/amir-shakil-design/shakil-design/packages/components/src/organism/Table/rowContainer/index.tsx";
var checkbox_1 = require("../../../molecules/checkbox");
var cell_1 = require("../cell");
var context_1 = require("../context");
var row_1 = require("../row");
var style_1 = require("./style");
var Rows = function (_a) {
    var rowData = _a.rowData, columns = _a.columns, rowIndex = _a.index, virtualItem = _a.virtualItem, lastItem = _a.lastItem;
    var _b = (0, context_1.useMyTableContext)(), selectedRow = _b.selectedRow, handleCheckRow = _b.handleCheckRow, checkedRows = _b.checkedRows, rowKey = _b.rowKey, data = _b.data, mode = _b.mode;
    var classes = (0, style_1.useStyles)();
    var isChecked = checkedRows.find(function (item) { return rowKey && (item === null || item === void 0 ? void 0 : item[rowKey]) === rowData[rowKey]; });
    return ((0, jsx_dev_runtime_1.jsxDEV)(row_1.Row, __assign({ lastItem: lastItem, virtualItem: virtualItem, rowData: rowData, rowIndex: rowIndex, isSelected: Boolean(rowKey && selectedRow && selectedRow[rowKey] === rowData[rowKey]), isChecked: Boolean(isChecked) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("td", __assign({ style: { height: "inherit" } }, { children: [rowKey && selectedRow && selectedRow[rowKey] === rowData[rowKey] ? ((0, jsx_dev_runtime_1.jsxDEV)("div", { className: classes["selected"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 78 }, _this)) : null, mode === "multiple" ? ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ onClick: function (e) {
                            e.stopPropagation();
                            rowKey && handleCheckRow({ rowId: rowData[rowKey] });
                        }, className: classes["check-box"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(checkbox_1.CheckBox, { "data-testid": rowKey ? "row-".concat(String(rowData[rowKey])) : rowIndex, checked: Boolean(isChecked) }, void 0, false, { fileName: _jsxFileName, lineNumber: 55, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 33 }, _this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 43, columnNumber: 7 }, _this), columns.map(function (_a, index) {
                var dataIndex = _a.dataIndex, render = _a.render, align = _a.align, ellipsis = _a.ellipsis;
                var cell = rowData[dataIndex];
                return ((0, jsx_dev_runtime_1.jsxDEV)(cell_1.Cell, __assign({ ellipsis: ellipsis, align: align }, { children: (0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: render
                            ? render({
                                value: cell,
                                index: rowIndex,
                                row: rowData,
                                data: data,
                            })
                            : cell }, void 0, false, { fileName: _jsxFileName, lineNumber: 66, columnNumber: 13 }, _this) }), index, false, { fileName: _jsxFileName, lineNumber: 64, columnNumber: 17 }, _this));
            })] }), void 0, true, { fileName: _jsxFileName, lineNumber: 32, columnNumber: 11 }, _this));
};
exports.Rows = Rows;
//# sourceMappingURL=index.js.map