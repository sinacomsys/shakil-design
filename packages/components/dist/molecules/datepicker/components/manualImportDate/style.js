"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var context_1 = require("../../../../theme/context");
var useStyles = (0, react_jss_1.createUseStyles)(function () {
    return {
        wrapper: {
            display: "flex",
            alignItems: "center",
            marginBottom: 8,
        },
        title: {
            marginInlineEnd: 12,
        },
        input: {
            width: 44,
        },
        minute: {
            marginInline: 6,
        },
    };
}, {
    theming: context_1.theming,
    name: "manual-import-date",
});
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map