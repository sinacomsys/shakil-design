"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyle = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../../theme");
exports.useStyle = (0, react_jss_1.createUseStyles)({
    expandIconWrap: {
        marginInlineStart: 14,
        display: "flex",
        flexDirection: "column",
        "&--more-choices": {
            marginBottom: 5,
            justifyContent: "center",
        },
    },
    manualInput: { display: "flex", marginLeft: 75, marginTop: 20 },
    matrixContainer: {
        transition: "0.3s",
        overflow: "hidden",
    },
    panel: {
        width: 320,
        borderRadius: 10,
        backgroundColor: "#575757",
        paddingBottom: 20,
    },
    matrix: {
        paddingInline: 22,
    },
}, { theming: theme_1.theming, name: "date-picker-panel" });
//# sourceMappingURL=style.js.map