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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var __1 = require("..");
var atoms_1 = require("../../../atoms");
var molecules_1 = require("../../../molecules");
var theme_1 = require("../../../theme");
var context_1 = require("../context");
var style_1 = require("./style");
var classnames_1 = __importDefault(require("classnames"));
var SearchBar = function (_a) {
    var isSearchVisible = _a.isSearchVisible, columns = _a.columns, data = _a.data, searchBarStyle = _a.searchBarStyle, onResetFilters = _a.onResetFilters, searchBarClassName = _a.searchBarClassName, clearFilterIcon = _a.clearFilterIcon, isIndeterminate = _a.isIndeterminate;
    var _b = (0, theme_1.useTheme)().table, _c = _b === void 0 ? {} : _b, clearFilterIconColor = _c.clearFilterIcon;
    var _d = (0, context_1.useMyTableContext)(), onCheckAllRows = _d.onCheckAllRows, isAllRowsChecked = _d.isAllRowsChecked, isOverflowed = _d.isOverflowed, testid = _d.testid, mode = _d.mode;
    var classes = (0, style_1.useStyles)({ isSearchVisible: isSearchVisible });
    return ((0, jsx_runtime_1.jsxs)("tr", __assign({ "data-testid": testid === null || testid === void 0 ? void 0 : testid.filterBar, className: (0, classnames_1.default)(classes["wrapper"], searchBarClassName && searchBarClassName), style: __assign({}, searchBarStyle) }, { children: [(0, jsx_runtime_1.jsx)("th", { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "".concat(classes["clear-filter"], "--wrapper") }, { children: [mode === "multiple" ? ((0, jsx_runtime_1.jsx)("div", __assign({ className: classes["checkbox"] }, { children: (0, jsx_runtime_1.jsx)(molecules_1.CheckBox, { "data-testid": testid === null || testid === void 0 ? void 0 : testid.selectAll, checked: isAllRowsChecked, onChange: onCheckAllRows, indeterminate: isIndeterminate }) }))) : null, (0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)(classes["clear-filter"], mode === "single" && "".concat(classes["clear-filter"], "--full-width")) }, { children: clearFilterIcon ? (clearFilterIcon) : ((0, jsx_runtime_1.jsx)(atoms_1.BaseIcon, { "data-testid": testid === null || testid === void 0 ? void 0 : testid.clearFiltersIcon, wrapperStyle: { cursor: "pointer" }, onClick: onResetFilters, color: clearFilterIconColor, name: "Table-_-Clear-Filters", size: { width: 16, height: 16 } })) }))] })) }), columns.map(function (_a, index) {
                var renderFilter = _a.renderFilter, align = _a.align;
                return ((0, jsx_runtime_1.jsx)("th", __assign({ style: { textAlign: align ? align : __1.DEFAULT_ALIGN } }, { children: renderFilter ? renderFilter({ data: data }) : null }), index));
            }), isOverflowed ? (0, jsx_runtime_1.jsx)("th", {}) : null] })));
};
exports.SearchBar = SearchBar;
//# sourceMappingURL=index.js.map