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
var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/index.tsx";
import { useEffect, useMemo, useRef, useState } from "react";
import Measure from "react-measure";
import { useVirtual } from "react-virtual";
import { ScrollView, Spinner } from "../../atoms";
import { NoContent } from "../../molecules/noContent";
import { useTheme } from "../../theme";
import { TableContext } from "./context";
import { Header } from "./header";
import { Rows } from "./rowContainer";
import { SearchBar } from "./searchBar";
import { useStyles } from "./style";
import classNames from "classnames";
export var SEARCH_ICON = 32;
export var ROW_SELECTION = 62;
export var SCROLL_BAR = 8;
export var DEFAULT_ALIGN = "center";
var Table = function (_a) {
    var _b, _c;
    var data = _a.data, onCheckedRows = _a.onCheckedRows, rowKey = _a.rowKey, headerStyle = _a.headerStyle, headerClassName = _a.headerClassName, searchBarClassName = _a.searchBarClassName, searchBarToggle = _a.searchBarToggle, searchBarStyle = _a.searchBarStyle, filterIcon = _a.filterIcon, clearFilterIcon = _a.clearFilterIcon, isLoading = _a.isLoading, onSelectRow = _a.onSelectRow, height = _a.height, coloums = _a.coloums, noContent = _a.noContent, overScan = _a.overScan;
    var _d = useTheme().table, _e = _d === void 0 ? {} : _d, header = _e.header;
    var classes = useStyles();
    var _f = useState(undefined), order = _f[0], setOrder = _f[1];
    var _g = useState(false), isSearchVisible = _g[0], setShowSearchBar = _g[1];
    var _h = useState(undefined), orderBy = _h[0], setOrderBy = _h[1];
    var _j = useState(undefined), selectedRow = _j[0], setSelectedRow = _j[1];
    var _k = useState([]), checkedRows = _k[0], setCheckRows = _k[1];
    var _l = useState(false), isAllRowsChecked = _l[0], setAllRowsChecked = _l[1];
    var tableContainerRef = useRef(null);
    var list = useMemo(function () {
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
        var withOutWidthNum = 0;
        var columnsWidth = coloums.reduce(function (prev, _a) {
            var width = _a.width;
            return prev + (width || 0);
        }, 0);
        var remainWidth = totalWidth - (columnsWidth + SCROLL_BAR + SEARCH_ICON);
        coloums.forEach(function (_a) {
            var width = _a.width;
            if (!width) {
                withOutWidthNum += 1;
            }
        });
        if (withOutWidthNum) {
            return remainWidth / withOutWidthNum;
        }
    };
    var searchIconWidth = onCheckedRows ? ROW_SELECTION : SEARCH_ICON;
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
    useEffect(function () {
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
    var rowVirtualizer = useVirtual({
        parentRef: tableContainerRef,
        size: list.length,
        overscan: overScan || 20,
    });
    var virtualRows = rowVirtualizer.virtualItems, totalSize = rowVirtualizer.totalSize;
    var paddingTop = virtualRows.length > 0 ? ((_b = virtualRows === null || virtualRows === void 0 ? void 0 : virtualRows[0]) === null || _b === void 0 ? void 0 : _b.start) || 0 : 0;
    var paddingBottom = virtualRows.length > 0
        ? totalSize - (((_c = virtualRows === null || virtualRows === void 0 ? void 0 : virtualRows[virtualRows.length - 1]) === null || _c === void 0 ? void 0 : _c.end) || 0)
        : 0;
    var isIndeterminate = checkedRows.length > 0 && checkedRows.length !== (data || []).length;
    var _noContent = noContent ? noContent : _jsxDEV(NoContent, { text: "No Data!" }, void 0, false, { fileName: _jsxFileName, lineNumber: 195, columnNumber: 45 }, _this);
    return (_jsxDEV(Measure, __assign({ bounds: true }, { children: function (_a) {
            var _b;
            var contentRect = _a.contentRect, measureRef = _a.measureRef;
            var boundsWidth = (_b = contentRect.bounds) === null || _b === void 0 ? void 0 : _b.width;
            var colWidth = calculateWidth(boundsWidth !== null && boundsWidth !== void 0 ? boundsWidth : 0);
            return (_jsxDEV("div", __assign({ ref: measureRef, style: {
                    height: height,
                }, className: classNames(isLoading && classes["backDrop"], classes["container"]) }, { children: [isLoading && (_jsxDEV("div", __assign({ className: classes["spinner"] }, { children: _jsxDEV(Spinner, { size: "large" }, void 0, false, { fileName: _jsxFileName, lineNumber: 215, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 213, columnNumber: 28 }, _this)), _jsxDEV(TableContext.Provider, __assign({ value: {
                            isAllRowsChecked: isAllRowsChecked,
                            onCheckAllRows: onCheckAllRows,
                            onOrderChange: onOrderChange,
                            order: order,
                            orderBy: orderBy,
                            selectedRow: selectedRow,
                            onSelectRow: handleOnSelectRow,
                            isOnCheckedRowsAvailable: Boolean(onCheckedRows),
                            isSelectSingleRowAvailable: Boolean(onSelectRow),
                        } }, { children: boundsWidth ? (_jsxDEV("div", __assign({ className: classes["body"] }, { children: [_jsxDEV("table", __assign({ className: classes["table"], role: "table" }, { children: [_jsxDEV("colgroup", { children: [_jsxDEV("col", { style: {
                                                        width: searchIconWidth,
                                                    } }, void 0, false, { fileName: _jsxFileName, lineNumber: 235, columnNumber: 23 }, _this), coloums.map(function (_a) {
                                                    var width = _a.width, dataIndex = _a.dataIndex;
                                                    return (_jsxDEV("col", { style: { width: width ? width : colWidth } }, dataIndex, false, { fileName: _jsxFileName, lineNumber: 241, columnNumber: 33 }, _this));
                                                }), _jsxDEV("col", { style: { width: SCROLL_BAR } }, void 0, false, { fileName: _jsxFileName, lineNumber: 248, columnNumber: 23 }, _this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 234, columnNumber: 21 }, _this), _jsxDEV("thead", __assign({ className: headerClassName, style: __assign({ backgroundColor: header }, headerStyle) }, { children: [_jsxDEV(Header, { filterIcon: filterIcon, isSearchVisible: isSearchVisible, onToggleSearchBar: isSearchAvailable && onToggleSearchBar, columns: coloums, isIndeterminate: isIndeterminate }, void 0, false, { fileName: _jsxFileName, lineNumber: 257, columnNumber: 23 }, _this), isSearchAvailable ? (_jsxDEV(SearchBar, { isIndeterminate: isIndeterminate, clearFilterIcon: clearFilterIcon, searchBarStyle: searchBarStyle, searchBarClassName: searchBarClassName, columns: coloums, data: data || [], isSearchVisible: isSearchVisible }, void 0, false, { fileName: _jsxFileName, lineNumber: 267, columnNumber: 45 }, _this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 250, columnNumber: 21 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 233, columnNumber: 19 }, _this), _jsxDEV(ScrollView, __assign({ ref: tableContainerRef, style: { flex: 1, overflowY: "auto" } }, { children: virtualRows.length > 0 ? (_jsxDEV("table", __assign({ className: classes["table"], role: "table" }, { children: [_jsxDEV("colgroup", { children: [_jsxDEV("col", { style: { width: searchIconWidth } }, void 0, false, { fileName: _jsxFileName, lineNumber: 287, columnNumber: 27 }, _this), coloums.map(function (_a) {
                                                        var width = _a.width, dataIndex = _a.dataIndex;
                                                        return (_jsxDEV("col", { style: { width: width ? width : colWidth } }, dataIndex, false, { fileName: _jsxFileName, lineNumber: 289, columnNumber: 37 }, _this));
                                                    })] }, void 0, true, { fileName: _jsxFileName, lineNumber: 286, columnNumber: 25 }, _this), _jsxDEV("tbody", { children: [paddingTop > 0 && (_jsxDEV("tr", { children: _jsxDEV("td", { style: { height: "".concat(paddingTop, "px") } }, void 0, false, { fileName: _jsxFileName, lineNumber: 301, columnNumber: 31 }, _this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 299, columnNumber: 47 }, _this)), virtualRows.map(function (virtualRow, index) {
                                                        var row = list[virtualRow.index];
                                                        return (_jsxDEV(Rows, { rowKey: rowKey, rowData: row, data: data || [], index: index, columns: coloums, checkedRows: checkedRows, handleCheckRow: handleCheckRow }, index, false, { fileName: _jsxFileName, lineNumber: 306, columnNumber: 37 }, _this));
                                                    }), paddingBottom > 0 && (_jsxDEV("tr", { children: _jsxDEV("td", { style: { height: "".concat(paddingBottom, "px") } }, void 0, false, { fileName: _jsxFileName, lineNumber: 321, columnNumber: 31 }, _this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 319, columnNumber: 50 }, _this))] }, void 0, true, { fileName: _jsxFileName, lineNumber: 298, columnNumber: 25 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 284, columnNumber: 48 }, _this)) : (_noContent) }), void 0, false, { fileName: _jsxFileName, lineNumber: 280, columnNumber: 19 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 231, columnNumber: 31 }, _this)) : null }), void 0, false, { fileName: _jsxFileName, lineNumber: 218, columnNumber: 13 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 202, columnNumber: 17 }, _this));
        } }), void 0, false, { fileName: _jsxFileName, lineNumber: 197, columnNumber: 11 }, _this));
};
export { Table };
//# sourceMappingURL=index.js.map