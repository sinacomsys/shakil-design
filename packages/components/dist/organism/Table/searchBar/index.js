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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBar = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/searchBar/index.tsx";
var react_1 = require("react");
var __1 = require("..");
var atoms_1 = require("../../../atoms");
var molecules_1 = require("../../../molecules");
var theme_1 = require("../../../theme");
var utils_1 = require("@shakil-design/utils");
var context_1 = require("../context");
var SearchBar = function (_a) {
    var isSearchVisible = _a.isSearchVisible, columns = _a.columns, data = _a.data, searchBarStyle = _a.searchBarStyle, onResetFilters = _a.onResetFilters, searchBarClassName = _a.searchBarClassName, clearFilterIcon = _a.clearFilterIcon, isIndeterminate = _a.isIndeterminate;
    var _b = (0, theme_1.useTheme)().table, _c = _b === void 0 ? {} : _b, filtersTab = _c.filtersTab, divider = _c.divider;
    var _d = (0, react_1.useContext)(context_1.TableContext), onCheckAllRows = _d.onCheckAllRows, isAllRowsChecked = _d.isAllRowsChecked, isOnCheckedRowsAvailable = _d.isOnCheckedRowsAvailable;
    return ((0, jsx_dev_runtime_1.jsxDEV)("tr", __assign({ className: searchBarClassName, style: __assign({ display: isSearchVisible ? "table-row" : "none", height: "".concat((0, utils_1.pxToVh)(45), "vh"), backgroundColor: filtersTab }, searchBarStyle) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("th", __assign({ style: { width: __1.SEARCH_ICON } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    } }, { children: [isOnCheckedRowsAvailable ? ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: {
                                borderRight: "1px solid ".concat(divider),
                                width: 31,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 24,
                            } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(molecules_1.CheckBox, { checked: isAllRowsChecked, onChange: onCheckAllRows, indeterminate: isIndeterminate }, void 0, false, { fileName: _jsxFileName, lineNumber: 63, columnNumber: 15 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 40 }, _this)) : null, (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: {
                                height: 24,
                                width: 31,
                                borderRight: "1px solid ".concat(divider),
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            } }, { children: clearFilterIcon ? (clearFilterIcon) : ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { wrapperStyle: { cursor: "pointer" }, onClick: onResetFilters, color: "white", name: "Table-_-Clear-Filters", size: { width: 16, height: 16 } }, void 0, false, { fileName: _jsxFileName, lineNumber: 82, columnNumber: 18 }, _this)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 70, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 9 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 7 }, _this), columns.map(function (_a, index) {
                var renderFilter = _a.renderFilter, align = _a.align;
                return ((0, jsx_dev_runtime_1.jsxDEV)("th", __assign({ style: { textAlign: align ? align : __1.DEFAULT_ALIGN } }, { children: renderFilter ? renderFilter({ data: data }) : null }), index, false, { fileName: _jsxFileName, lineNumber: 95, columnNumber: 17 }, _this));
            }), (0, jsx_dev_runtime_1.jsxDEV)("th", {}, void 0, false, { fileName: _jsxFileName, lineNumber: 101, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 34, columnNumber: 11 }, _this));
};
exports.SearchBar = SearchBar;
//# sourceMappingURL=index.js.map