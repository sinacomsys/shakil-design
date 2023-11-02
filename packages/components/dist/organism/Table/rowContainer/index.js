define(["require", "exports", "react/jsx-dev-runtime", "react", "../../../molecules/checkbox", "../../../theme", "../cell", "../context", "../row"], function (require, exports, jsx_dev_runtime_1, react_1, checkbox_1, theme_1, cell_1, context_1, row_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Rows = void 0;
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/rowContainer/index.tsx";
    const Rows = ({ rowData, columns, data, index: rowIndex, rowKey, checkedRows, handleCheckRow, }) => {
        const { table: { selectedRowBookmark } = {} } = (0, theme_1.useTheme)();
        const { selectedRow, onSelectRow, isOnCheckedRowsAvailable, isSelectSingleRowAvailable, } = (0, react_1.useContext)(context_1.TableContext);
        const _selectedRow = selectedRow;
        const isChecked = checkedRows.find((item) => rowKey && (item === null || item === void 0 ? void 0 : item[rowKey]) === rowData[rowKey]);
        const onClickRow = () => {
            if (!isOnCheckedRowsAvailable && isSelectSingleRowAvailable) {
                onSelectRow === null || onSelectRow === void 0 ? void 0 : onSelectRow(rowData);
            }
            if (isOnCheckedRowsAvailable && rowKey) {
                handleCheckRow({ rowId: rowData[rowKey] });
            }
        };
        return ((0, jsx_dev_runtime_1.jsxDEV)(row_1.Row, Object.assign({ isOnCheckedRowsAvailable: isOnCheckedRowsAvailable, isSelected: Boolean(rowKey && _selectedRow && _selectedRow[rowKey] === rowData[rowKey]), onClick: onClickRow, isChecked: Boolean(isChecked) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("td", Object.assign({ style: { height: "inherit" } }, { children: [rowKey && selectedRow && _selectedRow[rowKey] === rowData[rowKey] ? ((0, jsx_dev_runtime_1.jsxDEV)("div", { style: {
                                position: "relative",
                                height: "100%",
                                borderInlineStart: `5px solid ${selectedRowBookmark}`,
                            } }, void 0, false, { fileName: _jsxFileName, lineNumber: 60, columnNumber: 79 }, this)) : null, isOnCheckedRowsAvailable ? ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { paddingInlineStart: 8 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(checkbox_1.CheckBox, { onChange: () => {
                                    rowKey && handleCheckRow({ rowId: rowData[rowKey] });
                                }, checked: Boolean(isChecked) }, void 0, false, { fileName: _jsxFileName, lineNumber: 71, columnNumber: 13 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 69, columnNumber: 38 }, this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 59, columnNumber: 7 }, this), columns.map(({ dataIndex, render, align }, index) => {
                    const cell = rowData[dataIndex];
                    return ((0, jsx_dev_runtime_1.jsxDEV)(cell_1.Cell, Object.assign({ align: align }, { children: (0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: render
                                ? render({
                                    value: cell,
                                    index: rowIndex,
                                    row: rowData,
                                    data: data,
                                })
                                : cell }, void 0, false, { fileName: _jsxFileName, lineNumber: 84, columnNumber: 13 }, this) }), index, false, { fileName: _jsxFileName, lineNumber: 82, columnNumber: 17 }, this));
                })] }), void 0, true, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 11 }, this));
    };
    exports.Rows = Rows;
});
//# sourceMappingURL=index.js.map