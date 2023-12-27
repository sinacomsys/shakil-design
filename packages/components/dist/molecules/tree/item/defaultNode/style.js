"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var src_1 = require("@shakil-design/utils/src");
var react_jss_1 = require("react-jss");
var types_1 = require("../../../../types");
var theme_1 = require("../../../../theme");
exports.useStyles = (0, react_jss_1.createUseStyles)(function (_a) {
    var _b, _c, _d;
    var tree = _a.tree;
    return {
        wrapper: (_b = {
                display: "flex",
                height: "100%",
                backgroundColor: "#f0f0f0"
            },
            _b["&".concat(types_1.PX_UNIT)] = {
                borderRadius: 7,
            },
            _b["&".concat(types_1.VIEW_PORT_UNIT)] = {
                borderRadius: (0, src_1.pxToVhString)(7),
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
            _c["&".concat(types_1.PX_UNIT)] = {
                width: (0, src_1.pxToVwString)(3),
                marginInlineStart: (0, src_1.pxToVwString)(10),
            },
            _c["&".concat(types_1.VIEW_PORT_UNIT)] = {
                width: (0, src_1.pxToVwString)(3),
                marginInlineStart: (0, src_1.pxToVwString)(10),
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
            _d["&".concat(types_1.PX_UNIT)] = {
                marginInlineStart: 24,
            },
            _d["&".concat(types_1.VIEW_PORT_UNIT)] = {
                marginInlineStart: (0, src_1.pxToVwString)(24),
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
}, { name: "default-node", theming: theme_1.theming });
//# sourceMappingURL=style.js.map