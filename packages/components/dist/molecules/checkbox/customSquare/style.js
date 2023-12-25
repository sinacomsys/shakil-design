"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(function (_a) {
    var checkbox = _a.checkbox;
    return {
        wrapper: {
            position: "relative",
            backgroundColor: "transparent",
            border: function (_a) {
                var checked = _a.checked;
                var borderColor = checked
                    ? checkbox === null || checkbox === void 0 ? void 0 : checkbox.borderSelected
                    : checkbox === null || checkbox === void 0 ? void 0 : checkbox.unselectedBorder;
                return "1px solid ".concat(borderColor);
            },
        },
        square: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: function (_a) {
                var checked = _a.checked;
                return checked
                    ? checkbox === null || checkbox === void 0 ? void 0 : checkbox.squareSelected
                    : checkbox === null || checkbox === void 0 ? void 0 : checkbox.unselectedSquare;
            },
        },
    };
}, { theming: theme_1.theming, name: "custom-square" });
//# sourceMappingURL=style.js.map