"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const utils_1 = require("@shakil-design/utils");
const react_jss_1 = require("react-jss");
const types_1 = require("../../../../types");
const theme_1 = require("../../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(({ tree }) => {
    return {
        wrapper: {
            display: "flex",
            height: "100%",
            backgroundColor: "#f0f0f0",
            [`&${types_1.PX_UNIT}`]: {
                borderRadius: 7,
            },
            [`&${types_1.VIEW_PORT_UNIT}`]: {
                borderRadius: (0, utils_1.pxToVhString)(7),
            },
            "&--active": {
                backgroundColor: tree === null || tree === void 0 ? void 0 : tree.activeItem,
            },
        },
        "status-line": {
            height: "100%",
            backgroundColor: "#ababab",
            position: "relative",
            [`&${types_1.PX_UNIT}`]: {
                width: (0, utils_1.pxToVwString)(3),
                marginInlineStart: (0, utils_1.pxToVwString)(10),
            },
            [`&${types_1.VIEW_PORT_UNIT}`]: {
                width: (0, utils_1.pxToVwString)(3),
                marginInlineStart: (0, utils_1.pxToVwString)(10),
            },
        },
        "item-content": {
            flex: 1,
            height: "100%",
        },
        "default-item-content": {
            display: "flex",
            alignItems: "center",
            height: "100%",
            [`&${types_1.PX_UNIT}`]: {
                marginInlineStart: 24,
            },
            [`&${types_1.VIEW_PORT_UNIT}`]: {
                marginInlineStart: (0, utils_1.pxToVwString)(24),
            },
        },
        "spinner-wrapper": {
            display: "flex",
            alignItems: "center",
            marginInlineEnd: 10,
        },
        "arrow-down": {
            transition: "all 0.2s",
        },
        "arrow-up": {
            transform: "rotate(180deg)",
        },
    };
}, { name: "default-node", theming: theme_1.theming });
//# sourceMappingURL=style.js.map