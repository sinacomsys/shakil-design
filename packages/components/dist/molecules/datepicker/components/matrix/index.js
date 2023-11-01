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
exports.Matrix = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/matrix/index.tsx";
var react_1 = require("react");
var atoms_1 = require("../../../../atoms");
var moment_jalaali_1 = __importDefault(require("moment-jalaali"));
var context_1 = require("../../context");
var style_1 = require("./style");
var Matrix = function (_a) {
    var monthMatrix = _a.monthMatrix;
    var classes = (0, style_1.useStyles)();
    var today = (0, moment_jalaali_1.default)();
    var _b = (0, react_1.useContext)(context_1.DatePickerContext), currentDate = _b.currentDate, onSelectDate = _b.onSelectDate, selectedDate = _b.selectedDate;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["matrix"] }, { children: monthMatrix === null || monthMatrix === void 0 ? void 0 : monthMatrix.map(function (week, index2) {
            return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["week"] }, { children: week.map(function (day) {
                    var key = day.format("YYYYMMDD");
                    var isToday = day.local().format("jYYYY/jMM/jDD") ===
                        today.local().format("jYYYY/jMM/jDD");
                    var isSelected = day.local().format("jYYYY/jMM/jDD") ===
                        (selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.local().format("jYYYY/jMM/jDD"));
                    var isCurrentMonth = day.local().format("jMM") ===
                        (currentDate === null || currentDate === void 0 ? void 0 : currentDate.local().format("jMM"));
                    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["dayContainer"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ onClick: function () {
                                onSelectDate(day);
                            }, className: classes["day"], style: __assign(__assign(__assign({}, (isToday && {
                                border: "1px solid white",
                                borderRadius: 7,
                            })), (isSelected && {
                                backgroundColor: "#eeeeee",
                                borderRadius: 7,
                            })), { cursor: "pointer" }) }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ theme: "Regular", size: 14, color: isSelected
                                    ? "#575757"
                                    : !isCurrentMonth
                                        ? "#828282"
                                        : "white" }, { children: day.format("jD") }), void 0, false, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 21 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 19 }, _this) }), key, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 23 }, _this));
                }) }), index2, false, { fileName: _jsxFileName, lineNumber: 20, columnNumber: 17 }, _this));
        }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 17, columnNumber: 11 }, _this));
};
exports.Matrix = Matrix;
//# sourceMappingURL=index.js.map