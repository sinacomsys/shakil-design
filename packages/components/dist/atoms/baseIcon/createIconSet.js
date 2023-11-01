"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIcomoonIconSet = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/baseIcon/createIconSet.tsx";
const usehooks_ts_1 = require("usehooks-ts");
function createIcomoonIconSet(glyphMap) {
    const Icon = (props) => {
        const { height, width } = props.size;
        const { height: windowHeight } = (0, usehooks_ts_1.useWindowSize)();
        const vh = windowHeight / 100;
        let realWidth = null;
        let realHeight = null;
        if (props.unit === "pixel") {
            realWidth = width;
            realHeight = height;
        }
        else if (props.unit === "viewport") {
            realWidth = width * vh;
            realHeight = height * vh;
        }
        let viewBox = "0 0 1024 1024";
        if (realWidth && realHeight && realWidth > realHeight) {
            const ratio = realHeight / realWidth;
            const viewPortH = ratio * glyphMap.height;
            const viewPortW = glyphMap.height;
            const viewPortX = 0;
            const viewPortY = viewPortW - viewPortH;
            viewBox = `${viewPortX} ${viewPortY / 2} ${viewPortW} ${viewPortH}`;
        }
        else if (realWidth && realHeight && realWidth < realHeight) {
            const ratio = realWidth / realHeight;
            const viewPortW = ratio * glyphMap.height;
            const viewPortH = glyphMap.height;
            const viewPortY = 0;
            const viewPortX = viewPortH - viewPortW;
            viewBox = `${viewPortX / 2} ${viewPortY} ${viewPortW} ${viewPortH}`;
        }
        const glyph = props.name
            ? glyphMap.icons.find(({ properties }) => properties.name === props.name)
            : null;
        return ((0, jsx_dev_runtime_1.jsxDEV)("svg", Object.assign({ 
            // xmlns="http://www.w3.org/2000/svg"
            viewBox: viewBox, fill: "none", width: realWidth || 0, height: realHeight || 0 }, { children: (glyph === null || glyph === void 0 ? void 0 : glyph.icon.paths).map((d, index) => {
                return ((0, jsx_dev_runtime_1.jsxDEV)("path", Object.assign({ d: d }, glyph === null || glyph === void 0 ? void 0 : glyph.attrs[index], { fill: Array.isArray(props.color)
                        ? props.color[index]
                        : props.color || (glyph === null || glyph === void 0 ? void 0 : glyph.attrs[index].fill) }), index, false, { fileName: _jsxFileName, lineNumber: 122, columnNumber: 19 }, this));
            }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 113, columnNumber: 13 }, this));
    };
    return Icon;
}
exports.createIcomoonIconSet = createIcomoonIconSet;
//# sourceMappingURL=createIconSet.js.map