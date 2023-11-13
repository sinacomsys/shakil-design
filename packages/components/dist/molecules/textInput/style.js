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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../theme");
var addonStyle = {
    position: "absolute",
    transform: "translateY(-50%)",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    insetBlockStart: "50%",
};
var useStyles = (0, react_jss_1.createUseStyles)(function (theme) {
    var _a;
    return {
        "clear--visible": {
            cursor: "pointer",
            visibility: "visible",
        },
        "clear--hidden": {
            cursor: "pointer",
            visibility: "hidden",
        },
        textInput: {
            width: "100%",
            backgroundColor: (_a = theme.textInput) === null || _a === void 0 ? void 0 : _a.fieldColor,
            color: theme.primary,
            border: "none",
            outline: "none",
            height: 32,
            borderRadius: 7,
            paddingBlock: 8,
            paddingInline: 10,
            fontSize: 14,
        },
        disabled: {
            backgroundColor: theme.disableField,
            cursor: "not-allowed",
            color: theme.disableText,
        },
        inputWrapper: {
            position: "relative",
        },
        addonBefore: __assign(__assign({}, addonStyle), { insetInlineStart: 10 }),
        addonAfter: __assign(__assign({}, addonStyle), { insetInlineEnd: 10 }),
    };
}, { theming: theme_1.theming, name: "text-input" });
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map