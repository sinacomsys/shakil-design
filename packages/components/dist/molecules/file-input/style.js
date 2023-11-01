import { createUseStyles } from "react-jss";
import { theming } from "../../theme";
export var useStyle = createUseStyles(function (theme) {
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
            border: "dotted ".concat(theme.fileInput, " 2px"),
            padding: "0.7rem",
            borderRadius: "0.4375rem",
            outline: "none",
            columnGap: "2%",
            fontSize: "1rem",
            lineHeight: "1.25rem",
            height: "2.5rem",
        },
    };
}, { theming: theming, name: "file-input" });
//# sourceMappingURL=style.js.map