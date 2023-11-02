define(["require", "exports", "react/jsx-dev-runtime", "react", "..", "../../../atoms", "../../../theme", "@shakil-design/utils", "../context", "./style"], function (require, exports, jsx_dev_runtime_1, react_1, __1, atoms_1, theme_1, utils_1, context_1, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Column = void 0;
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/column/index.tsx";
    const Column = ({ title, dataIndex, sorter, style, align = __1.DEFAULT_ALIGN, }) => {
        const { table: { sortArrow } = {} } = (0, theme_1.useTheme)();
        const { onOrderChange, order, orderBy } = (0, react_1.useContext)(context_1.TableContext);
        const isAscending = orderBy === dataIndex && order === "ascending";
        const isDescending = orderBy === dataIndex && order === "descending";
        const onSort = () => {
            if (sorter) {
                onOrderChange({ dataIndex });
            }
        };
        const classes = (0, style_1.useStyles)();
        return ((0, jsx_dev_runtime_1.jsxDEV)("th", Object.assign({ style: Object.assign(Object.assign({}, style), { height: `${(0, utils_1.pxToVh)(45)}vh`, padding: 0 }) }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["column"], style: {
                    cursor: sorter ? "pointer" : "default",
                    justifyContent: align === "center"
                        ? "center"
                        : align === "start"
                            ? "flex-start"
                            : "flex-end",
                }, onClick: onSort }, { children: [typeof title !== "object" ? ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, Object.assign({ size: `${(0, utils_1.pxToVh)(16)}vh`, theme: "Regular", color: "white" }, { children: title }), void 0, false, { fileName: _jsxFileName, lineNumber: 69, columnNumber: 39 }, this)) : (title), sorter ? (isDescending ? ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { size: { width: 9, height: 20 }, color: sortArrow, name: "Table-_-Sort-Icon_A-to-Z" }, void 0, false, { fileName: _jsxFileName, lineNumber: 77, columnNumber: 27 }, this)) : isAscending ? ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { size: { width: 9, height: 20 }, color: sortArrow, name: "Table-_-Sort-Icon_Z-to-A" }, void 0, false, { fileName: _jsxFileName, lineNumber: 83, columnNumber: 30 }, this)) : ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { size: { width: 9, height: 20 }, color: "white", name: "Table-_-Sort-Icon_OFF" }, void 0, false, { fileName: _jsxFileName, lineNumber: 89, columnNumber: 16 }, this))) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 7 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 11 }, this));
    };
    exports.Column = Column;
});
//# sourceMappingURL=index.js.map