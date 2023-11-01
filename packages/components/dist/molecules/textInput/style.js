"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const react_jss_1 = require("react-jss");
const theme_1 = require("../../theme");
const addonStyle = {
    position: "absolute",
    transform: "translateY(-50%)",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    insetBlockStart: "50%",
};
const useStyles = (0, react_jss_1.createUseStyles)((theme) => {
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
        addonBefore: Object.assign(Object.assign({}, addonStyle), { insetInlineStart: 10 }),
        addonAfter: Object.assign(Object.assign({}, addonStyle), { insetInlineEnd: 10 }),
    };
}, { theming: theme_1.theming, name: "text-input" });
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map