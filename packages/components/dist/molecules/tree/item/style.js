"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyle = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../theme");
var src_1 = require("@shakil-design/utils/src");
var types_1 = require("../../../types");
var useStyle = (0, react_jss_1.createUseStyles)(function (theme) {
    var _a, _b;
    var _c;
    return {
        wrapper: (_a = {
                position: "relative",
                cursor: "pointer"
            },
            _a["&".concat(types_1.PX_UNIT)] = {
                height: 32,
            },
            _a["&".concat(types_1.VIEW_PORT_UNIT)] = {
                height: (0, src_1.pxToVhString)(32),
            },
            _a),
        "dot-line": (_b = {
                "&::before": {
                    content: "''",
                    position: "absolute",
                    border: "none",
                    borderTop: "2px dotted ".concat((_c = theme.tree) === null || _c === void 0 ? void 0 : _c.dotLine),
                    color: "#fff",
                    backgroundColor: "#fff",
                    height: 1,
                    top: "50%",
                    transform: "translateY(-50%)",
                }
            },
            _b["&".concat(types_1.PX_UNIT)] = {
                "&::before": { width: 16, left: -16 },
            },
            _b["&".concat(types_1.VIEW_PORT_UNIT)] = {
                "&::before": { width: (0, src_1.pxToVwString)(16), left: (0, src_1.pxToVwString)(-16) },
            },
            _b),
    };
}, { theming: theme_1.theming, name: "item" });
exports.useStyle = useStyle;
//# sourceMappingURL=style.js.map