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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseText = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var react_1 = require("react");
var react_jss_1 = require("react-jss");
/** Inspired of React-native Text */
var BaseText = (0, react_1.memo)((0, react_1.forwardRef)(function (_a, forwardedRef) {
    var dir = _a.dir, numberOfLines = _a.numberOfLines, selectable = _a.selectable, className = _a.className, style = _a.style, ellipsis = _a.ellipsis, lineHeight = _a.lineHeight, rest = __rest(_a, ["dir", "numberOfLines", "selectable", "className", "style", "ellipsis", "lineHeight"]);
    var classes = useStyles();
    return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: forwardedRef, dir: dir != null ? dir : "auto", className: (0, classnames_1.default)(classes.text, selectable === true && classes.selectable, selectable === false && classes.notSelectable, numberOfLines != null && classes.textMultiLine, ellipsis === true && classes.ellipsis, className), style: __assign(__assign(__assign({}, style), (numberOfLines && { WebkitLineClamp: numberOfLines })), (lineHeight && { lineHeight: lineHeight })) }, rest)));
}));
exports.BaseText = BaseText;
var useStyles = (0, react_jss_1.createUseStyles)({
    text: {
        border: "0 solid black",
        boxSizing: "border-box",
        color: "black",
        // display: "inline",
        fontSize: 14,
        margin: 0,
        padding: 0,
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
        lineHeight: 1,
    },
    // See #13
    textMultiLine: {
        display: "-webkit-box",
        // maxWidth: '100%',
        overflow: "hidden",
        textOverflow: "ellipsis",
        // whiteSpace: 'nowrap',
        // whiteSpace: "pre",
        WebkitBoxOrient: "vertical",
    },
    ellipsis: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    notSelectable: {
        userSelect: "none",
    },
    selectable: {
        userSelect: "text",
    },
}, { name: "base-text" });
BaseText.displayName = "BaseText";
//# sourceMappingURL=baseText.js.map