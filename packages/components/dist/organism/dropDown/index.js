"use strict";
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
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/dropDown/index.tsx";
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_popper_1 = require("react-popper");
const text_1 = require("../../atoms/text");
const utils_1 = require("@shakil-design/utils");
const style_1 = require("./style");
const DropDown = ({ children, trigger = "hover", placement = "bottom", isVisible: isVisibleProp, items, onChange, value: propValue, }) => {
    const classes = (0, style_1.useStyles)();
    const [internalValue, setInternalValue] = (0, react_1.useState)(null);
    const body = (0, react_1.useRef)(null);
    const [isVisible, setVisible] = (0, react_1.useState)(false);
    const [referenceElement, setReferenceElement] = (0, react_1.useState)(null);
    const [popperElement, setPopperElement] = (0, react_1.useState)(null);
    const timerDelay = (0, react_1.useRef)(null);
    const { styles, attributes } = (0, react_popper_1.usePopper)(referenceElement, popperElement, {
        placement: placement,
        strategy: "fixed",
    });
    const handleOnClick = (e) => {
        fireEvents("onClick", e);
        setVisible((prev) => !prev);
    };
    (0, react_1.useEffect)(() => {
        body.current = document.body;
    }, []);
    const handleOnMouseLeave = (e) => {
        fireEvents("onMouseLeave", e);
        timerDelay.current = setTimeout(() => {
            setVisible(false);
        }, 100);
    };
    const handleOnMouseEnter = (e) => {
        fireEvents("onMouseEnter", e);
        setVisible(true);
    };
    const newChildProps = {
        key: "trigger",
        ref: setReferenceElement,
    };
    if (trigger === "click") {
        newChildProps.onClick = handleOnClick;
    }
    if (trigger === "hover") {
        newChildProps.onMouseLeave = handleOnMouseLeave;
        newChildProps.onMouseEnter = handleOnMouseEnter;
    }
    const anchor = react_1.default.isValidElement(children) ? (react_1.default.cloneElement(children, newChildProps)) : ((0, jsx_dev_runtime_1.jsxDEV)("span", Object.assign({}, newChildProps, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 90, columnNumber: 8 }, this));
    (0, utils_1.useOnClickOutSide)({
        element: popperElement,
        extraElement: referenceElement,
        handler() {
            if (trigger === "click") {
                setVisible(false);
            }
        },
    });
    const handlePopupMouseLeave = () => {
        if (trigger === "hover") {
            setVisible(false);
        }
    };
    const handlePopupMouseEnter = () => {
        if (timerDelay.current) {
            clearTimeout(timerDelay.current);
        }
    };
    const fireEvents = (type, e) => {
        const childCallback = children.props[type];
        if (childCallback) {
            childCallback(e);
        }
    };
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const _isVisible = isVisibleProp !== undefined ? isVisibleProp : isVisible;
    const onSelectItem = (value) => {
        setInternalValue(value.value);
        setVisible(false);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    };
    const _value = propValue || internalValue;
    const list = ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["overlay"] }, { children: items.map((item) => {
            return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ onClick: () => onSelectItem(item), className: (0, classnames_1.default)(classes["item"], _value === item.value && classes["itemSelected"]) }, { children: (0, jsx_dev_runtime_1.jsxDEV)(text_1.Text, Object.assign({ size: 14, color: "#575757" }, { children: item.label }), void 0, false, { fileName: _jsxFileName, lineNumber: 149, columnNumber: 13 }, this) }), item.value, false, { fileName: _jsxFileName, lineNumber: 140, columnNumber: 17 }, this));
        }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 137, columnNumber: 17 }, this));
    return ((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: [anchor, body.current && _isVisible
                ? react_dom_1.default.createPortal((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ onMouseEnter: handlePopupMouseEnter, onMouseLeave: handlePopupMouseLeave, ref: setPopperElement, style: styles.popper }, attributes.popper, { children: list }), void 0, false, { fileName: _jsxFileName, lineNumber: 164, columnNumber: 15 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 162, columnNumber: 33 }, this), body.current)
                : null] }, void 0, true, { fileName: _jsxFileName, lineNumber: 158, columnNumber: 11 }, this));
};
exports.DropDown = DropDown;
//# sourceMappingURL=index.js.map