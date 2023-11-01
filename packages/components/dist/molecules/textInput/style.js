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
import { createUseStyles } from "react-jss";
import { theming } from "../../theme";
var addonStyle = {
    position: "absolute",
    transform: "translateY(-50%)",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    insetBlockStart: "50%",
};
var useStyles = createUseStyles(function (theme) {
    var _a;
    return {
        textInput: {
            width: "100%",
            backgroundColor: (_a = theme.textInput) === null || _a === void 0 ? void 0 : _a.fieldColor,
            color: theme.primary,
            border: "none",
            outline: "none",
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
}, { theming: theming, name: "text-input" });
export { useStyles };
//# sourceMappingURL=style.js.map