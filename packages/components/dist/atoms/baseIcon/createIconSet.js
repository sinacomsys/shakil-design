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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIcomoonIconSet = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/baseIcon/createIconSet.tsx";
var react_1 = require("react");
var usehooks_ts_1 = require("usehooks-ts");
var utils_1 = require("@shakil-design/utils");
var context_1 = require("../../theme/context");
function createIcomoonIconSet(glyphMap) {
    var _this = this;
    var Icon = function (props) {
        var _a;
        var unit = (0, react_1.useContext)(context_1.UnitContext).unit;
        var _b = props.size, height = _b.height, width = _b.width;
        var windowHeight = (0, usehooks_ts_1.useWindowSize)().height;
        var vh = windowHeight / 100;
        var _unit = (_a = props.unit) !== null && _a !== void 0 ? _a : unit;
        var realWidth = null;
        var realHeight = null;
        if (_unit === "pixel") {
            realWidth = width;
            realHeight = height;
        }
        else if (_unit === "viewport") {
            realWidth = (0, utils_1.pxToVh)(width) * vh;
            realHeight = (0, utils_1.pxToVh)(height) * vh;
        }
        var viewBox = "0 0 1024 1024";
        if (realWidth && realHeight && realWidth > realHeight) {
            var ratio = realHeight / realWidth;
            var viewPortH = ratio * glyphMap.height;
            var viewPortW = glyphMap.height;
            var viewPortX = 0;
            var viewPortY = viewPortW - viewPortH;
            viewBox = "".concat(viewPortX, " ").concat(viewPortY / 2, " ").concat(viewPortW, " ").concat(viewPortH);
        }
        else if (realWidth && realHeight && realWidth < realHeight) {
            var ratio = realWidth / realHeight;
            var viewPortW = ratio * glyphMap.height;
            var viewPortH = glyphMap.height;
            var viewPortY = 0;
            var viewPortX = viewPortH - viewPortW;
            viewBox = "".concat(viewPortX / 2, " ").concat(viewPortY, " ").concat(viewPortW, " ").concat(viewPortH);
        }
        var glyph = props.name
            ? glyphMap.icons.find(function (_a) {
                var properties = _a.properties;
                return properties.name === props.name;
            })
            : null;
        return ((0, jsx_dev_runtime_1.jsxDEV)("svg", __assign({ 
            // xmlns="http://www.w3.org/2000/svg"
            viewBox: viewBox, fill: "none", width: realWidth || 0, height: realHeight || 0 }, { children: (glyph === null || glyph === void 0 ? void 0 : glyph.icon.paths).map(function (d, index) {
                return ((0, jsx_dev_runtime_1.jsxDEV)("path", __assign({ d: d }, glyph === null || glyph === void 0 ? void 0 : glyph.attrs[index], { fill: Array.isArray(props.color)
                        ? props.color[index]
                        : props.color || (glyph === null || glyph === void 0 ? void 0 : glyph.attrs[index].fill) }), index, false, { fileName: _jsxFileName, lineNumber: 126, columnNumber: 19 }, _this));
            }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 117, columnNumber: 13 }, _this));
    };
    return Icon;
}
exports.createIcomoonIconSet = createIcomoonIconSet;
//# sourceMappingURL=createIconSet.js.map