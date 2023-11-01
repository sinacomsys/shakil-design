import { createUseStyles } from "react-jss";
import { theming } from "../../theme";
import { pxToVh } from "@shakil-design/utils";
var useStyles = createUseStyles(function (theme) {
    return {
        container: {
            overflow: "auto",
            "&::-webkit-scrollbar": {
                width: 7,
                height: "".concat(pxToVh(7), "vh"),
            },
            /* Track */
            "&::-webkit-scrollbar-track": {
                background: "#f8f8f8",
            },
            /* Handle */
            "&::-webkit-scrollbar-thumb": {
                background: theme.disableText,
                borderRadius: 4,
            },
            /* Handle on hover */
            "&::-webkit-scrollbar-thumb:hover": {
                background: theme.disableText,
                cursor: "pointer",
            },
        },
    };
}, { theming: theming, name: "scroll-view" });
export { useStyles };
//# sourceMappingURL=style.js.map