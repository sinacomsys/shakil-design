"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Panel = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/panel/index.tsx";
const context_1 = require("../../context");
const react_1 = require("react");
const chuckDaysOfMonth_1 = require("../../utils/chuckDaysOfMonth");
const header_1 = require("../header");
const daysOfWeek_1 = require("../daysOfWeek");
const matrix_1 = require("../matrix");
const manualImportDate_1 = require("../manualImportDate");
const atoms_1 = require("../../../../atoms");
const style_1 = require("./style");
const Panel = () => {
    const [monthMatrix, setMonthMatrix] = (0, react_1.useState)();
    const [isMatrixOpen, setMatrixOpen] = (0, react_1.useState)(false);
    const classes = (0, style_1.useStyle)();
    const { goToday, onSetCurrentDate, onSelectDate } = (0, react_1.useContext)(context_1.DatePickerContext);
    const { currentDate, isCalendarExtended, handleExtendCalendar } = (0, react_1.useContext)(context_1.DatePickerContext);
    (0, react_1.useEffect)(() => {
        if (!currentDate)
            return;
        setMonthMatrix((0, chuckDaysOfMonth_1.chunkDaysOfMonth)(currentDate));
    }, [currentDate]);
    const onCollapseMatrix = () => {
        setMatrixOpen((prev) => !prev);
        handleExtendCalendar === null || handleExtendCalendar === void 0 ? void 0 : handleExtendCalendar();
    };
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const _isCalendarExtended = isCalendarExtended !== undefined ? isCalendarExtended : isMatrixOpen;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["panel"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["matrixContainer"], style: {
                    height: _isCalendarExtended ? "auto" : 0,
                } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(header_1.Header, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 9 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["matrix"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(daysOfWeek_1.DaysOfWeekTitle, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)(matrix_1.Matrix, { monthMatrix: monthMatrix }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 11 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["manualInput"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(manualImportDate_1.ManualImportDate, Object.assign({}, { goToday, onSelectDate, onSetCurrentDate }), void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 9 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["expandIcon"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { color: "#eeeeee", name: "Every-Boxes-_-Flesh-Icon-for-more-choices", size: { height: 5, width: 9 }, wrapperStyle: { marginBottom: 5, justifyContent: "center" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { wrapperStyle: { cursor: "pointer" }, onClick: onCollapseMatrix, color: "#eeeeee", name: "Calendar-_-Calendar-Icon", size: {
                                    width: 18,
                                    height: 18,
                                } }, void 0, false, { fileName: _jsxFileName, lineNumber: 60, columnNumber: 11 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 51, columnNumber: 7 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 36, columnNumber: 11 }, this));
};
exports.Panel = Panel;
//# sourceMappingURL=index.js.map