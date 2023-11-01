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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/matrix/index.tsx";
import { useContext } from "react";
import { Text } from "../../../../atoms";
import moment from "moment-jalaali";
import { DatePickerContext } from "../../context";
import { useStyles } from "./style";
export var Matrix = function (_a) {
    var monthMatrix = _a.monthMatrix;
    var classes = useStyles();
    var today = moment();
    var _b = useContext(DatePickerContext), currentDate = _b.currentDate, onSelectDate = _b.onSelectDate, selectedDate = _b.selectedDate;
    return (_jsxDEV("div", __assign({ className: classes["matrix"] }, { children: monthMatrix === null || monthMatrix === void 0 ? void 0 : monthMatrix.map(function (week, index2) {
            return (_jsxDEV("div", __assign({ className: classes["week"] }, { children: week.map(function (day) {
                    var key = day.format("YYYYMMDD");
                    var isToday = day.local().format("jYYYY/jMM/jDD") ===
                        today.local().format("jYYYY/jMM/jDD");
                    var isSelected = day.local().format("jYYYY/jMM/jDD") ===
                        (selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.local().format("jYYYY/jMM/jDD"));
                    var isCurrentMonth = day.local().format("jMM") ===
                        (currentDate === null || currentDate === void 0 ? void 0 : currentDate.local().format("jMM"));
                    return (_jsxDEV("div", __assign({ className: classes["dayContainer"] }, { children: _jsxDEV("div", __assign({ onClick: function () {
                                onSelectDate(day);
                            }, className: classes["day"], style: __assign(__assign(__assign({}, (isToday && {
                                border: "1px solid white",
                                borderRadius: 7,
                            })), (isSelected && {
                                backgroundColor: "#eeeeee",
                                borderRadius: 7,
                            })), { cursor: "pointer" }) }, { children: _jsxDEV(Text, __assign({ theme: "Regular", size: 14, color: isSelected
                                    ? "#575757"
                                    : !isCurrentMonth
                                        ? "#828282"
                                        : "white" }, { children: day.format("jD") }), void 0, false, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 21 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 19 }, _this) }), key, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 23 }, _this));
                }) }), index2, false, { fileName: _jsxFileName, lineNumber: 20, columnNumber: 17 }, _this));
        }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 17, columnNumber: 11 }, _this));
};
//# sourceMappingURL=index.js.map