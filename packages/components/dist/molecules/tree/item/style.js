"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyle = void 0;
const react_jss_1 = require("react-jss");
const theme_1 = require("../../../theme");
const utils_1 = require("@shakil-design/utils");
const types_1 = require("../../../types");
const useStyle = (0, react_jss_1.createUseStyles)((theme) => {
    var _a;
    return {
        wrapper: {
            position: "relative",
            cursor: "pointer",
            [`&${types_1.PX_UNIT}`]: {
                height: 32,
            },
            [`&${types_1.VIEW_PORT_UNIT}`]: {
                height: (0, utils_1.pxToVhString)(32),
            },
        },
        "dot-line": {
            "&::before": {
                content: "''",
                position: "absolute",
                border: "none",
                borderTop: `2px dotted ${(_a = theme.tree) === null || _a === void 0 ? void 0 : _a.dotLine}`,
                color: "#fff",
                backgroundColor: "#fff",
                height: 1,
                top: "50%",
                transform: "translateY(-50%)",
            },
            [`&${types_1.PX_UNIT}`]: {
                "&::before": { width: 16, left: -16 },
            },
            [`&${types_1.VIEW_PORT_UNIT}`]: {
                "&::before": { width: (0, utils_1.pxToVwString)(16), left: (0, utils_1.pxToVwString)(-16) },
            },
        },
    };
}, { theming: theme_1.theming, name: "item" });
exports.useStyle = useStyle;
//# sourceMappingURL=style.js.map