define(["require", "exports", "react/jsx-dev-runtime", "react", "../../../atoms", "../../../molecules/checkbox", "../../../theme", "../column", "../context", "./style"], function (require, exports, jsx_dev_runtime_1, react_1, atoms_1, checkbox_1, theme_1, column_1, context_1, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Header = void 0;
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/header/index.tsx";
    const Header = ({ onToggleSearchBar, filterIcon, columns, isIndeterminate, }) => {
        const { table: { filterIcon: filterIconColor } = {} } = (0, theme_1.useTheme)();
        const classes = (0, style_1.useStyles)();
        const { onCheckAllRows, isAllRowsChecked, isOnCheckedRowsAvailable } = (0, react_1.useContext)(context_1.TableContext);
        return ((0, jsx_dev_runtime_1.jsxDEV)("tr", { children: [(0, jsx_dev_runtime_1.jsxDEV)("th", { children: (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        } }, { children: [isOnCheckedRowsAvailable ? ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["selectAll"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(checkbox_1.CheckBox, { checked: isAllRowsChecked, onChange: onCheckAllRows, indeterminate: isIndeterminate }, void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 15 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 40 }, this)) : null, (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { height: 24 }, className: classes["search"] }, { children: filterIcon ? (filterIcon) : ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { color: filterIconColor, onClick: onToggleSearchBar, name: "Table-_-Filter", size: { width: 14, height: 14 } }, void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 18 }, this)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 11 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 30, columnNumber: 9 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 29, columnNumber: 7 }, this), columns.map(({ dataIndex, title, sorter, style }) => {
                    return ((0, jsx_dev_runtime_1.jsxDEV)(column_1.Column, { dataIndex: dataIndex, title: title, sorter: sorter, style: style }, dataIndex, false, { fileName: _jsxFileName, lineNumber: 62, columnNumber: 17 }, this));
                }), (0, jsx_dev_runtime_1.jsxDEV)("th", {}, void 0, false, { fileName: _jsxFileName, lineNumber: 72, columnNumber: 7 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 27, columnNumber: 11 }, this));
    };
    exports.Header = Header;
});
//# sourceMappingURL=index.js.map