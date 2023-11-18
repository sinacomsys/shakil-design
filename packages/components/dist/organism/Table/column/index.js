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
exports.Column = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/column/index.tsx";
var __1 = require("..");
var atoms_1 = require("../../../atoms");
var theme_1 = require("../../../theme");
var context_1 = require("../context");
var style_1 = require("./style");
var Column = function (_a) {
    var title = _a.title, dataIndex = _a.dataIndex, sorter = _a.sorter, style = _a.style, _b = _a.align, align = _b === void 0 ? __1.DEFAULT_ALIGN : _b;
    var _c = (0, theme_1.useTheme)().table, _d = _c === void 0 ? {} : _c, sortArrow = _d.sortArrow;
    var _e = (0, context_1.useMyTableContext)(), onOrderChange = _e.onOrderChange, order = _e.order, orderBy = _e.orderBy;
    var isAscending = orderBy === dataIndex && order === "ascending";
    var isDescending = orderBy === dataIndex && order === "descending";
    var onSort = function () {
        if (sorter) {
            onOrderChange({ dataIndex: dataIndex });
        }
    };
    var classes = (0, style_1.useStyles)();
    return ((0, jsx_dev_runtime_1.jsxDEV)("th", __assign({ className: classes["wrapper"], style: __assign({}, style) }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["column"], style: {
                cursor: sorter ? "pointer" : "default",
                justifyContent: align === "center"
                    ? "center"
                    : align === "start"
                        ? "flex-start"
                        : "flex-end",
            }, onClick: onSort }, { children: [typeof title !== "object" ? ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ size: 16, theme: "Regular", color: "white" }, { children: title }), void 0, false, { fileName: _jsxFileName, lineNumber: 68, columnNumber: 39 }, _this)) : (title), sorter ? (isDescending ? ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { size: { width: 9, height: 20 }, color: sortArrow, name: "Table-_-Sort-Icon_A-to-Z" }, void 0, false, { fileName: _jsxFileName, lineNumber: 76, columnNumber: 27 }, _this)) : isAscending ? ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { size: { width: 9, height: 20 }, color: sortArrow, name: "Table-_-Sort-Icon_Z-to-A" }, void 0, false, { fileName: _jsxFileName, lineNumber: 82, columnNumber: 30 }, _this)) : ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { size: { width: 9, height: 20 }, color: "white", name: "Table-_-Sort-Icon_OFF" }, void 0, false, { fileName: _jsxFileName, lineNumber: 88, columnNumber: 16 }, _this))) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 55, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 11 }, _this));
};
exports.Column = Column;
//# sourceMappingURL=index.js.map