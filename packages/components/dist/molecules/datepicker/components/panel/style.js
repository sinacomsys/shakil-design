"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyle = void 0;
const react_jss_1 = require("react-jss");
const theme_1 = require("../../../../theme");
exports.useStyle = (0, react_jss_1.createUseStyles)({
    expandIcon: {
        marginInlineStart: 14,
        display: "flex",
        flexDirection: "column",
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