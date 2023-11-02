var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react/jsx-dev-runtime", "@shakil-design/utils", "classnames", "../../atoms", "../../theme", "./style"], function (require, exports, jsx_dev_runtime_1, utils_1, classnames_1, atoms_1, theme_1, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InternalTabPane = void 0;
    classnames_1 = __importDefault(classnames_1);
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tabs/internalTabPane.tsx";
    function InternalTabPane({ id, renderTitle, closable, onClick, isActive, onClose, }) {
        const classes = (0, style_1.useStyles)();
        const { tab: { textColor } = {} } = (0, theme_1.useTheme)();
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ onClick: (e) => {
                e.preventDefault();
                onClick(id);
            }, className: (0, classnames_1.default)(classes["tab"], isActive && classes["tabActive"]) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["tabsTitleWrapper"] }, { children: typeof renderTitle === "string" ? ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, Object.assign({ size: 14, theme: "Regular", color: textColor }, { children: renderTitle }), void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 45 }, this)) : typeof renderTitle === "function" ? (renderTitle({ id, isActive })) : null }), void 0, false, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 7 }, this), closable && ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { wrapperStyle: {
                        width: 16,
                    }, color: "#575757", name: "Table-_-Cross-Icon-for-erasing-all-of-filters", size: { height: (0, utils_1.pxToVh)(10), width: (0, utils_1.pxToVh)(10) }, unit: "viewport", onClick: (event) => {
                        event.stopPropagation();
                        onClose === null || onClose === void 0 ? void 0 : onClose(id);
                    } }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 21 }, this))] }), id, true, { fileName: _jsxFileName, lineNumber: 29, columnNumber: 11 }, this));
    }
    exports.InternalTabPane = InternalTabPane;
});
//# sourceMappingURL=internalTabPane.js.map