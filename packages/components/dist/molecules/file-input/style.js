"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyle = void 0;
const react_jss_1 = require("react-jss");
const theme_1 = require("../../theme");
exports.useStyle = (0, react_jss_1.createUseStyles)((theme) => {
    return {
        fileInput: {
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
        },
        fileChooser: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "75%",
            cursor: "pointer",
            backgroundColor: "white",
            color: theme.fileInput,
            border: `dotted ${theme.fileInput} 2px`,
            padding: "0.7rem",
            borderRadius: "0.4375rem",
            outline: "none",
            columnGap: "2%",
            fontSize: "1rem",
            lineHeight: "1.25rem",
            height: "2.5rem",
        },
    };
}, { theming: theme_1.theming, name: "file-input" });
//# sourceMappingURL=style.js.map