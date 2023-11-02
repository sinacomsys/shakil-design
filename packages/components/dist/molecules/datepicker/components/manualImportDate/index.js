var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react/jsx-dev-runtime", "react", "../../..", "../../../../atoms", "../../..", "moment-jalaali", "../../utils/checkDateIsValid"], function (require, exports, jsx_dev_runtime_1, react_1, __1, atoms_1, __2, moment_jalaali_1, checkDateIsValid_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ManualImportDate = void 0;
    moment_jalaali_1 = __importDefault(moment_jalaali_1);
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/manualImportDate/index.tsx";
    const reducer = (state, action) => {
        if (action.type === "YEAR") {
            return Object.assign(Object.assign({}, state), { year: action.payload });
        }
        else if (action.type === "MONTH") {
            return Object.assign(Object.assign({}, state), { month: action.payload });
        }
        else if (action.type === "DAY") {
            return Object.assign(Object.assign({}, state), { day: action.payload });
        }
        else
            return state;
    };
    const ManualImportDate = ({ goToday, onSelectDate, onSetCurrentDate, }) => {
        const [{ day, month, year }, dispatch] = (0, react_1.useReducer)(reducer, {
            year: "",
            month: "",
            day: "",
        });
        const onConfirm = () => {
            const date = `${year}/${month}/${day}`;
            const isDateValid = (0, checkDateIsValid_1.checkIsDateValid)(date);
            if (isDateValid) {
                const date = (0, moment_jalaali_1.default)(`${year}/${month}/${day}`, "jYYYY/jMM/jDD");
                onSetCurrentDate(date);
                onSelectDate(date);
            }
        };
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { display: "flex", alignItems: "center", marginBottom: 8 } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, Object.assign({ color: "#ABABAB", style: { marginRight: 13 } }, { children: "Date" }), void 0, false, { fileName: _jsxFileName, lineNumber: 59, columnNumber: 9 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { display: "flex" } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { width: 44 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(__1.TextInput, { unit: "pixel", value: year, style: { textAlign: "center" }, onChangeText: (value) => {
                                            if (value.length === 5)
                                                return;
                                            dispatch({ payload: value, type: "YEAR" });
                                        } }, void 0, false, { fileName: _jsxFileName, lineNumber: 64, columnNumber: 13 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 63, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { width: 44, marginInline: 6 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(__1.TextInput, { unit: "pixel", value: month, onChangeText: (value) => {
                                            if (value.length === 3)
                                                return;
                                            dispatch({ payload: value, type: "MONTH" });
                                        }, style: { textAlign: "center" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 75, columnNumber: 13 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 74, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { width: 44 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(__1.TextInput, { unit: "pixel", value: day, onChangeText: (value) => {
                                            if (value.length === 3)
                                                return;
                                            dispatch({ payload: value, type: "DAY" });
                                        }, style: { textAlign: "center" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 86, columnNumber: 13 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 85, columnNumber: 11 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 62, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 58, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { display: "flex", alignItems: "center", marginBottom: 8 } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, Object.assign({ style: { marginRight: 12 }, color: "#ABABAB" }, { children: "Time" }), void 0, false, { fileName: _jsxFileName, lineNumber: 99, columnNumber: 9 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { display: "flex" } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { width: 44 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(__1.TextInput, { unit: "pixel", style: { textAlign: "center" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 104, columnNumber: 13 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 103, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { width: 44, marginInline: 6 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(__1.TextInput, { unit: "pixel", style: { textAlign: "center" } }, void 0, false, { fileName: _jsxFileName, lineNumber: 107, columnNumber: 13 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 106, columnNumber: 11 }, this), (0, jsx_dev_runtime_1.jsxDEV)(__2.Button, Object.assign({ size: "small", style: { width: 44 }, onClick: onConfirm }, { children: "ok" }), void 0, false, { fileName: _jsxFileName, lineNumber: 109, columnNumber: 11 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 102, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 98, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)(__2.Button, Object.assign({ style: { marginLeft: 42 }, size: "small", onClick: goToday }, { children: "Go Today!" }), void 0, false, { fileName: _jsxFileName, lineNumber: 115, columnNumber: 7 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 11 }, this));
    };
    exports.ManualImportDate = ManualImportDate;
});
//# sourceMappingURL=index.js.map