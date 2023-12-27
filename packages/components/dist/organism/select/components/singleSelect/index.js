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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleSelect = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/select/components/singleSelect/index.tsx";
var react_1 = require("react");
var singleSelectList_1 = require("../list/singleSelectList");
var selectTemplate_1 = require("../selectTemplate");
var SingleSelect = function (_a) {
    var _b = _a.valueExtractor, valueExtractor = _b === void 0 ? function (item) { return item.value; } : _b, _c = _a.labelExtractor, labelExtractor = _c === void 0 ? function (item) { return item.label; } : _c, data = _a.data, value = _a.value, onChange = _a.onChange, onClear = _a.onClear, props = __rest(_a, ["valueExtractor", "labelExtractor", "data", "value", "onChange", "onClear"]);
    var _d = (0, react_1.useState)(undefined), internalValue = _d[0], setInternalValue = _d[1];
    (0, react_1.useEffect)(function () {
        setInternalValue(value);
    }, [value]);
    var handleOnChange = function (selectedItemValue) {
        !value && setInternalValue(selectedItemValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(selectedItemValue);
    };
    var _value = data.find(function (item) { return (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item)) === internalValue; });
    var displayValue = _value ? labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(_value) : "";
    var handleOnClear = function () {
        onClear === null || onClear === void 0 ? void 0 : onClear();
        onChange === null || onChange === void 0 ? void 0 : onChange(null);
    };
    return ((0, jsx_dev_runtime_1.jsxDEV)(selectTemplate_1.Template, __assign({}, props, { displayValue: displayValue || "", data: data, onClear: handleOnClear, renderOverlay: function () {
            return ((0, jsx_dev_runtime_1.jsxDEV)(singleSelectList_1.SingleSelectList, { data: data, labelExtractor: labelExtractor, valueExtractor: valueExtractor, internalValue: internalValue, onClick: handleOnChange }, void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 17 }, _this));
        } }), void 0, false, { fileName: _jsxFileName, lineNumber: 43, columnNumber: 11 }, _this));
};
exports.SingleSelect = SingleSelect;
//# sourceMappingURL=index.js.map