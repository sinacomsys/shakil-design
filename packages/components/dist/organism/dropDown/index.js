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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDown = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_popper_1 = require("react-popper");
var text_1 = require("../../atoms/text");
var src_1 = require("@shakil-design/utils/src");
var style_1 = require("./style");
var DropDown = function (_a) {
    var children = _a.children, _b = _a.trigger, trigger = _b === void 0 ? "hover" : _b, _c = _a.placement, placement = _c === void 0 ? "bottom" : _c, isVisibleProp = _a.isVisible, items = _a.items, onChange = _a.onChange, propValue = _a.value, dropdownStyle = _a.dropdownStyle, dropDownTestId = _a.dropDownTestId, disabled = _a.disabled;
    var classes = (0, style_1.useStyles)();
    var _d = (0, react_1.useState)(null), internalValue = _d[0], setInternalValue = _d[1];
    var body = (0, react_1.useRef)(null);
    var _e = (0, react_1.useState)(false), isVisible = _e[0], setVisible = _e[1];
    var _f = (0, react_1.useState)(null), referenceElement = _f[0], setReferenceElement = _f[1];
    var _g = (0, react_1.useState)(null), popperElement = _g[0], setPopperElement = _g[1];
    var timerDelay = (0, react_1.useRef)(null);
    var _h = (0, react_popper_1.usePopper)(referenceElement, popperElement, {
        placement: placement,
        strategy: "fixed",
    }), styles = _h.styles, attributes = _h.attributes;
    var handleOnClick = function (e) {
        fireEvents("onClick", e);
        setVisible(function (prev) { return !prev; });
    };
    (0, react_1.useEffect)(function () {
        body.current = document.body;
    }, []);
    var handleOnMouseLeave = function (e) {
        fireEvents("onMouseLeave", e);
        timerDelay.current = setTimeout(function () {
            setVisible(false);
        }, 100);
    };
    var handleOnMouseEnter = function (e) {
        fireEvents("onMouseEnter", e);
        setVisible(true);
    };
    var newChildProps = {
        key: "trigger",
        ref: setReferenceElement,
    };
    if (trigger === "click") {
        if (!disabled) {
            newChildProps.onClick = handleOnClick;
        }
    }
    if (trigger === "hover") {
        newChildProps.onMouseLeave = handleOnMouseLeave;
        newChildProps.onMouseEnter = handleOnMouseEnter;
    }
    var anchor = react_1.default.isValidElement(children) ? (react_1.default.cloneElement(children, newChildProps)) : ((0, jsx_runtime_1.jsx)("span", __assign({}, newChildProps, { children: children })));
    (0, src_1.useOnClickOutSide)({
        element: popperElement,
        extraElement: referenceElement,
        handler: function () {
            if (trigger === "click") {
                setVisible(false);
            }
        },
    });
    var handlePopupMouseLeave = function () {
        if (trigger === "hover") {
            setVisible(false);
        }
    };
    var handlePopupMouseEnter = function () {
        if (timerDelay.current) {
            clearTimeout(timerDelay.current);
        }
    };
    var fireEvents = function (type, e) {
        var childCallback = children.props[type];
        if (childCallback) {
            childCallback(e);
        }
    };
    // eslint-disable-next-line @typescript-eslint/naming-convention
    var _isVisible = isVisibleProp !== undefined ? isVisibleProp : isVisible;
    var onSelectItem = function (value) {
        setInternalValue(value.value);
        setVisible(false);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    };
    var _value = propValue || internalValue;
    var list = ((0, jsx_runtime_1.jsx)("div", __assign({ style: dropdownStyle, className: classes["overlay"] }, { children: items.map(function (item) {
            return ((0, jsx_runtime_1.jsx)("div", __assign({ "data-testid": dropDownTestId ? dropDownTestId + "-" + item.value : item.value, onClick: function () { return onSelectItem(item); }, className: (0, classnames_1.default)(classes["item"], _value === item.value && classes["itemSelected"]) }, { children: (0, jsx_runtime_1.jsx)(text_1.Text, __assign({ size: 14, color: "#575757" }, { children: item.label })) }), item.value));
        }) })));
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ style: { cursor: disabled ? "not-allowed" : "pointer" } }, { children: anchor })), body.current && _isVisible
                ? react_dom_1.default.createPortal((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", __assign({ onMouseEnter: handlePopupMouseEnter, onMouseLeave: handlePopupMouseLeave, ref: setPopperElement, style: styles.popper }, attributes.popper, { children: list })) }), body.current)
                : null] }));
};
exports.DropDown = DropDown;
//# sourceMappingURL=index.js.map