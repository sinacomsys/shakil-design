var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react/jsx-dev-runtime", "../../utils/checkDateIsValid", "moment-jalaali", "react", "../../context"], function (require, exports, jsx_dev_runtime_1, checkDateIsValid_1, moment_jalaali_1, react_1, context_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DatePickerProvider = void 0;
    moment_jalaali_1 = __importDefault(moment_jalaali_1);
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/datePickerProvider/index.tsx";
    moment_jalaali_1.default.loadPersian({ dialect: "persian-modern" });
    const DatePickerProvider = ({ onMonthChange, onDayChange, onYearChange, onChange, children, handleExtendCalendar, isCalendarExtended, value, }) => {
        const [currentDate, setCurrentDate] = (0, react_1.useState)((0, moment_jalaali_1.default)());
        const [selectedDate, setSelectedDate] = (0, react_1.useState)(null);
        const [inputValue, setInputValue] = (0, react_1.useState)("");
        (0, react_1.useEffect)(() => {
            var _a;
            setCurrentDate(value !== null && value !== void 0 ? value : (0, moment_jalaali_1.default)());
            setSelectedDate(value);
            setInputValue((_a = value === null || value === void 0 ? void 0 : value.format("jYYYY/jMM/jDD")) !== null && _a !== void 0 ? _a : "");
        }, [value]);
        const handleMonthChange = (value) => {
            onMonthChange === null || onMonthChange === void 0 ? void 0 : onMonthChange({
                name: value === null || value === void 0 ? void 0 : value.format("jMMMM"),
                value: Number(value === null || value === void 0 ? void 0 : value.format("jMM")),
            });
        };
        const handleOnChangeYear = (value) => {
            onYearChange === null || onYearChange === void 0 ? void 0 : onYearChange(value);
        };
        const onAddMonth = () => {
            const newValue = currentDate === null || currentDate === void 0 ? void 0 : currentDate.clone().add(1, "jMonth");
            if (!newValue)
                return;
            setCurrentDate(newValue);
            handleMonthChange(newValue);
        };
        const onSubtractMonth = () => {
            const newValue = currentDate === null || currentDate === void 0 ? void 0 : currentDate.clone().subtract(1, "jMonth");
            setCurrentDate(newValue);
            if (!newValue)
                return;
            handleMonthChange(newValue);
        };
        const onAddYear = () => {
            const newValue = currentDate === null || currentDate === void 0 ? void 0 : currentDate.clone().add(1, "jYear");
            if (!newValue)
                return;
            setCurrentDate(newValue);
            handleOnChangeYear(newValue.format("jYYYY"));
        };
        const onSubtractYear = () => {
            const newValue = currentDate === null || currentDate === void 0 ? void 0 : currentDate.clone().subtract(1, "jYear");
            if (!newValue)
                return;
            setCurrentDate(newValue);
            handleOnChangeYear(newValue.format("jYYYY"));
        };
        const goToday = () => {
            setCurrentDate((0, moment_jalaali_1.default)());
        };
        const onSetCurrentDate = (value) => {
            setCurrentDate(value);
        };
        const onSelectDate = (value) => {
            setSelectedDate(value);
            onChange === null || onChange === void 0 ? void 0 : onChange(value);
            onDayChange === null || onDayChange === void 0 ? void 0 : onDayChange(value.format("jDD"));
            setInputValue(value.format("jYYYY/jMM/jDD"));
        };
        const onChangeDateInputText = (value) => {
            setInputValue(value);
            const isValid = (0, checkDateIsValid_1.checkIsDateValid)(value);
            if (isValid) {
                setCurrentDate((0, moment_jalaali_1.default)(value, "jYYYY/jMM/jDD"));
                setSelectedDate((0, moment_jalaali_1.default)(value, "jYYYY/jMM/jDD"));
                return;
            }
            setCurrentDate((0, moment_jalaali_1.default)());
            setSelectedDate(null);
        };
        return ((0, jsx_dev_runtime_1.jsxDEV)(context_1.DatePickerContext.Provider, Object.assign({ value: {
                currentDate,
                onAddMonth,
                onSubtractMonth,
                onAddYear,
                onSubtractYear,
                goToday,
                onSetCurrentDate,
                onSelectDate,
                selectedDate,
                handleExtendCalendar,
                isCalendarExtended,
            } }, { children: typeof children === "function"
                ? children({
                    value: inputValue,
                    onChangeDateInputText,
                })
                : children }), void 0, false, { fileName: _jsxFileName, lineNumber: 95, columnNumber: 11 }, this));
    };
    exports.DatePickerProvider = DatePickerProvider;
});
//# sourceMappingURL=index.js.map