var _a;
import { pxToVwString } from "@shakil-design/utils";
import { createUseStyles } from "react-jss";
import { PX_UNIT, VIEW_PORT_UNIT } from "../../types";
var useStyle = createUseStyles({
    wrapper: (_a = {},
        _a["&".concat(PX_UNIT)] = {
            paddingInlineStart: 30,
        },
        _a["&".concat(VIEW_PORT_UNIT)] = {
            paddingInlineStart: pxToVwString(30),
        },
        _a),
}, { name: "tree" });
export { useStyle };
//# sourceMappingURL=style.js.map