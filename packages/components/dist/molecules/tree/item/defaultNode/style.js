import { pxToVhString, pxToVwString } from "@shakil-design/utils";
import { createUseStyles } from "react-jss";
import { PX_UNIT, VIEW_PORT_UNIT } from "../../../../types";
import { theming } from "../../../../theme";
export var useStyles = createUseStyles(function (_a) {
    var _b, _c, _d;
    var tree = _a.tree;
    return {
        wrapper: (_b = {
                display: "flex",
                height: "100%",
                backgroundColor: "#f0f0f0"
            },
            _b["&".concat(PX_UNIT)] = {
                borderRadius: 7,
            },
            _b["&".concat(VIEW_PORT_UNIT)] = {
                borderRadius: pxToVhString(7),
            },
            _b["&--active"] = {
                backgroundColor: tree === null || tree === void 0 ? void 0 : tree.activeItem,
            },
            _b),
        "status-line": (_c = {
                height: "100%",
                backgroundColor: "#ababab",
                position: "relative"
            },
            _c["&".concat(PX_UNIT)] = {
                width: pxToVwString(3),
                marginInlineStart: pxToVwString(10),
            },
            _c["&".concat(VIEW_PORT_UNIT)] = {
                width: pxToVwString(3),
                marginInlineStart: pxToVwString(10),
            },
            _c),
        "item-content": {
            flex: 1,
            height: "100%",
        },
        "default-item-content": (_d = {
                display: "flex",
                alignItems: "center",
                height: "100%"
            },
            _d["&".concat(PX_UNIT)] = {
                marginInlineStart: 24,
            },
            _d["&".concat(VIEW_PORT_UNIT)] = {
                marginInlineStart: pxToVwString(24),
            },
            _d),
        "spinner-wrapper": {
            display: "flex",
            alignItems: "center",
            marginInlineEnd: 10,
        },
        "arrow-down": {
            transition: "all 0.2s",
        },
        "arrow-up": {
            transform: "rotate(180deg)",
        },
    };
}, { name: "default-node", theming: theming });
//# sourceMappingURL=style.js.map