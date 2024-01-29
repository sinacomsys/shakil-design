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
exports.Template = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "/home/amir/project/TML/amir-shakil-design/shakil-design/packages/components/src/organism/select/components/selectTemplate/index.tsx";
var react_1 = require("react");
var molecules_1 = require("../../../../molecules");
var react_dom_1 = __importDefault(require("react-dom"));
var react_popper_1 = require("react-popper");
var fleshIcon_1 = require("../fleshIcon");
var atoms_1 = require("../../../../atoms");
var classnames_1 = __importDefault(require("classnames"));
var style_1 = require("../../style");
var src_1 = require("@shakil-design/utils/src");
var utils_1 = require("@shakil-design/utils");
var Template = function (_a) {
    var onClear = _a.onClear, disabled = _a.disabled, allowClear = _a.allowClear, AddonAfter = _a.AddonAfter, addonAfterClassName = _a.addonAfterClassName, addonAfterStyle = _a.addonAfterStyle, addonBefore = _a.addonBefore, addonBeforeClassName = _a.addonBeforeClassName, addonBeforeStyle = _a.addonBeforeStyle, className = _a.className, onBlur = _a.onBlur, onFocus = _a.onFocus, placeholder = _a.placeholder, style = _a.style, wrapperClassName = _a.wrapperClassName, wrapperStyle = _a.wrapperStyle, popupClassName = _a.popupClassName, popupStyles = _a.popupStyles, _b = _a.hasSearch, hasSearch = _b === void 0 ? true : _b, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, testid = _a.testid, errorMessage = _a.errorMessage, errorMessageClassName = _a.errorMessageClassName, hasError = _a.hasError, clearIconColor = _a.clearIconColor, isLoading = _a.isLoading, displayValue = _a.displayValue, renderOverlay = _a.renderOverlay, data = _a.data, labelExtractor = _a.labelExtractor, onFilter = _a.onFilter;
    var classes = (0, style_1.useStyles)();
    var _c = (0, react_1.useState)(false), isVisible = _c[0], setVisible = _c[1];
    var _d = (0, react_1.useState)(""), searchValue = _d[0], setSearchValue = _d[1];
    var body = (0, react_1.useRef)(null);
    var _e = (0, react_1.useState)(null), referenceElement = _e[0], setReferenceElement = _e[1];
    var _f = (0, react_1.useState)(null), popperElement = _f[0], setPopperElement = _f[1];
    (0, react_1.useEffect)(function () {
        body.current = document.body;
    }, []);
    var _g = (0, react_popper_1.usePopper)(referenceElement, popperElement, {
        placement: "bottom",
        strategy: "fixed",
        modifiers: [{ name: "offset", options: { offset: [0, 2] } }],
    }), poperStyles = _g.styles, attributes = _g.attributes;
    var handleOnClick = function () {
        if (disabled || isLoading)
            return;
        setVisible(function (prev) { return !prev; });
    };
    var _h = (0, react_1.useState)(0), width = _h[0], setWidth = _h[1];
    var handleRefOfRefrenceElement = function (node) {
        setWidth(node === null || node === void 0 ? void 0 : node.getBoundingClientRect().width);
        setReferenceElement(node);
    };
    (0, src_1.useOnClickOutSide)({
        element: popperElement,
        extraElement: referenceElement,
        handler: function () {
            setVisible(false);
        },
    });
    var handleOnSearch = function (value) {
        setSearchValue(value);
    };
    var onCloseOverlay = function () {
        setVisible(false);
    };
    var filteredData = (0, react_1.useMemo)(function () {
        if (onFilter && typeof onFilter === "function") {
            return onFilter({ data: data, searchedValue: searchValue }).filterdData;
        }
        else {
            return data === null || data === void 0 ? void 0 : data.filter(function (item) {
                return (0, utils_1.isInclude)(labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(item), searchValue);
            });
        }
    }, [data, labelExtractor, onFilter, searchValue]);
    var onClearSearchInput = function () {
        setSearchValue("");
    };
    return ((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ ref: handleRefOfRefrenceElement }, { children: (0, jsx_dev_runtime_1.jsxDEV)(molecules_1.TextInput, __assign({}, {
                    AddonAfter: AddonAfter,
                    addonAfterClassName: addonAfterClassName,
                    addonAfterStyle: addonAfterStyle,
                    addonBefore: addonBefore,
                    addonBeforeClassName: addonBeforeClassName,
                    addonBeforeStyle: addonBeforeStyle,
                    className: className,
                    onBlur: onBlur,
                    onFocus: onFocus,
                    wrapperClassName: wrapperClassName,
                    wrapperStyle: wrapperStyle,
                    onMouseEnter: onMouseEnter,
                    onMouseLeave: onMouseLeave,
                    errorMessage: errorMessage,
                    errorMessageClassName: errorMessageClassName,
                    hasError: hasError,
                    testID: testid === null || testid === void 0 ? void 0 : testid.input,
                    clearIconColor: clearIconColor,
                    isLoading: isLoading,
                }, { onClear: onClear, onClick: handleOnClick, value: displayValue, style: __assign({}, style), className: (0, classnames_1.default)(classes["text-input"], isLoading && "".concat(classes["text-input"], "--loading")), placeholder: placeholder, allowClear: allowClear, AddonAfter: (0, jsx_dev_runtime_1.jsxDEV)(fleshIcon_1.FleshIcon, { isVisible: isVisible }, void 0, false, { fileName: _jsxFileName, lineNumber: 160, columnNumber: 23 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 126, columnNumber: 9 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 125, columnNumber: 7 }, _this), body.current && isVisible
                ? react_dom_1.default.createPortal((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ ref: setPopperElement, style: poperStyles.popper }, attributes.popper, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ "data-testid": testid === null || testid === void 0 ? void 0 : testid.overlay, style: __assign({ width: width }, popupStyles), className: (0, classnames_1.default)(popupClassName, classes["overlay"]) }, { children: [hasSearch ? ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["inputWrapper"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(molecules_1.TextInput, { allowClear: true, value: searchValue, placeholder: "Search", AddonAfter: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { color: "#d1d1d1", name: "Search-Box_Search-Icon", size: { height: 15, width: 15 } }, void 0, false, { fileName: _jsxFileName, lineNumber: 183, columnNumber: 37 }, _this), onClear: onClearSearchInput, onChangeText: handleOnSearch }, void 0, false, { fileName: _jsxFileName, lineNumber: 179, columnNumber: 23 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 177, columnNumber: 33 }, _this)) : null, renderOverlay({ onClose: onCloseOverlay, filteredData: filteredData })] }), void 0, true, { fileName: _jsxFileName, lineNumber: 172, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 167, columnNumber: 15 }, _this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 165, columnNumber: 33 }, _this), body.current)
                : null] }, void 0, true, { fileName: _jsxFileName, lineNumber: 123, columnNumber: 11 }, _this));
};
exports.Template = Template;
//# sourceMappingURL=index.js.map