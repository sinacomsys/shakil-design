"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
var theme_1 = require("../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(function (_a) {
    var checkbox = _a.checkbox;
    return {
        wrapper: {
            borderRadius: 3,
            position: "relative",
            backgroundColor: "transparent",
            width: 16,
            height: 16,
            "same-size": true,
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
            width: 10,
            height: 10,
            "same-size": true,
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