"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../theme");
var types_1 = require("../../../types");
var utils_1 = require("@shakil-design/utils");
exports.useStyles = (0, react_jss_1.createUseStyles)(function (theme) {
    var _a;
    var _b;
    return {
        dots: {
            position: "absolute",
            top: 0,
            left: 11,
            width: 0,
            borderLeft: "2px dotted ".concat((_b = theme.tree) === null || _b === void 0 ? void 0 : _b.dotLine),
        },
        "animation-wrapper": {
            position: "relative",
            overflow: "hidden",
            height: 0,
        },
        wrapper: (_a = {
                paddingTop: 20
            },
            _a["".concat(types_1.VIEW_PORT_UNIT)] = {
                paddingTop: (0, utils_1.pxToVhString)(20),
            },
            _a["&--first-item"] = {
                paddingTop: 0,
            },
            _a),
    };
}, { theming: theme_1.theming, name: "tree-collapse" });
//# sourceMappingURL=style.js.map