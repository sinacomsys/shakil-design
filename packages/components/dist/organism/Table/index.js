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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.DEFAULT_ALIGN = exports.SCROLL_BAR = exports.ROW_SELECTION = exports.SEARCH_ICON = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/index.tsx";
var react_1 = require("react");
var react_measure_1 = __importDefault(require("react-measure"));
var react_virtual_1 = require("@tanstack/react-virtual");
var atoms_1 = require("../../atoms");
var noContent_1 = require("../../molecules/noContent");
var theme_1 = require("../../theme");
var context_1 = require("./context");
var header_1 = require("./header");
var searchBar_1 = require("./searchBar");
var style_1 = require("./style");
var classnames_1 = __importDefault(require("classnames"));
var src_1 = require("@shakil-design/utils/src");
var body_1 = require("./body");
exports.SEARCH_ICON = 32;
exports.ROW_SELECTION = 62;
exports.SCROLL_BAR = 8;
exports.DEFAULT_ALIGN = "center";
var ROW_HEIGHT = 32;
function Table(props) {
    var _this = this;
    var _a, _b, _c;
    var data = props.data, rowKey = props.rowKey, headerStyle = props.headerStyle, headerClassName = props.headerClassName, searchBarClassName = props.searchBarClassName, searchBarToggle = props.searchBarToggle, searchBarStyle = props.searchBarStyle, filterIcon = props.filterIcon, clearFilterIcon = props.clearFilterIcon, isLoading = props.isLoading, onSelectRow = props.onSelectRow, height = props.height, coloums = props.coloums, noContent = props.noContent, overScan = props.overScan, testid = props.testid, onRow = props.onRow, mode = props.mode, onResetFilters = props.onResetFilters, onLoadNextPage = props.onLoadNextPage, isLoadingMore = props.isLoadingMore;
    var _d = (0, theme_1.useTheme)().table, _e = _d === void 0 ? {} : _d, header = _e.header;
    var classes = (0, style_1.useStyles)({ height: height });
    var _f = (0, react_1.useState)(undefined), order = _f[0], setOrder = _f[1];
    var _g = (0, react_1.useState)(false), isSearchVisible = _g[0], setShowSearchBar = _g[1];
    var _h = (0, react_1.useState)(undefined), orderBy = _h[0], setOrderBy = _h[1];
    var _j = (0, react_1.useState)(undefined), selectedRow = _j[0], setSelectedRow = _j[1];
    var _k = (0, react_1.useState)([]), checkedRows = _k[0], setCheckRows = _k[1];
    var _l = (0, react_1.useState)(false), isAllRowsChecked = _l[0], setAllRowsChecked = _l[1];
    var tableContainerRef = (0, react_1.useRef)(null);
    var _m = (0, react_1.useState)(0), bodyHeight = _m[0], setBodyHeight = _m[1];
    var _o = (0, react_1.useState)(false), isOverFlowed = _o[0], setIsOverflowed = _o[1];
    var _p = (0, src_1.useWindowSize)(), windowHeight = _p.height, windowWidth = _p.width;
    var vw = windowWidth / 100;
    var rowSelectionWidth = (0, src_1.pxToVw)(exports.ROW_SELECTION) * vw;
    var searchIconWidth = (0, src_1.pxToVw)(exports.SEARCH_ICON) * vw;
    var _searchIconWidth = mode === "multiple" ? rowSelectionWidth : searchIconWidth;
    (0, react_1.useEffect)(function () {
        var isOver = bodyHeight > height;
        setIsOverflowed(isOver);
    }, [bodyHeight, height]);
    var list = (0, react_1.useMemo)(function () {
        var _a;
        var result = data || [];
        if (orderBy) {
            var sorter_1 = (_a = coloums.find(function (_a) {
                var dataIndex = _a.dataIndex;
                return dataIndex === orderBy;
            })) === null || _a === void 0 ? void 0 : _a.sorter;
            result = __spreadArray([], (data || []), true).sort(function (a, b) {
                return (order === "ascending" ? sorter_1 === null || sorter_1 === void 0 ? void 0 : sorter_1(a, b) : sorter_1 === null || sorter_1 === void 0 ? void 0 : sorter_1(b, a)) || 0;
            });
        }
        return result;
    }, [orderBy, data, order, coloums]);
    var onToggleSearchBar = function () {
        setShowSearchBar(function (prev) {
            return !prev;
        });
        searchBarToggle === null || searchBarToggle === void 0 ? void 0 : searchBarToggle();
    };
    var calculateWidth = function (totalWidth) {
        var withOutDeclaredWidth = 0;
        var columnsWidth = coloums.reduce(function (prev, _a) {
            var width = _a.width;
            return prev + (width || 0);
        }, 0);
        var scrollBarWidth = isOverFlowed ? 0 : (0, src_1.pxToVw)(exports.SCROLL_BAR) * vw;
        var _columnsWidth = (0, src_1.pxToVw)(columnsWidth) * vw;
        var searchIconWidth = _searchIconWidth;
        var remainWidth = totalWidth - (_columnsWidth + scrollBarWidth + searchIconWidth);
        coloums.forEach(function (_a) {
            var width = _a.width;
            if (!width) {
                withOutDeclaredWidth += 1;
            }
        });
        if (withOutDeclaredWidth) {
            return remainWidth / withOutDeclaredWidth;
        }
    };
    var isSearchAvailable = coloums.find(function (_a) {
        var renderFilter = _a.renderFilter;
        return renderFilter;
    });
    var onOrderChange = function (_a) {
        var dataIndex = _a.dataIndex;
        setOrder(dataIndex === orderBy
            ? order === "ascending"
                ? "descending"
                : order === "descending"
                    ? undefined
                    : "ascending"
            : "ascending");
        setOrderBy(dataIndex === orderBy && order === "descending" ? undefined : dataIndex);
    };
    var handleCheckRow = function (_a) {
        var rowId = _a.rowId;
        var isCurrentRowAlreadySelected = checkedRows.find(function (item) {
            return rowKey && item[rowKey] === rowId;
        });
        if (isCurrentRowAlreadySelected) {
            var filtered = checkedRows.filter(function (item) {
                return rowKey && item[rowKey] !== rowId;
            });
            setCheckRows(filtered);
            return;
        }
        var selectedRow = (data || []).find(function (item) {
            return rowKey && item[rowKey] === rowId;
        });
        if (selectedRow) {
            setCheckRows(function (prev) {
                return __spreadArray(__spreadArray([], prev, true), [selectedRow], false);
            });
        }
    };
    var handleOnSelectRow = function (value) {
        if (mode === "single") {
            setSelectedRow(value);
            onSelectRow === null || onSelectRow === void 0 ? void 0 : onSelectRow(value);
        }
    };
    var onCheckAllRows = function () {
        if (!rowKey)
            return;
        setAllRowsChecked(function (prev) { return !prev; });
        if (data) {
            setCheckRows(data);
        }
        if (isAllRowsChecked) {
            setCheckRows([]);
        }
    };
    (0, react_1.useEffect)(function () {
        if (mode === "multiple") {
            onSelectRow === null || onSelectRow === void 0 ? void 0 : onSelectRow(checkedRows);
        }
        if (checkedRows.length === 0) {
            setAllRowsChecked(false);
            return;
        }
        if (checkedRows.length === (data === null || data === void 0 ? void 0 : data.length)) {
            setAllRowsChecked(true);
        }
    }, [data, checkedRows, mode, onSelectRow]);
    var estimateSize = (0, react_1.useMemo)(function () {
        return (ROW_HEIGHT / 10.8) * (windowHeight / 100);
    }, [windowHeight]);
    var rowVirtualizer = (0, react_virtual_1.useVirtualizer)({
        getScrollElement: function () {
            return tableContainerRef.current;
        },
        count: list.length,
        overscan: overScan || 20,
        estimateSize: function () { return estimateSize; },
    });
    var getVirtualItems = rowVirtualizer.getVirtualItems, getTotalSize = rowVirtualizer.getTotalSize;
    var paddingTop = getVirtualItems().length > 0 ? ((_b = (_a = getVirtualItems()) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.start) || 0 : 0;
    var paddingBottom = getVirtualItems().length > 0
        ? getTotalSize() -
            (((_c = getVirtualItems()[getVirtualItems().length - 1]) === null || _c === void 0 ? void 0 : _c.end) || 0)
        : 0;
    var isIndeterminate = checkedRows.length > 0 && checkedRows.length !== (data || []).length;
    var _noContent = noContent ? noContent : (0, jsx_dev_runtime_1.jsxDEV)(noContent_1.NoContent, { text: "No Data!" }, void 0, false, { fileName: _jsxFileName, lineNumber: 260, columnNumber: 45 }, this);
    var getBodyHeight = (0, react_1.useCallback)(function (body) {
        setBodyHeight((body === null || body === void 0 ? void 0 : body.clientHeight) || 0);
    }, []);
    var onDeselectCheckedRows = function (row) {
        if (mode === "multiple") {
            setCheckRows([row]);
            onSelectRow === null || onSelectRow === void 0 ? void 0 : onSelectRow([row]);
        }
    };
    return ((0, jsx_dev_runtime_1.jsxDEV)(react_measure_1.default, __assign({ bounds: true }, { children: function (_a) {
            var _b;
            var contentRect = _a.contentRect, measureRef = _a.measureRef;
            var boundsWidth = (((_b = contentRect.bounds) === null || _b === void 0 ? void 0 : _b.width) || 0) - (isOverFlowed ? exports.SCROLL_BAR : 0);
            var colWidth = calculateWidth(boundsWidth !== null && boundsWidth !== void 0 ? boundsWidth : 0);
            return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ ref: measureRef, className: (0, classnames_1.default)(isLoading && classes["backDrop"], classes["container"]) }, { children: [isLoading && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["spinner"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Spinner, { size: "large" }, void 0, false, { fileName: _jsxFileName, lineNumber: 290, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 288, columnNumber: 28 }, _this)), (0, jsx_dev_runtime_1.jsxDEV)(context_1.TableContext.Provider, __assign({ value: {
                            isAllRowsChecked: isAllRowsChecked,
                            onCheckAllRows: onCheckAllRows,
                            onOrderChange: onOrderChange,
                            order: order,
                            orderBy: orderBy,
                            selectedRow: selectedRow,
                            onSelectRow: handleOnSelectRow,
                            isOverflowed: isOverFlowed,
                            testid: testid,
                            onRow: onRow,
                            virtualizer: rowVirtualizer,
                            handleCheckRow: handleCheckRow,
                            checkedRows: checkedRows,
                            rowKey: rowKey,
                            data: data || [],
                            mode: mode,
                            onDeselectCheckedRows: onDeselectCheckedRows,
                            onLoadNextPage: onLoadNextPage,
                        } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["wrapper"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("table", __assign({ className: classes["table"], role: "table" }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("colgroup", { children: [(0, jsx_dev_runtime_1.jsxDEV)("col", { style: {
                                                        width: _searchIconWidth,
                                                    } }, void 0, false, { fileName: _jsxFileName, lineNumber: 318, columnNumber: 21 }, _this), coloums.map(function (_a) {
                                                    var width = _a.width, dataIndex = _a.dataIndex;
                                                    var _width = width && (0, src_1.pxToVw)(width) * vw;
                                                    return ((0, jsx_dev_runtime_1.jsxDEV)("col", { style: { width: _width ? _width : colWidth } }, dataIndex, false, { fileName: _jsxFileName, lineNumber: 325, columnNumber: 31 }, _this));
                                                }), isOverFlowed ? ((0, jsx_dev_runtime_1.jsxDEV)("col", { style: { width: (0, src_1.pxToVw)(exports.SCROLL_BAR) * vw } }, void 0, false, { fileName: _jsxFileName, lineNumber: 332, columnNumber: 38 }, _this)) : null] }, void 0, true, { fileName: _jsxFileName, lineNumber: 317, columnNumber: 19 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("thead", __assign({ className: headerClassName, style: __assign({ backgroundColor: header }, headerStyle) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(header_1.Header, { filterIcon: filterIcon, isSearchVisible: isSearchVisible, onToggleSearchBar: isSearchAvailable && onToggleSearchBar, columns: coloums, isIndeterminate: isIndeterminate }, void 0, false, { fileName: _jsxFileName, lineNumber: 343, columnNumber: 21 }, _this), isSearchAvailable ? ((0, jsx_dev_runtime_1.jsxDEV)(searchBar_1.SearchBar, { isIndeterminate: isIndeterminate, clearFilterIcon: clearFilterIcon, searchBarStyle: searchBarStyle, searchBarClassName: searchBarClassName, columns: coloums, data: data || [], isSearchVisible: isSearchVisible, onResetFilters: onResetFilters }, void 0, false, { fileName: _jsxFileName, lineNumber: 351, columnNumber: 43 }, _this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 336, columnNumber: 19 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 316, columnNumber: 17 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.ScrollView, __assign({ ref: tableContainerRef, className: classes["table-body"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(body_1.TableBody, { ref: getBodyHeight, paddingTop: paddingTop, paddingBottom: paddingBottom, noContent: _noContent, searchIconWidth: _searchIconWidth, virtualRows: getVirtualItems(), colWidth: colWidth, coloums: coloums, dataList: list, width: boundsWidth || 0, loadingMore: isLoadingMore || false }, void 0, false, { fileName: _jsxFileName, lineNumber: 369, columnNumber: 19 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 365, columnNumber: 17 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 315, columnNumber: 15 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 293, columnNumber: 13 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 280, columnNumber: 17 }, _this));
        } }), void 0, false, { fileName: _jsxFileName, lineNumber: 273, columnNumber: 11 }, this));
}
exports.Table = Table;
//# sourceMappingURL=index.js.map