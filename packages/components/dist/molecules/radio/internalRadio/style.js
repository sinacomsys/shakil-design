"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(function (theme) {
    return {
        ripple: {
            opacity: 0.2,
            width: 0,
            height: 0,
            backgroundColor: theme.primary,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            position: "absolute",
            transformOrigin: "center",
            borderRadius: "50%",
        },
        input: {
            opacity: 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            margin: 0,
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
        },
        label: {
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            columnGap: 11,
            cursor: "pointer",
        },
        container: {
            position: "relative",
        },
        "outter-circle": {
            borderRadius: "50%",
            backgroundColor: "white",
            zIndex: 2,
            position: "relative",
            width: 16,
            height: 16,
            border: function (props) {
                return "1px solid ".concat(props === null || props === void 0 ? void 0 : props.borderColor);
            },
            "same-size": true,
        },
        "inner-circle": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            width: 10,
            height: 10,
            "same-size": true,
            backgroundColor: function (props) {
                return props === null || props === void 0 ? void 0 : props.backgroundColor;
            },
        },
    };
}, { theming: theme_1.theming, name: "internal-radio" });
//# sourceMappingURL=style.js.map