"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var useStyles = (0, react_jss_1.createUseStyles)({
    "rotate-animation": {
        transform: "rotate(0deg)",
        transition: "transform .2s",
        "&--selected": {
            transform: "rotate(180deg)",
        },
    },
}, {
    name: "flesh-icon",
});
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map