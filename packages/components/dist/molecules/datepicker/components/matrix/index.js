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
var _jsxFileName = "D:/project/shakil-design/packages/components/src/molecules/datepicker/components/matrix/index.tsx";
var react_1 = require("react");
var atoms_1 = require("../../../../atoms");
var moment_jalaali_1 = __importDefault(require("moment-jalaali"));
var context_1 = require("../../context");
var style_1 = require("./style");
var classnames_1 = __importDefault(require("classnames"));
var Matrix = function () {
    var classes = (0, style_1.useStyles)();
    var today = (0, moment_jalaali_1.default)();
    var _a = (0, react_1.useContext)(context_1.DatePickerContext), currentDate = _a.currentDate, handleSelectDateFromMatrix = _a.handleSelectDateFromMatrix, selectedDate = _a.selectedDate, monthMatrix = _a.monthMatrix, _b = _a.formats, FULL_DATE_FORMAT = _b.FULL_DATE_FORMAT, MONTH_NUMBER_FORMAT = _b.MONTH_NUMBER_FORMAT, SHORT_DAY_FORMAT = _b.SHORT_DAY_FORMAT, calendarMode = _a.calendarMode, disableDateFrom = _a.disableDateFrom;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["matrix"] }, { children: monthMatrix === null || monthMatrix === void 0 ? void 0 : monthMatrix.map(function (week, index2) {
            return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)(classes["week"], calendarMode === "gregorian" && "".concat(classes["week"], "--gregorian")) }, { children: week.map(function (day) {
                    var key = day.format("YYYYMMDD");
                    var isToday = day.local().format(FULL_DATE_FORMAT) ===
                        today.local().format(FULL_DATE_FORMAT);
                    var isSelected = day.local().format(FULL_DATE_FORMAT) ===
                        (selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.local().format(FULL_DATE_FORMAT));
                    var isCurrentMonth = day.local().format(MONTH_NUMBER_FORMAT) ===
                        (currentDate === null || currentDate === void 0 ? void 0 : currentDate.local().format(MONTH_NUMBER_FORMAT));
                    var isDayBeforeStartDate = disableDateFrom && day.isBefore(disableDateFrom, "day");
                    var isUnselectable = Boolean(!isCurrentMonth || isDayBeforeStartDate);
                    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["dayContainer"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ onClick: function () {
                                !isUnselectable && handleSelectDateFromMatrix(day);
                            }, className: classes["day"], style: __assign(__assign(__assign({}, (isToday && {
                                border: "1px solid white",
                                borderRadius: 7,
                            })), (isSelected && {
                                backgroundColor: "#eeeeee",
                                borderRadius: 7,
                            })), { cursor: "pointer" }) }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ theme: "Regular", size: 14, color: isSelected
                                    ? "#575757"
                                    : isUnselectable
                                        ? "#828282"
                                        : "white" }, { children: day.format(SHORT_DAY_FORMAT) }), void 0, false, { fileName: _jsxFileName, lineNumber: 72, columnNumber: 21 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 55, columnNumber: 19 }, _this) }), key, false, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 23 }, _this));
                }) }), index2, false, { fileName: _jsxFileName, lineNumber: 24, columnNumber: 17 }, _this));
        }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 21, columnNumber: 11 }, _this));
};
exports.Matrix = Matrix;
//# sourceMappingURL=index.js.map