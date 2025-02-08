"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(function (_a) {
    var primary = _a.primary;
    return {
        "tooltip-content": {
            padding: 6,
            borderRadius: 4,
            backgroundColor: primary,
        },
        "dummy-anchor": {
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
        },
    };
}, { theming: theme_1.theming, name: "tabs" });
//# sourceMappingURL=style.js.map