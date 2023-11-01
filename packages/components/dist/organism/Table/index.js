"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.DEFAULT_ALIGN = exports.SCROLL_BAR = exports.ROW_SELECTION = exports.SEARCH_ICON = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/index.tsx";
const react_1 = require("react");
const react_measure_1 = __importDefault(require("react-measure"));
const react_virtual_1 = require("react-virtual");
const atoms_1 = require("../../atoms");
const noContent_1 = require("../../molecules/noContent");
const theme_1 = require("../../theme");
const context_1 = require("./context");
const header_1 = require("./header");
const rowContainer_1 = require("./rowContainer");
const searchBar_1 = require("./searchBar");
const style_1 = require("./style");
const classnames_1 = __importDefault(require("classnames"));
exports.SEARCH_ICON = 32;
exports.ROW_SELECTION = 62;
exports.SCROLL_BAR = 8;
exports.DEFAULT_ALIGN = "center";
const Table = ({ data, onCheckedRows, rowKey, headerStyle, headerClassName, searchBarClassName, searchBarToggle, searchBarStyle, filterIcon, clearFilterIcon, isLoading, onSelectRow, height, coloums, noContent, overScan, }) => {
    var _a, _b;
    const { table: { header } = {} } = (0, theme_1.useTheme)();
    const classes = (0, style_1.useStyles)();
    const [order, setOrder] = (0, react_1.useState)(undefined);
    const [isSearchVisible, setShowSearchBar] = (0, react_1.useState)(false);
    const [orderBy, setOrderBy] = (0, react_1.useState)(undefined);
    const [selectedRow, setSelectedRow] = (0, react_1.useState)(undefined);
    const [checkedRows, setCheckRows] = (0, react_1.useState)([]);
    const [isAllRowsChecked, setAllRowsChecked] = (0, react_1.useState)(false);
    const tableContainerRef = (0, react_1.useRef)(null);
    const list = (0, react_1.useMemo)(() => {
        var _a;
        let result = data || [];
        if (orderBy) {
            const sorter = (_a = coloums.find(({ dataIndex }) => {
                return dataIndex === orderBy;
            })) === null || _a === void 0 ? void 0 : _a.sorter;
            result = [...(data || [])].sort((a, b) => (order === "ascending" ? sorter === null || sorter === void 0 ? void 0 : sorter(a, b) : sorter === null || sorter === void 0 ? void 0 : sorter(b, a)) || 0);
        }
        return result;
    }, [orderBy, data, order, coloums]);
    const onToggleSearchBar = () => {
        setShowSearchBar((prev) => {
            return !prev;
        });
        searchBarToggle === null || searchBarToggle === void 0 ? void 0 : searchBarToggle();
    };
    const calculateWidth = (totalWidth) => {
        let withOutWidthNum = 0;
        const columnsWidth = coloums.reduce((prev, { width }) => {
            return prev + (width || 0);
        }, 0);
        const remainWidth = totalWidth - (columnsWidth + exports.SCROLL_BAR + exports.SEARCH_ICON);
        coloums.forEach(({ width }) => {
            if (!width) {
                withOutWidthNum += 1;
            }
        });
        if (withOutWidthNum) {
            return remainWidth / withOutWidthNum;
        }
    };
    const searchIconWidth = onCheckedRows ? exports.ROW_SELECTION : exports.SEARCH_ICON;
    const isSearchAvailable = coloums.find(({ renderFilter }) => renderFilter);
    const onOrderChange = ({ dataIndex }) => {
        setOrder(dataIndex === orderBy
            ? order === "ascending"
                ? "descending"
                : order === "descending"
                    ? undefined
                    : "ascending"
            : "ascending");
        setOrderBy(dataIndex === orderBy && order === "descending" ? undefined : dataIndex);
    };
    const handleCheckRow = ({ rowId }) => {
        const currentRow = checkedRows.find((item) => {
            return rowKey && item[rowKey] === rowId;
        });
        if (currentRow) {
            const filtered = checkedRows.filter((item) => {
                return rowKey && item[rowKey] !== rowId;
            });
            setCheckRows(filtered);
            return;
        }
        const selectedRow = (data || []).find((item) => {
            return rowKey && item[rowKey] === rowId;
        });
        if (selectedRow) {
            setCheckRows((prev) => {
                return [...prev, selectedRow];
            });
        }
    };
    const handleOnSelectRow = (value) => {
        setSelectedRow(value);
        onSelectRow === null || onSelectRow === void 0 ? void 0 : onSelectRow(value);
    };
    const onCheckAllRows = () => {
        if (!rowKey)
            return;
        setAllRowsChecked((prev) => !prev);
        if (data) {
            setCheckRows(data);
        }
        if (isAllRowsChecked) {
            setCheckRows([]);
        }
    };
    (0, react_1.useEffect)(() => {
        onCheckedRows === null || onCheckedRows === void 0 ? void 0 : onCheckedRows(checkedRows);
        if (checkedRows.length === 0) {
            setAllRowsChecked(false);
            return;
        }
        if (checkedRows.length === (data === null || data === void 0 ? void 0 : data.length)) {
            setAllRowsChecked(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, checkedRows]);
    const rowVirtualizer = (0, react_virtual_1.useVirtual)({
        parentRef: tableContainerRef,
        size: list.length,
        overscan: overScan || 20,
    });
    const { virtualItems: virtualRows, totalSize } = rowVirtualizer;
    const paddingTop = virtualRows.length > 0 ? ((_a = virtualRows === null || virtualRows === void 0 ? void 0 : virtualRows[0]) === null || _a === void 0 ? void 0 : _a.start) || 0 : 0;
    const paddingBottom = virtualRows.length > 0
        ? totalSize - (((_b = virtualRows === null || virtualRows === void 0 ? void 0 : virtualRows[virtualRows.length - 1]) === null || _b === void 0 ? void 0 : _b.end) || 0)
        : 0;
    const isIndeterminate = checkedRows.length > 0 && checkedRows.length !== (data || []).length;
    const _noContent = noContent ? noContent : (0, jsx_dev_runtime_1.jsxDEV)(noContent_1.NoContent, { text: "No Data!" }, void 0, false, { fileName: _jsxFileName, lineNumber: 195, columnNumber: 45 }, this);
    return ((0, jsx_dev_runtime_1.jsxDEV)(react_measure_1.default, Object.assign({ bounds: true }, { children: ({ contentRect, measureRef }) => {
            var _a;
            const boundsWidth = (_a = contentRect.bounds) === null || _a === void 0 ? void 0 : _a.width;
            const colWidth = calculateWidth(boundsWidth !== null && boundsWidth !== void 0 ? boundsWidth : 0);
            return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ ref: measureRef, style: {
                    height: height,
                }, className: (0, classnames_1.default)(isLoading && classes["backDrop"], classes["container"]) }, { children: [isLoading && ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["spinner"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Spinner, { size: "large" }, void 0, false, { fileName: _jsxFileName, lineNumber: 215, columnNumber: 17 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 213, columnNumber: 28 }, this)), (0, jsx_dev_runtime_1.jsxDEV)(context_1.TableContext.Provider, Object.assign({ value: {
                            isAllRowsChecked,
                            onCheckAllRows,
                            onOrderChange,
                            order,
                            orderBy,
                            selectedRow: selectedRow,
                            onSelectRow: handleOnSelectRow,
                            isOnCheckedRowsAvailable: Boolean(onCheckedRows),
                            isSelectSingleRowAvailable: Boolean(onSelectRow),
                        } }, { children: boundsWidth ? ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["body"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("table", Object.assign({ className: classes["table"], role: "table" }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("colgroup", { children: [(0, jsx_dev_runtime_1.jsxDEV)("col", { style: {
                                                        width: searchIconWidth,
                                                    } }, void 0, false, { fileName: _jsxFileName, lineNumber: 235, columnNumber: 23 }, this), coloums.map(({ width, dataIndex }) => {
                                                    return ((0, jsx_dev_runtime_1.jsxDEV)("col", { style: { width: width ? width : colWidth } }, dataIndex, false, { fileName: _jsxFileName, lineNumber: 241, columnNumber: 33 }, this));
                                                }), (0, jsx_dev_runtime_1.jsxDEV)("col", { style: { width: exports.SCROLL_BAR } }, void 0, false, { fileName: _jsxFileName, lineNumber: 248, columnNumber: 23 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 234, columnNumber: 21 }, this), (0, jsx_dev_runtime_1.jsxDEV)("thead", Object.assign({ className: headerClassName, style: Object.assign({ backgroundColor: header }, headerStyle) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(header_1.Header, { filterIcon: filterIcon, isSearchVisible: isSearchVisible, onToggleSearchBar: isSearchAvailable && onToggleSearchBar, columns: coloums, isIndeterminate: isIndeterminate }, void 0, false, { fileName: _jsxFileName, lineNumber: 257, columnNumber: 23 }, this), isSearchAvailable ? ((0, jsx_dev_runtime_1.jsxDEV)(searchBar_1.SearchBar, { isIndeterminate: isIndeterminate, clearFilterIcon: clearFilterIcon, searchBarStyle: searchBarStyle, searchBarClassName: searchBarClassName, columns: coloums, data: data || [], isSearchVisible: isSearchVisible }, void 0, false, { fileName: _jsxFileName, lineNumber: 267, columnNumber: 45 }, this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 250, columnNumber: 21 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 233, columnNumber: 19 }, this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.ScrollView, Object.assign({ ref: tableContainerRef, style: { flex: 1, overflowY: "auto" } }, { children: virtualRows.length > 0 ? ((0, jsx_dev_runtime_1.jsxDEV)("table", Object.assign({ className: classes["table"], role: "table" }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("colgroup", { children: [(0, jsx_dev_runtime_1.jsxDEV)("col", { style: { width: searchIconWidth } }, void 0, false, { fileName: _jsxFileName, lineNumber: 287, columnNumber: 27 }, this), coloums.map(({ width, dataIndex }) => {
                                                        return ((0, jsx_dev_runtime_1.jsxDEV)("col", { style: { width: width ? width : colWidth } }, dataIndex, false, { fileName: _jsxFileName, lineNumber: 289, columnNumber: 37 }, this));
                                                    })] }, void 0, true, { fileName: _jsxFileName, lineNumber: 286, columnNumber: 25 }, this), (0, jsx_dev_runtime_1.jsxDEV)("tbody", { children: [paddingTop > 0 && ((0, jsx_dev_runtime_1.jsxDEV)("tr", { children: (0, jsx_dev_runtime_1.jsxDEV)("td", { style: { height: `${paddingTop}px` } }, void 0, false, { fileName: _jsxFileName, lineNumber: 301, columnNumber: 31 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 299, columnNumber: 47 }, this)), virtualRows.map((virtualRow, index) => {
                                                        const row = list[virtualRow.index];
                                                        return ((0, jsx_dev_runtime_1.jsxDEV)(rowContainer_1.Rows, { rowKey: rowKey, rowData: row, data: data || [], index: index, columns: coloums, checkedRows: checkedRows, handleCheckRow: handleCheckRow }, index, false, { fileName: _jsxFileName, lineNumber: 306, columnNumber: 37 }, this));
                                                    }), paddingBottom > 0 && ((0, jsx_dev_runtime_1.jsxDEV)("tr", { children: (0, jsx_dev_runtime_1.jsxDEV)("td", { style: { height: `${paddingBottom}px` } }, void 0, false, { fileName: _jsxFileName, lineNumber: 321, columnNumber: 31 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 319, columnNumber: 50 }, this))] }, void 0, true, { fileName: _jsxFileName, lineNumber: 298, columnNumber: 25 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 284, columnNumber: 48 }, this)) : (_noContent) }), void 0, false, { fileName: _jsxFileName, lineNumber: 280, columnNumber: 19 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 231, columnNumber: 31 }, this)) : null }), void 0, false, { fileName: _jsxFileName, lineNumber: 218, columnNumber: 13 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 202, columnNumber: 17 }, this));
        } }), void 0, false, { fileName: _jsxFileName, lineNumber: 197, columnNumber: 11 }, this));
};
exports.Table = Table;
//# sourceMappingURL=index.js.map