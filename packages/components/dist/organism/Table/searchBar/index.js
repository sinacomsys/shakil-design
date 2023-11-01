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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/searchBar/index.tsx";
import { useContext } from "react";
import { DEFAULT_ALIGN, SEARCH_ICON } from "..";
import { BaseIcon } from "../../../atoms";
import { CheckBox } from "../../../molecules";
import { useTheme } from "../../../theme";
import { pxToVh } from "@shakil-design/utils";
import { TableContext } from "../context";
var SearchBar = function (_a) {
    var isSearchVisible = _a.isSearchVisible, columns = _a.columns, data = _a.data, searchBarStyle = _a.searchBarStyle, onResetFilters = _a.onResetFilters, searchBarClassName = _a.searchBarClassName, clearFilterIcon = _a.clearFilterIcon, isIndeterminate = _a.isIndeterminate;
    var _b = useTheme().table, _c = _b === void 0 ? {} : _b, filtersTab = _c.filtersTab, divider = _c.divider;
    var _d = useContext(TableContext), onCheckAllRows = _d.onCheckAllRows, isAllRowsChecked = _d.isAllRowsChecked, isOnCheckedRowsAvailable = _d.isOnCheckedRowsAvailable;
    return (_jsxDEV("tr", __assign({ className: searchBarClassName, style: __assign({ display: isSearchVisible ? "table-row" : "none", height: "".concat(pxToVh(45), "vh"), backgroundColor: filtersTab }, searchBarStyle) }, { children: [_jsxDEV("th", __assign({ style: { width: SEARCH_ICON } }, { children: _jsxDEV("div", __assign({ style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    } }, { children: [isOnCheckedRowsAvailable ? (_jsxDEV("div", __assign({ style: {
                                borderRight: "1px solid ".concat(divider),
                                width: 31,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 24,
                            } }, { children: _jsxDEV(CheckBox, { checked: isAllRowsChecked, onChange: onCheckAllRows, indeterminate: isIndeterminate }, void 0, false, { fileName: _jsxFileName, lineNumber: 63, columnNumber: 15 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 40 }, _this)) : null, _jsxDEV("div", __assign({ style: {
                                height: 24,
                                width: 31,
                                borderRight: "1px solid ".concat(divider),
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            } }, { children: clearFilterIcon ? (clearFilterIcon) : (_jsxDEV(BaseIcon, { wrapperStyle: { cursor: "pointer" }, onClick: onResetFilters, color: "white", name: "Table-_-Clear-Filters", size: { width: 16, height: 16 } }, void 0, false, { fileName: _jsxFileName, lineNumber: 82, columnNumber: 18 }, _this)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 70, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 9 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 7 }, _this), columns.map(function (_a, index) {
                var renderFilter = _a.renderFilter, align = _a.align;
                return (_jsxDEV("th", __assign({ style: { textAlign: align ? align : DEFAULT_ALIGN } }, { children: renderFilter ? renderFilter({ data: data }) : null }), index, false, { fileName: _jsxFileName, lineNumber: 95, columnNumber: 17 }, _this));
            }), _jsxDEV("th", {}, void 0, false, { fileName: _jsxFileName, lineNumber: 101, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 34, columnNumber: 11 }, _this));
};
export { SearchBar };
//# sourceMappingURL=index.js.map