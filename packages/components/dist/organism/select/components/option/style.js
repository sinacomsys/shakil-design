"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const react_jss_1 = require("react-jss");
const theme_1 = require("../../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)((theme) => {
    var _a;
    return {
        item: {
            height: 27,
            paddingInlineStart: 20,
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: (_a = theme.select) === null || _a === void 0 ? void 0 : _a.hover,
            },
        },
    };
}, { theming: theme_1.theming, name: "select-options" });
//# sourceMappingURL=style.js.map