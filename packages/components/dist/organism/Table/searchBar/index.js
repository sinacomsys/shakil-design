define(["require", "exports", "react/jsx-dev-runtime", "react", "..", "../../../atoms", "../../../molecules", "../../../theme", "@shakil-design/utils", "../context"], function (require, exports, jsx_dev_runtime_1, react_1, __1, atoms_1, molecules_1, theme_1, utils_1, context_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SearchBar = void 0;
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/searchBar/index.tsx";
    const SearchBar = ({ isSearchVisible, columns, data, searchBarStyle, onResetFilters, searchBarClassName, clearFilterIcon, isIndeterminate, }) => {
        const { table: { filtersTab, divider } = {} } = (0, theme_1.useTheme)();
        const { onCheckAllRows, isAllRowsChecked, isOnCheckedRowsAvailable } = (0, react_1.useContext)(context_1.TableContext);
        return ((0, jsx_dev_runtime_1.jsxDEV)("tr", Object.assign({ className: searchBarClassName, style: Object.assign({ display: isSearchVisible ? "table-row" : "none", height: `${(0, utils_1.pxToVh)(45)}vh`, backgroundColor: filtersTab }, searchBarStyle) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("th", Object.assign({ style: { width: __1.SEARCH_ICON } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        } }, { children: [isOnCheckedRowsAvailable ? ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: {
                                    borderRight: `1px solid ${divider}`,
                                    width: 31,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 24,
                                } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(molecules_1.CheckBox, { checked: isAllRowsChecked, onChange: onCheckAllRows, indeterminate: isIndeterminate }, void 0, false, { fileName: _jsxFileName, lineNumber: 63, columnNumber: 15 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 40 }, this)) : null, (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: {
                                    height: 24,
                                    width: 31,
                                    borderRight: `1px solid ${divider}`,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                } }, { children: clearFilterIcon ? (clearFilterIcon) : ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { wrapperStyle: { cursor: "pointer" }, onClick: onResetFilters, color: "white", name: "Table-_-Clear-Filters", size: { width: 16, height: 16 } }, void 0, false, { fileName: _jsxFileName, lineNumber: 82, columnNumber: 18 }, this)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 70, columnNumber: 11 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 9 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 7 }, this), columns.map(({ renderFilter, align }, index) => {
                    return ((0, jsx_dev_runtime_1.jsxDEV)("th", Object.assign({ style: { textAlign: align ? align : __1.DEFAULT_ALIGN } }, { children: renderFilter ? renderFilter({ data }) : null }), index, false, { fileName: _jsxFileName, lineNumber: 95, columnNumber: 17 }, this));
                }), (0, jsx_dev_runtime_1.jsxDEV)("th", {}, void 0, false, { fileName: _jsxFileName, lineNumber: 101, columnNumber: 7 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 34, columnNumber: 11 }, this));
    };
    exports.SearchBar = SearchBar;
});
//# sourceMappingURL=index.js.map