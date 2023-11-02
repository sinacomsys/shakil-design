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
define(["require", "exports", "react/jsx-dev-runtime", "classnames", "react", "react-jss"], function (require, exports, jsx_dev_runtime_1, classnames_1, react_1, react_jss_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseText = void 0;
    classnames_1 = __importDefault(classnames_1);
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/text/baseText/baseText.tsx";
    /** Inspired of React-native Text */
    const BaseText = (0, react_1.memo)((0, react_1.forwardRef)((_a, forwardedRef) => {
        var { dir, numberOfLines, selectable, className, style, ellipsis } = _a, rest = __rest(_a, ["dir", "numberOfLines", "selectable", "className", "style", "ellipsis"]);
        const classes = useStyles();
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ ref: forwardedRef, dir: dir != null ? dir : "auto", className: (0, classnames_1.default)(classes.text, selectable === true && classes.selectable, selectable === false && classes.notSelectable, numberOfLines != null && classes.textMultiLine, ellipsis === true && classes.ellipsis, className), style: Object.assign(Object.assign({}, style), (numberOfLines && { WebkitLineClamp: numberOfLines })) }, rest), void 0, false, { fileName: _jsxFileName, lineNumber: 41, columnNumber: 15 }, this));
    }));
    exports.BaseText = BaseText;
    const useStyles = (0, react_jss_1.createUseStyles)({
        text: {
            border: "0 solid black",
            boxSizing: "border-box",
            color: "black",
            display: "inline",
            fontSize: 14,
            margin: 0,
            padding: 0,
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
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
});
//# sourceMappingURL=baseText.js.map