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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManualImportDate = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/manualImportDate/index.tsx";
var react_1 = require("react");
var __1 = require("../../..");
var atoms_1 = require("../../../../atoms");
var __2 = require("../../..");
var moment_jalaali_1 = __importDefault(require("moment-jalaali"));
var checkDateIsValid_1 = require("../../utils/checkDateIsValid");
var reducer = function (state, action) {
    if (action.type === "YEAR") {
        return __assign(__assign({}, state), { year: action.payload });
    }
    else if (action.type === "MONTH") {
        return __assign(__assign({}, state), { month: action.payload });
    }
    else if (action.type === "DAY") {
        return __assign(__assign({}, state), { day: action.payload });
    }
    else
        return state;
};
var ManualImportDate = function (_a) {
    var goToday = _a.goToday, onSelectDate = _a.onSelectDate, onSetCurrentDate = _a.onSetCurrentDate;
    var _b = (0, react_1.useReducer)(reducer, {
        year: "",
        month: "",
        day: "",
    }), _c = _b[0], day = _c.day, month = _c.month, year = _c.year, dispatch = _b[1];
    var onConfirm = function () {
        var date = "".concat(year, "/").concat(month, "/").concat(day);
        var isDateValid = (0, checkDateIsValid_1.checkIsDateValid)(date);
        if (isDateValid) {
            var date_1 = (0, moment_jalaali_1.default)("".concat(year, "/").concat(month, "/").concat(day), "jYYYY/jMM/jDD");
            onSetCurrentDate(date_1);
            onSelectDate(date_1);
        }
    };
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { display: "flex", alignItems: "center", marginBottom: 8 } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ color: "#ABABAB", style: { marginRight: 13 } }, { children: "Date" }), void 0, false, { fileName: _jsxFileName, lineNumber: 59, columnNumber: 9 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { display: "flex" } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { width: 44 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(__1.TextInput, { unit: "pixel", value: year, style: { textAlign: "center" }, onChangeText: function (value) {
                                        if (value.length === 5)
                                            return;
                                        dispatch({ payload: value, type: "YEAR" });
                                    } }, void 0, false, { fileName: _jsxFileName, lineNumber: 64, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 63, columnNumber: 11 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { width: 44, marginInline: 6 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(__1.TextInput, { unit: "pixel", value: month, onChangeText: function (value) {
                                        if (value.length === 3)
                                            return;
                                        dispatch({ payload: value, type: "MONTH" });
                                    }, style: { textAlign: "center" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 75, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 74, columnNumber: 11 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { width: 44 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(__1.TextInput, { unit: "pixel", value: day, onChangeText: function (value) {
                                        if (value.length === 3)
                                            return;
                                        dispatch({ payload: value, type: "DAY" });
                                    }, style: { textAlign: "center" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 86, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 85, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 62, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 58, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { display: "flex", alignItems: "center", marginBottom: 8 } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ style: { marginRight: 12 }, color: "#ABABAB" }, { children: "Time" }), void 0, false, { fileName: _jsxFileName, lineNumber: 99, columnNumber: 9 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { display: "flex" } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { width: 44 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(__1.TextInput, { unit: "pixel", style: { textAlign: "center" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 104, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 103, columnNumber: 11 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { width: 44, marginInline: 6 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(__1.TextInput, { unit: "pixel", style: { textAlign: "center" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 107, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 106, columnNumber: 11 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(__2.Button, __assign({ size: "small", style: { width: 44 }, onClick: onConfirm }, { children: "ok" }), void 0, false, { fileName: _jsxFileName, lineNumber: 109, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 102, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 98, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(__2.Button, __assign({ style: { marginLeft: 42 }, size: "small", onClick: goToday }, { children: "Go Today!" }), void 0, false, { fileName: _jsxFileName, lineNumber: 115, columnNumber: 7 }, _this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 11 }, _this));
};
exports.ManualImportDate = ManualImportDate;
//# sourceMappingURL=index.js.map