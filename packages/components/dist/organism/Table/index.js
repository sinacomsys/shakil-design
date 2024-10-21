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
var jsx_runtime_1 = require("react/jsx-runtime");
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
var context_2 = require("../../theme/context");
var src_2 = require("@shakil-design/utils/src");
exports.SEARCH_ICON = 32;
exports.ROW_SELECTION = 62;
exports.SCROLL_BAR = 11;
exports.DEFAULT_ALIGN = "center";
var ROW_HEIGHT = 33;
var HEADER_HEIGHT = 45;
function Table(props) {
    var data = props.data, rowKey = props.rowKey, headerStyle = props.headerStyle, headerClassName = props.headerClassName, searchBarClassName = props.searchBarClassName, searchBarToggle = props.searchBarToggle, searchBarStyle = props.searchBarStyle, filterIcon = props.filterIcon, clearFilterIcon = props.clearFilterIcon, isLoading = props.isLoading, onSelectRowProps = props.onSelectRow, height = props.height, coloums = props.coloums, noContent = props.noContent, overScan = props.overScan, testid = props.testid, onRow = props.onRow, mode = props.mode, onResetFilters = props.onResetFilters, onLoadNextPage = props.onLoadNextPage, isLoadingMore = props.isLoadingMore, isSearchBarOpenProps = props.isSearchBarOpen, expandedRows = props.expandedRows, endOfList = props.endOfList;
    var _a = (0, theme_1.useTheme)().table, _b = _a === void 0 ? {} : _a, header = _b.header;
    var classes = (0, style_1.useStyles)({ height: height });
    var _c = (0, react_1.useState)(undefined), order = _c[0], setOrder = _c[1];
    var unit = (0, react_1.useContext)(context_2.UnitContext).unit;
    var _d = (0, react_1.useState)(false), isSearchVisible = _d[0], setShowSearchBar = _d[1];
    var _e = (0, react_1.useState)(undefined), orderBy = _e[0], setOrderBy = _e[1];
    var _f = (0, react_1.useState)(undefined), selectedRow = _f[0], setSelectedRow = _f[1];
    var _g = (0, react_1.useState)([]), checkedRows = _g[0], setCheckRows = _g[1];
    var _h = (0, react_1.useState)(false), isAllRowsChecked = _h[0], setAllRowsChecked = _h[1];
    var tableContainerRef = (0, react_1.useRef)(null);
    var _j = (0, react_1.useState)(0), bodyHeight = _j[0], setBodyHeight = _j[1];
    var _k = (0, react_1.useState)(false), isOverFlowed = _k[0], setIsOverflowed = _k[1];
    var _l = (0, src_1.useWindowSize)(), windowHeight = _l.height, windowWidth = _l.width;
    var vw = windowWidth / 100;
    var vh = windowHeight / 100;
    var rowSelectionWidth = (0, src_1.pxToVw)(exports.ROW_SELECTION) * vw;
    var searchIconWidth = (0, src_1.pxToVw)(exports.SEARCH_ICON) * vw;
    var headerHeight = unit === "viewport" ? (0, src_2.pxToVh)(HEADER_HEIGHT) * vh : HEADER_HEIGHT;
    var tableHeight = unit === "viewport" ? (0, src_2.pxToVh)(height) * vh : height;
    var searchIconWidthAccordingToMode = mode === "multiple" ? rowSelectionWidth : searchIconWidth;
    (0, react_1.useEffect)(function () {
        var isOver = bodyHeight > tableHeight - headerHeight;
        setIsOverflowed(isOver);
    }, [bodyHeight, headerHeight, tableHeight]);
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
    var dataWithEndOfList = endOfList
        ? __spreadArray(__spreadArray([], (list || []), true), ["endOfList"], false) : list;
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
        var scrollBarWidth = isOverFlowed ? 0 : exports.SCROLL_BAR;
        var _columnsWidth = (0, src_1.pxToVw)(columnsWidth) * vw;
        var remainWidth = totalWidth -
            (_columnsWidth + scrollBarWidth + searchIconWidthAccordingToMode);
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
        setCheckRows(function (prev) {
            var indexOfItem = prev.findIndex(function (item) {
                return item === rowId;
            });
            if (indexOfItem > -1) {
                var newState = __spreadArray([], prev, true);
                newState.splice(indexOfItem, 1);
                if (mode === "multiple") {
                    onSelectRowProps === null || onSelectRowProps === void 0 ? void 0 : onSelectRowProps(newState);
                }
                return newState;
            }
            else {
                if (mode === "multiple") {
                    onSelectRowProps === null || onSelectRowProps === void 0 ? void 0 : onSelectRowProps(__spreadArray(__spreadArray([], prev, true), [rowId], false));
                }
                return __spreadArray(__spreadArray([], prev, true), [rowId], false);
            }
        });
    };
    var handleOnSelectRow = function (value) {
        if (mode === "single") {
            setSelectedRow(value);
            onSelectRowProps === null || onSelectRowProps === void 0 ? void 0 : onSelectRowProps(value);
        }
    };
    var onCheckAllRows = function () {
        setAllRowsChecked(function (prev) { return !prev; });
        if (data && mode === "multiple") {
            setCheckRows(data
                .map(function (item) {
                if (!rowKey)
                    return;
                return item[rowKey];
            })
                .filter(src_2.isDefined));
            onSelectRowProps === null || onSelectRowProps === void 0 ? void 0 : onSelectRowProps(data);
        }
        if (isAllRowsChecked && mode === "multiple") {
            setCheckRows([]);
            onSelectRowProps === null || onSelectRowProps === void 0 ? void 0 : onSelectRowProps([]);
        }
    };
    (0, react_1.useEffect)(function () {
        if (checkedRows.length === 0) {
            setAllRowsChecked(false);
        }
        else if (checkedRows.length === (data === null || data === void 0 ? void 0 : data.length)) {
            setAllRowsChecked(true);
        }
    }, [data, checkedRows, mode]);
    (0, react_1.useEffect)(function () {
        if (mode === "single") {
            setSelectedRow(props.selectedRow);
            setCheckRows([]);
        }
        else if (mode === "multiple") {
            setCheckRows(props.selectedRows || []);
            setSelectedRow(undefined);
        }
        //@ts-ignore
    }, [onSelectRowProps, mode, props.selectedRow, props.selectedRows]);
    var rowVirtualizer = (0, react_virtual_1.useVirtualizer)({
        getScrollElement: function () {
            return tableContainerRef.current;
        },
        count: dataWithEndOfList.length,
        overscan: overScan || 20,
        estimateSize: function () { return ROW_HEIGHT; },
    });
    var isIndeterminate = checkedRows.length > 0 && checkedRows.length !== (data || []).length;
    var _noContent = noContent ? noContent : (0, jsx_runtime_1.jsx)(noContent_1.NoContent, { text: "No Data!" });
    var getBodyHeight = (0, react_1.useCallback)(function (body) {
        setBodyHeight((body === null || body === void 0 ? void 0 : body.clientHeight) || 0);
    }, []);
    var onDeselectCheckedRows = function (row) {
        if (mode === "multiple") {
            setCheckRows([row]);
            onSelectRowProps === null || onSelectRowProps === void 0 ? void 0 : onSelectRowProps([row]);
        }
    };
    // eslint-disable-next-line @typescript-eslint/naming-convention
    var _isSearchVisible = false;
    if (isSearchBarOpenProps !== undefined) {
        _isSearchVisible = isSearchBarOpenProps;
    }
    else if (isSearchBarOpenProps === undefined) {
        _isSearchVisible = isSearchVisible;
    }
    return ((0, jsx_runtime_1.jsx)(react_measure_1.default, __assign({ bounds: true }, { children: function (_a) {
            var _b;
            var contentRect = _a.contentRect, measureRef = _a.measureRef;
            var boundsWidth = (((_b = contentRect.bounds) === null || _b === void 0 ? void 0 : _b.width) || 0) - (isOverFlowed ? exports.SCROLL_BAR : 0);
            var colWidth = calculateWidth(boundsWidth !== null && boundsWidth !== void 0 ? boundsWidth : 0);
            return ((0, jsx_runtime_1.jsxs)("div", __assign({ ref: measureRef, className: (0, classnames_1.default)(classes["container"]) }, { children: [(0, jsx_runtime_1.jsx)(context_1.TableContext.Provider, __assign({ value: {
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
                            expandedRows: expandedRows,
                        } }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: classes["wrapper"] }, { children: [boundsWidth > 0 ? ((0, jsx_runtime_1.jsxs)("table", __assign({ className: classes["table"], role: "table" }, { children: [(0, jsx_runtime_1.jsxs)("colgroup", { children: [(0, jsx_runtime_1.jsx)("col", { style: {
                                                        width: searchIconWidthAccordingToMode,
                                                    } }), coloums.map(function (_a) {
                                                    var width = _a.width, dataIndex = _a.dataIndex;
                                                    var _width = width && (0, src_1.pxToVw)(width) * vw;
                                                    return ((0, jsx_runtime_1.jsx)("col", { style: { width: _width ? _width : colWidth } }, dataIndex));
                                                }), isOverFlowed ? ((0, jsx_runtime_1.jsx)("col", { style: { width: exports.SCROLL_BAR } })) : null] }), (0, jsx_runtime_1.jsxs)("thead", __assign({ className: headerClassName, style: __assign({ backgroundColor: header }, headerStyle) }, { children: [(0, jsx_runtime_1.jsx)(header_1.Header, { filterIcon: filterIcon, isSearchVisible: _isSearchVisible, onToggleSearchBar: isSearchAvailable && onToggleSearchBar, columns: coloums, isIndeterminate: isIndeterminate, isSearchAvailable: Boolean(isSearchAvailable) }), Boolean(isSearchAvailable) ? ((0, jsx_runtime_1.jsx)(searchBar_1.SearchBar, { isIndeterminate: isIndeterminate, clearFilterIcon: clearFilterIcon, searchBarStyle: searchBarStyle, searchBarClassName: searchBarClassName, columns: coloums, data: data || [], isSearchVisible: _isSearchVisible, onResetFilters: onResetFilters })) : null] }))] }))) : null, (0, jsx_runtime_1.jsx)(atoms_1.ScrollView, __assign({ ref: tableContainerRef, className: classes["table-body"] }, { children: boundsWidth > 0 ? ((0, jsx_runtime_1.jsx)(body_1.TableBody, { ref: getBodyHeight, noContent: _noContent, searchIconWidth: searchIconWidthAccordingToMode, colWidth: colWidth, coloums: coloums, dataList: dataWithEndOfList, width: boundsWidth || 0, isLoadingMore: isLoadingMore, endOfList: endOfList })) : null }))] })) })), isLoading && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "".concat(classes["spinner"], "--overlay") }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: classes["spinner"] }, { children: (0, jsx_runtime_1.jsx)(atoms_1.Spinner, { size: "large" }) })) })))] })));
        } })));
}
exports.Table = Table;
//# sourceMappingURL=index.js.map