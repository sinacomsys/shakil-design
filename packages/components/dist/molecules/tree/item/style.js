import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";
import { pxToVhString, pxToVwString } from "@shakil-design/utils";
import { PX_UNIT, VIEW_PORT_UNIT } from "../../../types";
var useStyle = createUseStyles(function (theme) {
    var _a, _b;
    var _c;
    return {
        wrapper: (_a = {
                position: "relative",
                cursor: "pointer"
            },
            _a["&".concat(PX_UNIT)] = {
                height: 32,
            },
            _a["&".concat(VIEW_PORT_UNIT)] = {
                height: pxToVhString(32),
            },
            _a),
        "dot-line": (_b = {
                "&::before": {
                    content: "''",
                    position: "absolute",
                    border: "none",
                    borderTop: "2px dotted ".concat((_c = theme.tree) === null || _c === void 0 ? void 0 : _c.dotLine),
                    color: "#fff",
                    backgroundColor: "#fff",
                    height: 1,
                    top: "50%",
                    transform: "translateY(-50%)",
                }
            },
            _b["&".concat(PX_UNIT)] = {
                "&::before": { width: 16, left: -16 },
            },
            _b["&".concat(VIEW_PORT_UNIT)] = {
                "&::before": { width: pxToVwString(16), left: pxToVwString(-16) },
            },
            _b),
    };
}, { theming: theming, name: "item" });
export { useStyle };
//# sourceMappingURL=style.js.map