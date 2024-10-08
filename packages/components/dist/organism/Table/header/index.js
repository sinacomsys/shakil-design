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
exports.Header = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var atoms_1 = require("../../../atoms");
var checkbox_1 = require("../../../molecules/checkbox");
var theme_1 = require("../../../theme");
var column_1 = require("../column");
var context_1 = require("../context");
var style_1 = require("./style");
var classnames_1 = __importDefault(require("classnames"));
var Header = function (_a) {
    var onToggleSearchBar = _a.onToggleSearchBar, filterIcon = _a.filterIcon, columns = _a.columns, isIndeterminate = _a.isIndeterminate, isSearchAvailable = _a.isSearchAvailable;
    var _b = (0, theme_1.useTheme)().table, _c = _b === void 0 ? {} : _b, filterIconColor = _c.filterIcon;
    var classes = (0, style_1.useStyles)();
    var _d = (0, context_1.useMyTableContext)(), onCheckAllRows = _d.onCheckAllRows, isAllRowsChecked = _d.isAllRowsChecked, mode = _d.mode, isOverflowed = _d.isOverflowed, testid = _d.testid;
    return ((0, jsx_runtime_1.jsxs)("tr", __assign({ "data-testid": testid === null || testid === void 0 ? void 0 : testid.header }, { children: [(0, jsx_runtime_1.jsx)("th", { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: classes["filter-icon-wrapper"] }, { children: [mode === "multiple" ? ((0, jsx_runtime_1.jsx)("div", __assign({ className: classes["selectAll"] }, { children: (0, jsx_runtime_1.jsx)(checkbox_1.CheckBox, { "data-testid": testid === null || testid === void 0 ? void 0 : testid.selectAll, checked: isAllRowsChecked, onChange: onCheckAllRows, indeterminate: isIndeterminate }) }))) : null, (0, jsx_runtime_1.jsx)("div", __assign({ onClick: onToggleSearchBar, className: (0, classnames_1.default)(mode === "single" && "".concat(classes["search"], "--full-width"), classes["search"]) }, { children: filterIcon ? (filterIcon) : ((0, jsx_runtime_1.jsx)(atoms_1.BaseIcon, { "data-testid": testid === null || testid === void 0 ? void 0 : testid.filterBarIcon, color: isSearchAvailable ? filterIconColor : "gray", name: "Table-_-Filter", size: { width: 16, height: 16 } })) }))] })) }), columns.map(function (_a) {
                var dataIndex = _a.dataIndex, title = _a.title, sorter = _a.sorter, style = _a.style;
                return ((0, jsx_runtime_1.jsx)(column_1.Column, { dataIndex: dataIndex, title: title, sorter: sorter, style: style }, dataIndex));
            }), isOverflowed ? (0, jsx_runtime_1.jsx)("th", {}) : null] })));
};
exports.Header = Header;
//# sourceMappingURL=index.js.map