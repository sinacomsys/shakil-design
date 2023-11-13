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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = exports.useFonts = exports.fonts = exports.fontSizes = exports.fontWeights = void 0;
var react_jss_1 = require("react-jss");
var FiraGO_Bold_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-Bold.ttf"));
var FiraGO_BoldItalic_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-BoldItalic.ttf"));
var FiraGO_Book_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-Book.ttf"));
var FiraGO_BookItalic_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-BookItalic.ttf"));
var FiraGO_Eight_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-Eight.ttf"));
var FiraGO_EightItalic_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-EightItalic.ttf"));
var FiraGO_Four_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-Four.ttf"));
var FiraGO_FourItalic_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-FourItalic.ttf"));
var FiraGO_Hair_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-Hair.ttf"));
var FiraGO_HairItalic_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-HairItalic.ttf"));
var FiraGO_HeavyItalic_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-HeavyItalic.ttf"));
var FiraGO_Italic_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-Italic.ttf"));
var FiraGO_Light_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-Light.ttf"));
var FiraGO_LightItalic_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-LightItalic.ttf"));
var FiraGO_Medium_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-Medium.ttf"));
var FiraGO_MediumItalic_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-MediumItalic.ttf"));
var FiraGO_Regular_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-Regular.ttf"));
var FiraGO_SemiBold_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-SemiBold.ttf"));
var FiraGO_SemiBoldItalic_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-SemiBoldItalic.ttf"));
var FiraGO_Thin_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-Thin.ttf"));
var FiraGO_ThinItalic_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-ThinItalic.ttf"));
var FiraGO_Two_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-Two.ttf"));
var FiraGO_TwoItalic_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-TwoItalic.ttf"));
var FiraGO_UltraLight_ttf_1 = __importDefault(require("@shakil-design/asset/src/fonts/FiraGO-UltraLight.ttf"));
var theme_1 = require("../../theme");
exports.fontWeights = {
    light: 100,
    regular: 400,
    medium: 500,
    bold: 700,
};
exports.fontSizes = {
    xxsmall: 10,
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 18,
    xlarge: 20,
    xxlarge: 22,
    h1: 32,
    h2: 24,
    h3: 18.7,
    h4: 16,
    h5: 13.2,
    h6: 10.7,
};
/** Change font before run any component */
exports.fonts = {
    bold: {
        name: "FiraBold",
        url: FiraGO_Bold_ttf_1.default,
        format: "truetype",
    },
    BoldItalic: {
        name: "FiraBoldItalic",
        url: FiraGO_BoldItalic_ttf_1.default,
        format: "truetype",
    },
    Book: {
        name: "FiroGoBook",
        url: FiraGO_Book_ttf_1.default,
        format: "truetype",
    },
    BookItalic: {
        name: "FiroGoBookItalic",
        url: FiraGO_BookItalic_ttf_1.default,
        format: "truetype",
    },
    Eight: {
        name: "FiraGOEight",
        url: FiraGO_Eight_ttf_1.default,
        format: "truetype",
    },
    EightItalic: {
        name: "FiraGOEightItalic",
        url: FiraGO_EightItalic_ttf_1.default,
        format: "truetype",
    },
    Four: {
        name: "FiraGOFour",
        url: FiraGO_Four_ttf_1.default,
        format: "truetype",
    },
    FourItalic: {
        name: "FiraGOFourItalic",
        url: FiraGO_FourItalic_ttf_1.default,
        format: "truetype",
    },
    Hair: {
        name: "FiraGOHair",
        url: FiraGO_Hair_ttf_1.default,
        format: "truetype",
    },
    HairItalic: {
        name: "FiraGOHairItalic",
        url: FiraGO_HairItalic_ttf_1.default,
        format: "truetype",
    },
    HeavyItalic: {
        name: "FiraGOHeavyItalic",
        url: FiraGO_HeavyItalic_ttf_1.default,
        format: "truetype",
    },
    Italic: {
        name: "FiraGOItalic",
        url: FiraGO_Italic_ttf_1.default,
        format: "truetype",
    },
    Light: {
        name: "FiraGOLight",
        url: FiraGO_Light_ttf_1.default,
        format: "truetype",
    },
    LightItalic: {
        name: "FiraGOLightItalic",
        url: FiraGO_LightItalic_ttf_1.default,
        format: "truetype",
    },
    Medium: {
        name: "FiraGOMedium",
        url: FiraGO_Medium_ttf_1.default,
        format: "truetype",
    },
    MediumItalic: {
        name: "FiraGOMediumItalic",
        url: FiraGO_MediumItalic_ttf_1.default,
        format: "truetype",
    },
    Regular: {
        name: "FiraGORegular",
        url: FiraGO_Regular_ttf_1.default,
        format: "truetype",
    },
    SemiBold: {
        name: "FiraGOSemiBold",
        url: FiraGO_SemiBold_ttf_1.default,
        format: "truetype",
    },
    SemiBoldItalic: {
        name: "FiraGOSemiBoldItalic",
        url: FiraGO_SemiBoldItalic_ttf_1.default,
        format: "truetype",
    },
    Thin: {
        name: "FiraGOThin",
        url: FiraGO_Thin_ttf_1.default,
        format: "truetype",
    },
    ThinItalic: {
        name: "FiraGOThinItalic",
        url: FiraGO_ThinItalic_ttf_1.default,
        format: "truetype",
    },
    Two: {
        name: "FiraGOTwo",
        url: FiraGO_Two_ttf_1.default,
        format: "truetype",
    },
    TwoItalic: {
        name: "FiraGOTwoItalic",
        url: FiraGO_TwoItalic_ttf_1.default,
        format: "truetype",
    },
    UltraLight: {
        name: "FiraGOUltraLight",
        url: FiraGO_UltraLight_ttf_1.default,
        format: "truetype",
    },
};
var _useFonts;
var useFonts = function () {
    var _a;
    if (!_useFonts) {
        _useFonts = (0, react_jss_1.createUseStyles)(__assign(__assign({}, Object.fromEntries(Object.entries(exports.fonts).map(function (_a) {
            var key = _a[0], name = _a[1].name;
            return [
                key,
                {
                    fontFamily: name,
                },
            ];
        }))), (_a = {}, _a["@font-face"] = Object.values(exports.fonts).map(function (_a) {
            var format = _a.format, name = _a.name, url = _a.url;
            return ({
                fontFamily: name,
                src: "url(".concat(url, ") format('").concat(format, "')"),
            });
        }), _a)), { name: "base-text" });
    }
    return _useFonts();
};
exports.useFonts = useFonts;
var useStyles = (0, react_jss_1.createUseStyles)(function () {
    return {
        text: function (size) { return ({
            fontSize: size || 16,
        }); },
    };
}, { theming: theme_1.theming, name: "font" });
exports.useStyles = useStyles;
//# sourceMappingURL=style.js.map