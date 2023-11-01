import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme";
export var useStyle = createUseStyles({
    expandIcon: {
        marginInlineStart: 14,
        display: "flex",
        flexDirection: "column",
    },
    manualInput: { display: "flex", marginLeft: 75, marginTop: 20 },
    matrixContainer: {
        transition: "0.3s",
        overflow: "hidden",
    },
    panel: {
        width: 320,
        borderRadius: 10,
        backgroundColor: "#575757",
        paddingBottom: 20,
    },
    matrix: {
        paddingInline: 22,
    },
}, { theming: theming, name: "date-picker-panel" });
//# sourceMappingURL=style.js.map