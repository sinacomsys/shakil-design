"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const react_jss_1 = require("react-jss");
const theme_1 = require("../../theme");
const button = {
    overflow: "hidden",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
    borderRadius: 7,
    border: "none",
    outline: "none",
    position: "relative",
    paddingInline: 11,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};
const useStyles = (0, react_jss_1.createUseStyles)((theme) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return {
        "@keyframes ripple": {
            to: {
                opacity: 0,
                transform: "scale(2)",
            },
        },
        button: button,
        buttonMain: Object.assign(Object.assign({}, button), { backgroundColor: (_a = theme.button) === null || _a === void 0 ? void 0 : _a.main, color: "white" }),
        buttonSuccess: Object.assign(Object.assign({}, button), { backgroundColor: (_b = theme.button) === null || _b === void 0 ? void 0 : _b.success, color: "white" }),
        buttonDanger: Object.assign(Object.assign({}, button), { backgroundColor: (_c = theme.button) === null || _c === void 0 ? void 0 : _c.danger, color: "white" }),
        ghostMain: Object.assign(Object.assign({}, button), { border: `2px solid ${(_d = theme.button) === null || _d === void 0 ? void 0 : _d.main}`, color: (_e = theme.button) === null || _e === void 0 ? void 0 : _e.main, backgroundColor: "white" }),
        ghostSuccess: Object.assign(Object.assign({}, button), { border: `2px solid ${(_f = theme.button) === null || _f === void 0 ? void 0 : _f.success}`, color: (_g = theme.button) === null || _g === void 0 ? void 0 : _g.success, backgroundColor: "white" }),
        ghostDanger: Object.assign(Object.assign({}, button), { border: `2px solid ${(_h = theme.button) === null || _h === void 0 ? void 0 : _h.danger}`, color: (_j = theme.button) === null || _j === void 0 ? void 0 : _j.danger, backgroundColor: "white" }),
        cover: {
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            top: 0,
            left: 0,
            opacity: 0.3,
            cursor: "notAllowd",
        },
        ripple: {
            transform: "scale(0)",
            borderRadius: "100%",
            position: "absolute",
            opacity: 0.4,
            backgroundColor: "white",
            animation: "$ripple 750ms",
        },
        textContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        loadingContainer: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
        },
    };
}, { theming: theme_1.theming, name: "button" });
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map