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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/rowContainer/index.tsx";
var react_1 = require("react");
var checkbox_1 = require("../../../molecules/checkbox");
var theme_1 = require("../../../theme");
var cell_1 = require("../cell");
var context_1 = require("../context");
var row_1 = require("../row");
var Rows = function (_a) {
    var rowData = _a.rowData, columns = _a.columns, data = _a.data, rowIndex = _a.index, rowKey = _a.rowKey, checkedRows = _a.checkedRows, handleCheckRow = _a.handleCheckRow;
    var _b = (0, theme_1.useTheme)().table, _c = _b === void 0 ? {} : _b, selectedRowBookmark = _c.selectedRowBookmark;
    var _d = (0, react_1.useContext)(context_1.TableContext), selectedRow = _d.selectedRow, onSelectRow = _d.onSelectRow, isOnCheckedRowsAvailable = _d.isOnCheckedRowsAvailable, isSelectSingleRowAvailable = _d.isSelectSingleRowAvailable;
    var _selectedRow = selectedRow;
    var isChecked = checkedRows.find(function (item) { return rowKey && (item === null || item === void 0 ? void 0 : item[rowKey]) === rowData[rowKey]; });
    var onClickRow = function () {
        if (!isOnCheckedRowsAvailable && isSelectSingleRowAvailable) {
            onSelectRow === null || onSelectRow === void 0 ? void 0 : onSelectRow(rowData);
        }
        if (isOnCheckedRowsAvailable && rowKey) {
            handleCheckRow({ rowId: rowData[rowKey] });
        }
    };
    return ((0, jsx_dev_runtime_1.jsxDEV)(row_1.Row, __assign({ isOnCheckedRowsAvailable: isOnCheckedRowsAvailable, isSelected: Boolean(rowKey && _selectedRow && _selectedRow[rowKey] === rowData[rowKey]), onClick: onClickRow, isChecked: Boolean(isChecked) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("td", __assign({ style: { height: "inherit" } }, { children: [rowKey && selectedRow && _selectedRow[rowKey] === rowData[rowKey] ? ((0, jsx_dev_runtime_1.jsxDEV)("div", { style: {
                            position: "relative",
                            height: "100%",
                            borderInlineStart: "5px solid ".concat(selectedRowBookmark),
                        } }, void 0, false, { fileName: _jsxFileName, lineNumber: 60, columnNumber: 79 }, _this)) : null, isOnCheckedRowsAvailable ? ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { paddingInlineStart: 8 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(checkbox_1.CheckBox, { onChange: function () {
                                rowKey && handleCheckRow({ rowId: rowData[rowKey] });
                            }, checked: Boolean(isChecked) }, void 0, false, { fileName: _jsxFileName, lineNumber: 71, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 69, columnNumber: 38 }, _this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 59, columnNumber: 7 }, _this), columns.map(function (_a, index) {
                var dataIndex = _a.dataIndex, render = _a.render, align = _a.align;
                var cell = rowData[dataIndex];
                return ((0, jsx_dev_runtime_1.jsxDEV)(cell_1.Cell, __assign({ align: align }, { children: (0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: render
                            ? render({
                                value: cell,
                                index: rowIndex,
                                row: rowData,
                                data: data,
                            })
                            : cell }, void 0, false, { fileName: _jsxFileName, lineNumber: 84, columnNumber: 13 }, _this) }), index, false, { fileName: _jsxFileName, lineNumber: 82, columnNumber: 17 }, _this));
            })] }), void 0, true, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 11 }, _this));
};
exports.Rows = Rows;
//# sourceMappingURL=index.js.map