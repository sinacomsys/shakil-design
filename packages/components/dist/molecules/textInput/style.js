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
var textInputSharedStyle = function (theme) { return ({
    width: "100%",
    backgroundColor: "transparent",
    color: theme.primary,
    border: "none",
    outline: "none",
    paddingBlock: 8,
    paddingInline: 10,
    fontSize: 14,
}); };
var useStyles = (0, react_jss_1.createUseStyles)(function (theme) {
    var _a, _b;
    return {
        "clear-icon": {
            cursor: "pointer",
        },
        textInput: __assign(__assign({}, textInputSharedStyle(theme)), { height: 32 }),
        "text-area": __assign({}, textInputSharedStyle(theme)),
        "input-with-error": {
            border: "1px solid ".concat((_a = theme.textInput) === null || _a === void 0 ? void 0 : _a.errorMessage),
        },
        disabled: {
            backgroundColor: theme.disableField,
            cursor: "not-allowed",
            color: theme.disableText,
        },
        inputWrapper: {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            backgroundColor: (_b = theme.textInput) === null || _b === void 0 ? void 0 : _b.fieldColor,
            borderRadius: 7,
        },
        addonBefore: __assign(__assign({}, addonStyle), { insetInlineStart: 10 }),
        addonAfter: __assign(__assign({}, addonStyle), { insetInlineEnd: 10 }),
        "error-message": {
            position: "absolute",
            top: "100%",
            insetInlineStart: 0,
            insetBlockStart: "100%",
        },
        "input-with-addon-after": {
            paddingInlineEnd: 15,
        },
    };
}, { theming: theme_1.theming, name: "text-input" });
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map