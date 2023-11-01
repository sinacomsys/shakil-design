"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyle = void 0;
const utils_1 = require("@shakil-design/utils");
const react_jss_1 = require("react-jss");
const types_1 = require("../../types");
const useStyle = (0, react_jss_1.createUseStyles)({
    wrapper: {
        [`&${types_1.PX_UNIT}`]: {
            paddingInlineStart: 30,
        },
        [`&${types_1.VIEW_PORT_UNIT}`]: {
            paddingInlineStart: (0, utils_1.pxToVwString)(30),
        },
    },
}, { name: "tree" });
exports.useStyle = useStyle;
//# sourceMappingURL=style.js.map