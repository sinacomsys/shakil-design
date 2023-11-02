var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react/jsx-dev-runtime", "react", "../../../../atoms", "moment-jalaali", "../../context", "./style"], function (require, exports, jsx_dev_runtime_1, react_1, atoms_1, moment_jalaali_1, context_1, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Matrix = void 0;
    moment_jalaali_1 = __importDefault(moment_jalaali_1);
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/matrix/index.tsx";
    const Matrix = ({ monthMatrix }) => {
        const classes = (0, style_1.useStyles)();
        const today = (0, moment_jalaali_1.default)();
        const { currentDate, onSelectDate, selectedDate } = (0, react_1.useContext)(context_1.DatePickerContext);
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["matrix"] }, { children: monthMatrix === null || monthMatrix === void 0 ? void 0 : monthMatrix.map((week, index2) => {
                return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["week"] }, { children: week.map((day) => {
                        const key = day.format("YYYYMMDD");
                        const isToday = day.local().format("jYYYY/jMM/jDD") ===
                            today.local().format("jYYYY/jMM/jDD");
                        const isSelected = day.local().format("jYYYY/jMM/jDD") ===
                            (selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.local().format("jYYYY/jMM/jDD"));
                        const isCurrentMonth = day.local().format("jMM") ===
                            (currentDate === null || currentDate === void 0 ? void 0 : currentDate.local().format("jMM"));
                        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["dayContainer"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ onClick: () => {
                                    onSelectDate(day);
                                }, className: classes["day"], style: Object.assign(Object.assign(Object.assign({}, (isToday && {
                                    border: "1px solid white",
                                    borderRadius: 7,
                                })), (isSelected && {
                                    backgroundColor: "#eeeeee",
                                    borderRadius: 7,
                                })), { cursor: "pointer" }) }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, Object.assign({ theme: "Regular", size: 14, color: isSelected
                                        ? "#575757"
                                        : !isCurrentMonth
                                            ? "#828282"
                                            : "white" }, { children: day.format("jD") }), void 0, false, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 21 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 19 }, this) }), key, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 23 }, this));
                    }) }), index2, false, { fileName: _jsxFileName, lineNumber: 20, columnNumber: 17 }, this));
            }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 17, columnNumber: 11 }, this));
    };
    exports.Matrix = Matrix;
});
//# sourceMappingURL=index.js.map