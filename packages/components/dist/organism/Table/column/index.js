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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/column/index.tsx";
import { useContext } from "react";
import { DEFAULT_ALIGN } from "..";
import { BaseIcon, Text } from "../../../atoms";
import { useTheme } from "../../../theme";
import { pxToVh } from "@shakil-design/utils";
import { TableContext } from "../context";
import { useStyles } from "./style";
var Column = function (_a) {
    var title = _a.title, dataIndex = _a.dataIndex, sorter = _a.sorter, style = _a.style, _b = _a.align, align = _b === void 0 ? DEFAULT_ALIGN : _b;
    var _c = useTheme().table, _d = _c === void 0 ? {} : _c, sortArrow = _d.sortArrow;
    var _e = useContext(TableContext), onOrderChange = _e.onOrderChange, order = _e.order, orderBy = _e.orderBy;
    var isAscending = orderBy === dataIndex && order === "ascending";
    var isDescending = orderBy === dataIndex && order === "descending";
    var onSort = function () {
        if (sorter) {
            onOrderChange({ dataIndex: dataIndex });
        }
    };
    var classes = useStyles();
    return (_jsxDEV("th", __assign({ style: __assign(__assign({}, style), { height: "".concat(pxToVh(45), "vh"), padding: 0 }) }, { children: _jsxDEV("div", __assign({ className: classes["column"], style: {
                cursor: sorter ? "pointer" : "default",
                justifyContent: align === "center"
                    ? "center"
                    : align === "start"
                        ? "flex-start"
                        : "flex-end",
            }, onClick: onSort }, { children: [typeof title !== "object" ? (_jsxDEV(Text, __assign({ size: "".concat(pxToVh(16), "vh"), theme: "Regular", color: "white" }, { children: title }), void 0, false, { fileName: _jsxFileName, lineNumber: 69, columnNumber: 39 }, _this)) : (title), sorter ? (isDescending ? (_jsxDEV(BaseIcon, { size: { width: 9, height: 20 }, color: sortArrow, name: "Table-_-Sort-Icon_A-to-Z" }, void 0, false, { fileName: _jsxFileName, lineNumber: 77, columnNumber: 27 }, _this)) : isAscending ? (_jsxDEV(BaseIcon, { size: { width: 9, height: 20 }, color: sortArrow, name: "Table-_-Sort-Icon_Z-to-A" }, void 0, false, { fileName: _jsxFileName, lineNumber: 83, columnNumber: 30 }, _this)) : (_jsxDEV(BaseIcon, { size: { width: 9, height: 20 }, color: "white", name: "Table-_-Sort-Icon_OFF" }, void 0, false, { fileName: _jsxFileName, lineNumber: 89, columnNumber: 16 }, _this))) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 11 }, _this));
};
export { Column };
//# sourceMappingURL=index.js.map