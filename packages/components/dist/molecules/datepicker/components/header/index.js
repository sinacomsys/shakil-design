define(["require", "exports", "react/jsx-dev-runtime", "../../../../atoms", "../../context", "react", "./style"], function (require, exports, jsx_dev_runtime_1, atoms_1, context_1, react_1, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Header = void 0;
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/header/index.tsx";
    const Header = () => {
        var _a, _b;
        const { currentDate, onAddMonth, onAddYear, onSubtractMonth, onSubtractYear, } = (0, react_1.useContext)(context_1.DatePickerContext);
        const classes = (0, style_1.useStyle)();
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: {
                position: "relative",
                display: "flex",
                justifyContent: "center",
                marginBottom: 15,
                marginInline: 22,
            } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { onClick: onSubtractMonth, wrapperClassName: classes["prevMonth"], name: "Calendar-_-Month-_-Previous-Month", size: {
                        width: 16,
                        height: 9,
                    }, color: ["white"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 25, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { onClick: onAddMonth, wrapperClassName: classes["nextMonth"], name: "Calendar-_-Month-_-Next-Month", size: {
                        width: 16,
                        height: 9,
                    }, color: ["white"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["month"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, Object.assign({ size: 14, color: "white", theme: "Regular" }, { children: (_a = currentDate === null || currentDate === void 0 ? void 0 : currentDate.format("jMMMM")) !== null && _a !== void 0 ? _a : "" }), void 0, false, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 9 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { display: "flex", alignItems: "center", marginTop: 5 } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { name: "Calendar-_-Year-_-Previous-Year", size: { width: 9, height: 5 }, color: ["white"], onClick: onSubtractYear, wrapperStyle: { cursor: "pointer" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, Object.assign({ style: { marginInline: 10, width: 40, textAlign: "center" }, color: "white", size: 14 }, { children: (_b = currentDate === null || currentDate === void 0 ? void 0 : currentDate.format("jYYYY")) !== null && _b !== void 0 ? _b : "" }), void 0, false, { fileName: _jsxFileName, lineNumber: 57, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { name: "Calendar-_-Year-_-Next-Year", size: { width: 9, height: 5 }, color: ["white"], onClick: onAddYear, wrapperStyle: { cursor: "pointer" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 64, columnNumber: 11 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 7 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 15, columnNumber: 11 }, this));
    };
    exports.Header = Header;
});
//# sourceMappingURL=index.js.map