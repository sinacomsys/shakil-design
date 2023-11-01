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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/header/index.tsx";
var atoms_1 = require("../../../../atoms");
var context_1 = require("../../context");
var react_1 = require("react");
var style_1 = require("./style");
var Header = function () {
    var _a, _b;
    var _c = (0, react_1.useContext)(context_1.DatePickerContext), currentDate = _c.currentDate, onAddMonth = _c.onAddMonth, onAddYear = _c.onAddYear, onSubtractMonth = _c.onSubtractMonth, onSubtractYear = _c.onSubtractYear;
    var classes = (0, style_1.useStyle)();
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: {
            position: "relative",
            display: "flex",
            justifyContent: "center",
            marginBottom: 15,
            marginInline: 22,
        } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { onClick: onSubtractMonth, wrapperClassName: classes["prevMonth"], name: "Calendar-_-Month-_-Previous-Month", size: {
                    width: 16,
                    height: 9,
                }, color: ["white"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 25, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { onClick: onAddMonth, wrapperClassName: classes["nextMonth"], name: "Calendar-_-Month-_-Next-Month", size: {
                    width: 16,
                    height: 9,
                }, color: ["white"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["month"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ size: 14, color: "white", theme: "Regular" }, { children: (_a = currentDate === null || currentDate === void 0 ? void 0 : currentDate.format("jMMMM")) !== null && _a !== void 0 ? _a : "" }), void 0, false, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 9 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { display: "flex", alignItems: "center", marginTop: 5 } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { name: "Calendar-_-Year-_-Previous-Year", size: { width: 9, height: 5 }, color: ["white"], onClick: onSubtractYear, wrapperStyle: { cursor: "pointer" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 11 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ style: { marginInline: 10, width: 40, textAlign: "center" }, color: "white", size: 14 }, { children: (_b = currentDate === null || currentDate === void 0 ? void 0 : currentDate.format("jYYYY")) !== null && _b !== void 0 ? _b : "" }), void 0, false, { fileName: _jsxFileName, lineNumber: 57, columnNumber: 11 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { name: "Calendar-_-Year-_-Next-Year", size: { width: 9, height: 5 }, color: ["white"], onClick: onAddYear, wrapperStyle: { cursor: "pointer" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 64, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 15, columnNumber: 11 }, _this));
};
exports.Header = Header;
//# sourceMappingURL=index.js.map