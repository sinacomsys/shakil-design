"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconTemplate = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/baseIcon/createIconSet.tsx";
var react_1 = require("react");
var usehooks_ts_1 = require("usehooks-ts");
var src_1 = require("@shakil-design/utils/src");
var context_1 = require("../../theme/context");
// function isSingleObject(
//   color: IconTemplateProps["color"],
// ): color is { fill?: string; stroke?: string } {
//   return typeof color === "object" && ("fill" in color || "stroke" in color);
// }
// function isArrayOfObjects(
//   color: IconTemplateProps["color"],
// ): color is { fill?: string; stroke?: string }[] {
//   return (
//     Array.isArray(color) &&
//     //@ts-ignore
//     color.every(
//       //@ts-ignore
//       (obj) => obj instanceof Object && ("fill" in obj || "stroke" in obj),
//     )
//   );
// }
function IconTemplate(_a) {
    var _this = this;
    var iconsJson = _a.iconsJson, color = _a.color, props = __rest(_a, ["iconsJson", "color"]);
    var unit = (0, react_1.useContext)(context_1.UnitContext).unit;
    var _b = props.size, height = _b.height, width = _b.width;
    var windowHeight = (0, usehooks_ts_1.useWindowSize)().height;
    var vh = windowHeight / 100;
    var realWidth = null;
    var realHeight = null;
    if (unit === "pixel") {
        realWidth = width;
        realHeight = height;
    }
    else if (unit === "viewport") {
        realWidth = Math.ceil((0, src_1.pxToVh)(width) * vh);
        realHeight = Math.ceil((0, src_1.pxToVh)(height) * vh);
    }
    var viewBox = "0 0 1024 1024";
    if (realWidth && realHeight && realWidth > realHeight) {
        var ratio = realHeight / realWidth;
        var viewPortH = ratio * iconsJson.height;
        var viewPortW = iconsJson.height;
        var viewPortX = 0;
        var viewPortY = viewPortW - viewPortH;
        viewBox = "".concat(viewPortX, " ").concat(viewPortY / 2, " ").concat(viewPortW, " ").concat(viewPortH);
    }
    else if (realWidth && realHeight && realWidth < realHeight) {
        var ratio = realWidth / realHeight;
        var viewPortW = ratio * iconsJson.height;
        var viewPortH = iconsJson.height;
        var viewPortY = 0;
        var viewPortX = viewPortH - viewPortW;
        viewBox = "".concat(viewPortX / 2, " ").concat(viewPortY, " ").concat(viewPortW, " ").concat(viewPortH);
    }
    var glyph = props.name
        ? iconsJson.icons.find(function (_a) {
            var properties = _a.properties;
            return properties.name === props.name;
        })
        : null;
    return ((0, jsx_dev_runtime_1.jsxDEV)("svg", __assign({ viewBox: viewBox, fill: "none", width: realWidth || 0, height: realHeight || 0 }, { children: (glyph === null || glyph === void 0 ? void 0 : glyph.icon.paths).map(function (d, index) {
            return ((0, jsx_dev_runtime_1.jsxDEV)("path", __assign({ d: d }, glyph === null || glyph === void 0 ? void 0 : glyph.attrs[index], { 
                //@ts-ignore
                fill: Array.isArray(color)
                    ? color[index]
                    : color || (glyph === null || glyph === void 0 ? void 0 : glyph.attrs[index].fill) }), index, false, { fileName: _jsxFileName, lineNumber: 152, columnNumber: 17 }, _this));
        }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 144, columnNumber: 11 }, this));
}
exports.IconTemplate = IconTemplate;
//# sourceMappingURL=createIconSet.js.map