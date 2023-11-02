var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react/jsx-dev-runtime", "react", "react-dom", "react-popper", "../../atoms", "../../molecules/textInput", "@shakil-design/utils", "./style", "classnames", "./components/fleshIcon", "./components/list/multiSelect", "./components/list/singleSelect"], function (require, exports, jsx_dev_runtime_1, react_1, react_dom_1, react_popper_1, atoms_1, textInput_1, utils_1, style_1, classnames_1, fleshIcon_1, multiSelect_1, singleSelect_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Select = void 0;
    react_dom_1 = __importDefault(react_dom_1);
    classnames_1 = __importDefault(classnames_1);
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/select/index.tsx";
    const Select = ({ data, value: propValue, labelExtractor = (item) => item.label, valueExtractor = (item) => item.value, onChange, onClear, disabled, unit = "viewport", allowClear, AddonAfter, addonAfterClassName, addonAfterStyle, addonBefore, addonBeforeClassName, addonBeforeStyle, className, onBlur, onFocus, placeholder, style, wrapperClassName, wrapperStyle, popupClassName, popupStyles, multiple, onSearch, hasSearch = true, onMouseEnter, onMouseLeave, }) => {
        const classes = (0, style_1.useStyles)();
        const [internalValue, setInternalValue] = (0, react_1.useState)(null);
        const body = (0, react_1.useRef)(null);
        const [width, setWidth] = (0, react_1.useState)(0);
        const [isVisible, setVisible] = (0, react_1.useState)(false);
        const [searchValue, setSearchValue] = (0, react_1.useState)("");
        const [referenceElement, setReferenceElement] = (0, react_1.useState)(null);
        const [popperElement, setPopperElement] = (0, react_1.useState)(null);
        const { styles: poperStyles, attributes } = (0, react_popper_1.usePopper)(referenceElement, popperElement, {
            placement: "bottom",
            strategy: "fixed",
            modifiers: [{ name: "offset", options: { offset: [0, 2] } }],
        });
        (0, react_1.useEffect)(() => {
            body.current = document.body;
        }, []);
        (0, react_1.useEffect)(() => {
            setInternalValue(null);
        }, [multiple]);
        (0, react_1.useEffect)(() => {
            setInternalValue(propValue);
        }, [propValue]);
        const handleOnClick = () => {
            if (disabled)
                return;
            setVisible((prev) => !prev);
        };
        const handleRefOfRefrenceElement = (node) => {
            setWidth(node === null || node === void 0 ? void 0 : node.getBoundingClientRect().width);
            setReferenceElement(node);
        };
        const handleOnChange = (selectedItemValue) => {
            if (multiple) {
                const alreadyExist = (internalValue || []).find((item) => item === selectedItemValue);
                if (alreadyExist) {
                    const items = (internalValue || []).filter((item) => {
                        return item !== selectedItemValue;
                    });
                    onChange === null || onChange === void 0 ? void 0 : onChange(items);
                    !propValue && setInternalValue(items);
                }
                else {
                    onChange === null || onChange === void 0 ? void 0 : onChange([...(internalValue || []), selectedItemValue]);
                    !propValue &&
                        setInternalValue([
                            ...(internalValue || []),
                            selectedItemValue,
                        ]);
                }
                return;
            }
            !propValue && setInternalValue(selectedItemValue);
            onChange === null || onChange === void 0 ? void 0 : onChange(selectedItemValue);
            setVisible(false);
        };
        const handleOnClear = () => {
            setInternalValue(null);
            setVisible(false);
            onClear === null || onClear === void 0 ? void 0 : onClear();
            onChange === null || onChange === void 0 ? void 0 : onChange(null);
        };
        (0, utils_1.useOnClickOutSide)({
            element: popperElement,
            extraElement: referenceElement,
            handler() {
                setVisible(false);
            },
        });
        let displayValue = null;
        if (multiple) {
            displayValue =
                Array.isArray(internalValue) && internalValue.length
                    ? `${internalValue === null || internalValue === void 0 ? void 0 : internalValue.length} Items Selected`
                    : undefined;
        }
        else {
            displayValue = internalValue;
        }
        return ((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: [(0, jsx_dev_runtime_1.jsxDEV)(textInput_1.TextInput, Object.assign({}, {
                    AddonAfter,
                    addonAfterClassName,
                    addonAfterStyle,
                    addonBefore,
                    addonBeforeClassName,
                    addonBeforeStyle,
                    className,
                    onBlur,
                    onFocus,
                    wrapperClassName,
                    wrapperStyle,
                    onMouseEnter,
                    onMouseLeave,
                }, { onClear: handleOnClear, ref: handleRefOfRefrenceElement, onClick: handleOnClick, value: displayValue, style: Object.assign({}, style), className: classes["textInput"], unit: unit, placeholder: placeholder, allowClear: allowClear, AddonAfter: (0, jsx_dev_runtime_1.jsxDEV)(fleshIcon_1.FleshIcon, { isVisible: isVisible }, void 0, false, { fileName: _jsxFileName, lineNumber: 165, columnNumber: 21 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 138, columnNumber: 7 }, this), body.current && isVisible
                    ? react_dom_1.default.createPortal((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ ref: setPopperElement, style: poperStyles.popper }, attributes.popper, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: Object.assign({ width }, popupStyles), className: (0, classnames_1.default)(popupClassName, classes["overlay"]) }, { children: [hasSearch ? ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["inputWrapper"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(textInput_1.TextInput, { value: searchValue, placeholder: "Search", unit: "pixel", AddonAfter: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { color: "#d1d1d1", name: "Search-Box_Search-Icon", unit: "pixel", size: { height: 15, width: 15 } }, void 0, false, { fileName: _jsxFileName, lineNumber: 186, columnNumber: 37 }, this), onChangeText: (value) => {
                                                onSearch === null || onSearch === void 0 ? void 0 : onSearch(value);
                                                setSearchValue(value);
                                            } }, void 0, false, { fileName: _jsxFileName, lineNumber: 182, columnNumber: 23 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 180, columnNumber: 33 }, this)) : null, multiple ? ((0, jsx_dev_runtime_1.jsxDEV)(multiSelect_1.MultiSelectList, { data: data, labelExtractor: labelExtractor, valueExtractor: valueExtractor, internalValue: internalValue, onClick: handleOnChange }, void 0, false, { fileName: _jsxFileName, lineNumber: 202, columnNumber: 32 }, this)) : ((0, jsx_dev_runtime_1.jsxDEV)(singleSelect_1.SingleSelectList, { data: data, labelExtractor: labelExtractor, valueExtractor: valueExtractor, internalValue: internalValue, onClick: handleOnChange }, void 0, false, { fileName: _jsxFileName, lineNumber: 210, columnNumber: 24 }, this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 176, columnNumber: 17 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 171, columnNumber: 15 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 169, columnNumber: 33 }, this), body.current)
                    : null] }, void 0, true, { fileName: _jsxFileName, lineNumber: 136, columnNumber: 11 }, this));
    };
    exports.Select = Select;
});
//# sourceMappingURL=index.js.map