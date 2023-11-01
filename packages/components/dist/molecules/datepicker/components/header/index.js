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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/header/index.tsx";
import { BaseIcon, Text } from "../../../../atoms";
import { DatePickerContext } from "../../context";
import { useContext } from "react";
import { useStyle } from "./style";
export var Header = function () {
    var _a, _b;
    var _c = useContext(DatePickerContext), currentDate = _c.currentDate, onAddMonth = _c.onAddMonth, onAddYear = _c.onAddYear, onSubtractMonth = _c.onSubtractMonth, onSubtractYear = _c.onSubtractYear;
    var classes = useStyle();
    return (_jsxDEV("div", __assign({ style: {
            position: "relative",
            display: "flex",
            justifyContent: "center",
            marginBottom: 15,
            marginInline: 22,
        } }, { children: [_jsxDEV(BaseIcon, { onClick: onSubtractMonth, wrapperClassName: classes["prevMonth"], name: "Calendar-_-Month-_-Previous-Month", size: {
                    width: 16,
                    height: 9,
                }, color: ["white"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 25, columnNumber: 7 }, _this), _jsxDEV(BaseIcon, { onClick: onAddMonth, wrapperClassName: classes["nextMonth"], name: "Calendar-_-Month-_-Next-Month", size: {
                    width: 16,
                    height: 9,
                }, color: ["white"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 7 }, _this), _jsxDEV("div", __assign({ className: classes["month"] }, { children: [_jsxDEV(Text, __assign({ size: 14, color: "white", theme: "Regular" }, { children: (_a = currentDate === null || currentDate === void 0 ? void 0 : currentDate.format("jMMMM")) !== null && _a !== void 0 ? _a : "" }), void 0, false, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 9 }, _this), _jsxDEV("div", __assign({ style: { display: "flex", alignItems: "center", marginTop: 5 } }, { children: [_jsxDEV(BaseIcon, { name: "Calendar-_-Year-_-Previous-Year", size: { width: 9, height: 5 }, color: ["white"], onClick: onSubtractYear, wrapperStyle: { cursor: "pointer" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 11 }, _this), _jsxDEV(Text, __assign({ style: { marginInline: 10, width: 40, textAlign: "center" }, color: "white", size: 14 }, { children: (_b = currentDate === null || currentDate === void 0 ? void 0 : currentDate.format("jYYYY")) !== null && _b !== void 0 ? _b : "" }), void 0, false, { fileName: _jsxFileName, lineNumber: 57, columnNumber: 11 }, _this), _jsxDEV(BaseIcon, { name: "Calendar-_-Year-_-Next-Year", size: { width: 9, height: 5 }, color: ["white"], onClick: onAddYear, wrapperStyle: { cursor: "pointer" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 64, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 15, columnNumber: 11 }, _this));
};
//# sourceMappingURL=index.js.map