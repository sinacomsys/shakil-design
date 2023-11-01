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
import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/rowContainer/index.tsx";
import { useContext } from "react";
import { CheckBox } from "../../../molecules/checkbox";
import { useTheme } from "../../../theme";
import { Cell } from "../cell";
import { TableContext } from "../context";
import { Row } from "../row";
var Rows = function (_a) {
    var rowData = _a.rowData, columns = _a.columns, data = _a.data, rowIndex = _a.index, rowKey = _a.rowKey, checkedRows = _a.checkedRows, handleCheckRow = _a.handleCheckRow;
    var _b = useTheme().table, _c = _b === void 0 ? {} : _b, selectedRowBookmark = _c.selectedRowBookmark;
    var _d = useContext(TableContext), selectedRow = _d.selectedRow, onSelectRow = _d.onSelectRow, isOnCheckedRowsAvailable = _d.isOnCheckedRowsAvailable, isSelectSingleRowAvailable = _d.isSelectSingleRowAvailable;
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
    return (_jsxDEV(Row, __assign({ isOnCheckedRowsAvailable: isOnCheckedRowsAvailable, isSelected: Boolean(rowKey && _selectedRow && _selectedRow[rowKey] === rowData[rowKey]), onClick: onClickRow, isChecked: Boolean(isChecked) }, { children: [_jsxDEV("td", __assign({ style: { height: "inherit" } }, { children: [rowKey && selectedRow && _selectedRow[rowKey] === rowData[rowKey] ? (_jsxDEV("div", { style: {
                            position: "relative",
                            height: "100%",
                            borderInlineStart: "5px solid ".concat(selectedRowBookmark),
                        } }, void 0, false, { fileName: _jsxFileName, lineNumber: 60, columnNumber: 79 }, _this)) : null, isOnCheckedRowsAvailable ? (_jsxDEV("div", __assign({ style: { paddingInlineStart: 8 } }, { children: _jsxDEV(CheckBox, { onChange: function () {
                                rowKey && handleCheckRow({ rowId: rowData[rowKey] });
                            }, checked: Boolean(isChecked) }, void 0, false, { fileName: _jsxFileName, lineNumber: 71, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 69, columnNumber: 38 }, _this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 59, columnNumber: 7 }, _this), columns.map(function (_a, index) {
                var dataIndex = _a.dataIndex, render = _a.render, align = _a.align;
                var cell = rowData[dataIndex];
                return (_jsxDEV(Cell, __assign({ align: align }, { children: _jsxDEV(_Fragment, { children: render
                            ? render({
                                value: cell,
                                index: rowIndex,
                                row: rowData,
                                data: data,
                            })
                            : cell }, void 0, false, { fileName: _jsxFileName, lineNumber: 84, columnNumber: 13 }, _this) }), index, false, { fileName: _jsxFileName, lineNumber: 82, columnNumber: 17 }, _this));
            })] }), void 0, true, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 11 }, _this));
};
export { Rows };
//# sourceMappingURL=index.js.map