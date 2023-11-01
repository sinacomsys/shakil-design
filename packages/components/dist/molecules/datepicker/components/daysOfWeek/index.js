"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaysOfWeekTitle = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/daysOfWeek/index.tsx";
const atoms_1 = require("../../../../atoms");
const style_1 = require("./style");
const daysOfWeek = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
const DaysOfWeekTitle = () => {
    const classes = (0, style_1.useStyle)();
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["container"] }, { children: daysOfWeek.map((item, index) => {
            return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["day"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, Object.assign({ theme: "Regular", size: 14, color: "white" }, { children: item }), void 0, false, { fileName: _jsxFileName, lineNumber: 12, columnNumber: 13 }, this) }), index, false, { fileName: _jsxFileName, lineNumber: 10, columnNumber: 17 }, this));
        }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 7, columnNumber: 11 }, this));
};
exports.DaysOfWeekTitle = DaysOfWeekTitle;
//# sourceMappingURL=index.js.map