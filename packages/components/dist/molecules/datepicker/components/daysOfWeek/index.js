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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/daysOfWeek/index.tsx";
import { Text } from "../../../../atoms";
import { useStyle } from "./style";
var daysOfWeek = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
export var DaysOfWeekTitle = function () {
    var classes = useStyle();
    return (_jsxDEV("div", __assign({ className: classes["container"] }, { children: daysOfWeek.map(function (item, index) {
            return (_jsxDEV("div", __assign({ className: classes["day"] }, { children: _jsxDEV(Text, __assign({ theme: "Regular", size: 14, color: "white" }, { children: item }), void 0, false, { fileName: _jsxFileName, lineNumber: 12, columnNumber: 13 }, _this) }), index, false, { fileName: _jsxFileName, lineNumber: 10, columnNumber: 17 }, _this));
        }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 7, columnNumber: 11 }, _this));
};
//# sourceMappingURL=index.js.map