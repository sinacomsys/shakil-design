"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyle = void 0;
var src_1 = require("@shakil-design/utils/src");
var react_jss_1 = require("react-jss");
var types_1 = require("../../types");
var useStyle = (0, react_jss_1.createUseStyles)({
    wrapper: (_a = {},
        _a["&".concat(types_1.PX_UNIT)] = {
            paddingInlineStart: 30,
        },
        _a["&".concat(types_1.VIEW_PORT_UNIT)] = {
            paddingInlineStart: (0, src_1.pxToVwString)(30),
        },
        _a),
}, { name: "tree" });
exports.useStyle = useStyle;
//# sourceMappingURL=style.js.map