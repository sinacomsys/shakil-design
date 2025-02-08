"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(function (_a) {
    var tab = _a.tab;
    return {
        "title-wrapper": {
            cursor: "pointer",
            backgroundColor: function (_a) {
                var isActive = _a.isActive;
                return isActive ? tab === null || tab === void 0 ? void 0 : tab.card.activeBG : tab === null || tab === void 0 ? void 0 : tab.card.BG;
            },
            display: "flex",
            alignItems: "center",
            paddingInlineStart: 6,
            paddingInlineEnd: 18,
            paddingBlock: 6,
            marginInlineEnd: 4,
        },
        "default-title": {
            flex: 1,
            display: "flex",
            alignItems: "center",
            position: "relative",
            minWidth: 135,
            maxWidth: 150,
            paddingInlineEnd: 8,
        },
    };
}, { theming: theme_1.theming, name: "card" });
//# sourceMappingURL=style.js.map