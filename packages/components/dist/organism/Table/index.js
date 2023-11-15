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
var _this = this;
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
var utils_1 = require("@shakil-design/utils");
var context_2 = require("../../theme/context");
var body_1 = require("./body");
exports.SEARCH_ICON = 32;
exports.ROW_SELECTION = 62;
exports.SCROLL_BAR = 8;
exports.DEFAULT_ALIGN = "center";
var ROW_HEIGHT = 32;
var Table = function (_a) {
    var _b, _c, _d, _e;
    var data = _a.data, onCheckedRows = _a.onCheckedRows, rowKey = _a.rowKey, headerStyle = _a.headerStyle, headerClassName = _a.headerClassName, searchBarClassName = _a.searchBarClassName, searchBarToggle = _a.searchBarToggle, searchBarStyle = _a.searchBarStyle, filterIcon = _a.filterIcon, clearFilterIcon = _a.clearFilterIcon, isLoading = _a.isLoading, onSelectRow = _a.onSelectRow, height = _a.height, coloums = _a.coloums, noContent = _a.noContent, overScan = _a.overScan, testid = _a.testid;
    var _f = (0, theme_1.useTheme)().table, _g = _f === void 0 ? {} : _f, header = _g.header;
    var classes = (0, style_1.useStyles)();
    var _h = (0, react_1.useState)(undefined), order = _h[0], setOrder = _h[1];
    var _j = (0, react_1.useState)(false), isSearchVisible = _j[0], setShowSearchBar = _j[1];
    var _k = (0, react_1.useState)(undefined), orderBy = _k[0], setOrderBy = _k[1];
    var _l = (0, react_1.useState)(undefined), selectedRow = _l[0], setSelectedRow = _l[1];
    var _m = (0, react_1.useState)([]), checkedRows = _m[0], setCheckRows = _m[1];
    var unit = (0, react_1.useContext)(context_2.UnitContext).unit;
    var _o = (0, react_1.useState)(false), isAllRowsChecked = _o[0], setAllRowsChecked = _o[1];
    var tableContainerRef = (0, react_1.useRef)(null);
    var _p = (0, react_1.useState)(false), isOverflowed = _p[0], setIsOverflowed = _p[1];
    var windowHeight = (0, utils_1.useWindowSize)().height;
    var isViewPortUnit = unit === "viewport";
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
    (0, react_1.useLayoutEffect)(function () {
        var element = tableContainerRef.current;
        if (element) {
            var isElementOverflowed = element.scrollWidth > element.clientWidth;
            setIsOverflowed(isElementOverflowed);
        }
    }, [data]);
    var calculateWidth = function (totalWidth) {
        var withOutDeclaredWidth = 0;
        var columnsWidth = coloums.reduce(function (prev, _a) {
            var width = _a.width;
            return prev + (width || 0);
        }, 0);
        var scrollBarWidth = isOverflowed
            ? 0
            : isViewPortUnit
                ? (0, utils_1.pxToVw)(exports.SCROLL_BAR)
                : exports.SCROLL_BAR;
        var _columnsWidth = isViewPortUnit ? (0, utils_1.pxToVw)(columnsWidth) : columnsWidth;
        var searchIconWidth = isViewPortUnit ? (0, utils_1.pxToVw)(exports.SEARCH_ICON) : exports.SEARCH_ICON;
        var _totalWidth = isViewPortUnit ? (0, utils_1.pxToVw)(totalWidth) : totalWidth;
        var remainWidth = _totalWidth - (_columnsWidth + scrollBarWidth + searchIconWidth);
        coloums.forEach(function (_a) {
            var width = _a.width;
            if (!width) {
                withOutDeclaredWidth += 1;
            }
        });
        if (withOutDeclaredWidth && unit === "pixel") {
            return remainWidth / withOutDeclaredWidth;
        }
        else if (withOutDeclaredWidth && isViewPortUnit) {
            return "".concat(remainWidth / withOutDeclaredWidth, "vw");
        }
    };
    var rowSelectionWidth = isViewPortUnit
        ? (0, utils_1.pxToVwString)(exports.ROW_SELECTION)
        : exports.ROW_SELECTION;
    var searchIconWidth = isViewPortUnit
        ? (0, utils_1.pxToVwString)(exports.SEARCH_ICON)
        : exports.SEARCH_ICON;
    var _searchIconWidth = onCheckedRows ? rowSelectionWidth : searchIconWidth;
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
        var currentRow = checkedRows.find(function (item) {
            return rowKey && item[rowKey] === rowId;
        });
        if (currentRow) {
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
        setSelectedRow(value);
        onSelectRow === null || onSelectRow === void 0 ? void 0 : onSelectRow(value);
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
    var rowVirtualizer = (0, react_virtual_1.useVirtualizer)({
        getScrollElement: function () { return tableContainerRef.current; },
        overscan: overScan || 20,
        count: list.length,
        estimateSize: function () {
            return (ROW_HEIGHT / 10.8) * (windowHeight / 100);
        },
    });
    var getVirtualItems = rowVirtualizer.getVirtualItems, getTotalSize = rowVirtualizer.getTotalSize;
    var paddingTop = getVirtualItems().length > 0 ? ((_c = (_b = getVirtualItems()) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.start) || 0 : 0;
    var paddingBottom = getVirtualItems().length > 0
        ? getTotalSize() -
            (((_e = (_d = getVirtualItems()) === null || _d === void 0 ? void 0 : _d[getVirtualItems().length - 1]) === null || _e === void 0 ? void 0 : _e.end) || 0)
        : 0;
    var isIndeterminate = checkedRows.length > 0 && checkedRows.length !== (data || []).length;
    var _noContent = noContent ? noContent : (0, jsx_dev_runtime_1.jsxDEV)(noContent_1.NoContent, { text: "No Data!" }, void 0, false, { fileName: _jsxFileName, lineNumber: 245, columnNumber: 45 }, _this);
    return ((0, jsx_dev_runtime_1.jsxDEV)(react_measure_1.default, __assign({ bounds: true }, { children: function (_a) {
            var _b;
            var contentRect = _a.contentRect, measureRef = _a.measureRef;
            var boundsWidth = (_b = contentRect.bounds) === null || _b === void 0 ? void 0 : _b.width;
            var colWidth = calculateWidth(boundsWidth !== null && boundsWidth !== void 0 ? boundsWidth : 0);
            return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ ref: measureRef, style: {
                    height: height,
                }, className: (0, classnames_1.default)(isLoading && classes["backDrop"], classes["container"]) }, { children: [isLoading && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["spinner"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Spinner, { size: "large" }, void 0, false, { fileName: _jsxFileName, lineNumber: 265, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 263, columnNumber: 28 }, _this)), (0, jsx_dev_runtime_1.jsxDEV)(context_1.TableContext.Provider, __assign({ value: {
                            isAllRowsChecked: isAllRowsChecked,
                            onCheckAllRows: onCheckAllRows,
                            onOrderChange: onOrderChange,
                            order: order,
                            orderBy: orderBy,
                            selectedRow: selectedRow,
                            onSelectRow: handleOnSelectRow,
                            isOnCheckedRowsAvailable: Boolean(onCheckedRows),
                            isSelectSingleRowAvailable: Boolean(onSelectRow),
                            isOverflowed: isOverflowed,
                            testid: testid,
                        } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["wrapper"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("table", __assign({ className: classes["table"], role: "table" }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("colgroup", { children: [(0, jsx_dev_runtime_1.jsxDEV)("col", { style: {
                                                        width: _searchIconWidth,
                                                    } }, void 0, false, { fileName: _jsxFileName, lineNumber: 286, columnNumber: 21 }, _this), coloums.map(function (_a) {
                                                    var width = _a.width, dataIndex = _a.dataIndex;
                                                    var _width = isViewPortUnit && width ? (0, utils_1.pxToVwString)(width) : width;
                                                    return ((0, jsx_dev_runtime_1.jsxDEV)("col", { style: { width: _width ? _width : colWidth } }, dataIndex, false, { fileName: _jsxFileName, lineNumber: 294, columnNumber: 31 }, _this));
                                                }), isOverflowed ? ((0, jsx_dev_runtime_1.jsxDEV)("col", { style: { width: exports.SCROLL_BAR } }, void 0, false, { fileName: _jsxFileName, lineNumber: 301, columnNumber: 38 }, _this)) : null] }, void 0, true, { fileName: _jsxFileName, lineNumber: 285, columnNumber: 19 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("thead", __assign({ className: headerClassName, style: __assign({ backgroundColor: header }, headerStyle) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(header_1.Header, { filterIcon: filterIcon, isSearchVisible: isSearchVisible, onToggleSearchBar: isSearchAvailable && onToggleSearchBar, columns: coloums, isIndeterminate: isIndeterminate }, void 0, false, { fileName: _jsxFileName, lineNumber: 312, columnNumber: 21 }, _this), isSearchAvailable ? ((0, jsx_dev_runtime_1.jsxDEV)(searchBar_1.SearchBar, { isIndeterminate: isIndeterminate, clearFilterIcon: clearFilterIcon, searchBarStyle: searchBarStyle, searchBarClassName: searchBarClassName, columns: coloums, data: data || [], isSearchVisible: isSearchVisible }, void 0, false, { fileName: _jsxFileName, lineNumber: 320, columnNumber: 43 }, _this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 305, columnNumber: 19 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 284, columnNumber: 17 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.ScrollView, __assign({ ref: tableContainerRef, className: classes["table-body"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(body_1.TableBody, { noContent: _noContent, searchIconWidth: _searchIconWidth, virtualPaddingBottom: paddingBottom, virtualPaddingTop: paddingTop, virtualRows: getVirtualItems(), checkedRows: checkedRows, colWidth: colWidth, coloums: coloums, dataList: list, handleCheckRow: handleCheckRow, data: data, rowKey: rowKey }, void 0, false, { fileName: _jsxFileName, lineNumber: 337, columnNumber: 19 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 333, columnNumber: 17 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 283, columnNumber: 15 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 268, columnNumber: 13 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 252, columnNumber: 17 }, _this));
        } }), void 0, false, { fileName: _jsxFileName, lineNumber: 247, columnNumber: 11 }, _this));
};
exports.Table = Table;
//# sourceMappingURL=index.js.map