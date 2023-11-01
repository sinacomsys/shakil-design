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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/header/index.tsx";
import { useContext } from "react";
import { BaseIcon } from "../../../atoms";
import { CheckBox } from "../../../molecules/checkbox";
import { useTheme } from "../../../theme";
import { Column } from "../column";
import { TableContext } from "../context";
import { useStyles } from "./style";
var Header = function (_a) {
    var onToggleSearchBar = _a.onToggleSearchBar, filterIcon = _a.filterIcon, columns = _a.columns, isIndeterminate = _a.isIndeterminate;
    var _b = useTheme().table, _c = _b === void 0 ? {} : _b, filterIconColor = _c.filterIcon;
    var classes = useStyles();
    var _d = useContext(TableContext), onCheckAllRows = _d.onCheckAllRows, isAllRowsChecked = _d.isAllRowsChecked, isOnCheckedRowsAvailable = _d.isOnCheckedRowsAvailable;
    return (_jsxDEV("tr", { children: [_jsxDEV("th", { children: _jsxDEV("div", __assign({ style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    } }, { children: [isOnCheckedRowsAvailable ? (_jsxDEV("div", __assign({ className: classes["selectAll"] }, { children: _jsxDEV(CheckBox, { checked: isAllRowsChecked, onChange: onCheckAllRows, indeterminate: isIndeterminate }, void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 15 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 40 }, _this)) : null, _jsxDEV("div", __assign({ style: { height: 24 }, className: classes["search"] }, { children: filterIcon ? (filterIcon) : (_jsxDEV(BaseIcon, { color: filterIconColor, onClick: onToggleSearchBar, name: "Table-_-Filter", size: { width: 14, height: 14 } }, void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 18 }, _this)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 30, columnNumber: 9 }, _this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 29, columnNumber: 7 }, _this), columns.map(function (_a) {
                var dataIndex = _a.dataIndex, title = _a.title, sorter = _a.sorter, style = _a.style;
                return (_jsxDEV(Column, { dataIndex: dataIndex, title: title, sorter: sorter, style: style }, dataIndex, false, { fileName: _jsxFileName, lineNumber: 62, columnNumber: 17 }, _this));
            }), _jsxDEV("th", {}, void 0, false, { fileName: _jsxFileName, lineNumber: 72, columnNumber: 7 }, _this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 27, columnNumber: 11 }, _this));
};
export { Header };
//# sourceMappingURL=index.js.map