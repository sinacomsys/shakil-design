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
exports.Header = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/header/index.tsx";
var atoms_1 = require("../../../atoms");
var checkbox_1 = require("../../../molecules/checkbox");
var theme_1 = require("../../../theme");
var column_1 = require("../column");
var context_1 = require("../context");
var style_1 = require("./style");
var Header = function (_a) {
    var onToggleSearchBar = _a.onToggleSearchBar, filterIcon = _a.filterIcon, columns = _a.columns, isIndeterminate = _a.isIndeterminate;
    var _b = (0, theme_1.useTheme)().table, _c = _b === void 0 ? {} : _b, filterIconColor = _c.filterIcon;
    var classes = (0, style_1.useStyles)();
    var _d = (0, context_1.useMyTableContext)(), onCheckAllRows = _d.onCheckAllRows, isAllRowsChecked = _d.isAllRowsChecked, mode = _d.mode, isOverflowed = _d.isOverflowed, testid = _d.testid;
    return ((0, jsx_dev_runtime_1.jsxDEV)("tr", __assign({ "data-testid": testid === null || testid === void 0 ? void 0 : testid.header }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("th", { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["filter-icon-wrapper"] }, { children: [mode === "multiple" ? ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["selectAll"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(checkbox_1.CheckBox, { "data-testid": testid === null || testid === void 0 ? void 0 : testid.selectAll, checked: isAllRowsChecked, onChange: onCheckAllRows, indeterminate: isIndeterminate }, void 0, false, { fileName: _jsxFileName, lineNumber: 32, columnNumber: 15 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 30, columnNumber: 35 }, _this)) : null, (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ onClick: onToggleSearchBar, className: classes["search"] }, { children: filterIcon ? (filterIcon) : ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { "data-testid": testid === null || testid === void 0 ? void 0 : testid.filterBarIcon, color: filterIconColor, name: "Table-_-Filter", size: { width: 16, height: 16 } }, void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 18 }, _this)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 41, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 29, columnNumber: 9 }, _this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 28, columnNumber: 7 }, _this), columns.map(function (_a) {
                var dataIndex = _a.dataIndex, title = _a.title, sorter = _a.sorter, style = _a.style;
                return ((0, jsx_dev_runtime_1.jsxDEV)(column_1.Column, { dataIndex: dataIndex, title: title, sorter: sorter, style: style }, dataIndex, false, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 17 }, _this));
            }), isOverflowed ? (0, jsx_dev_runtime_1.jsxDEV)("th", {}, void 0, false, { fileName: _jsxFileName, lineNumber: 66, columnNumber: 22 }, _this) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 26, columnNumber: 11 }, _this));
};
exports.Header = Header;
//# sourceMappingURL=index.js.map