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
import { createUseStyles } from "react-jss";
import FiraBold from "@shakil-design/asset/src/fonts/FiraGO-Bold.ttf";
import FiraBoldItalic from "@shakil-design/asset/src/fonts/FiraGO-BoldItalic.ttf";
import FiroGoBook from "@shakil-design/asset/src/fonts/FiraGO-Book.ttf";
import FiroGoBookItalic from "@shakil-design/asset/src/fonts/FiraGO-BookItalic.ttf";
import FiraGOEight from "@shakil-design/asset/src/fonts/FiraGO-Eight.ttf";
import FiraGOEightItalic from "@shakil-design/asset/src/fonts/FiraGO-EightItalic.ttf";
import FiraGOFour from "@shakil-design/asset/src/fonts/FiraGO-Four.ttf";
import FiraGOFourItalic from "@shakil-design/asset/src/fonts/FiraGO-FourItalic.ttf";
import FiraGOHair from "@shakil-design/asset/src/fonts/FiraGO-Hair.ttf";
import FiraGOHairItalic from "@shakil-design/asset/src/fonts/FiraGO-HairItalic.ttf";
import FiraGOHeavyItalic from "@shakil-design/asset/src/fonts/FiraGO-HeavyItalic.ttf";
import FiraGOItalic from "@shakil-design/asset/src/fonts/FiraGO-Italic.ttf";
import FiraGOLight from "@shakil-design/asset/src/fonts/FiraGO-Light.ttf";
import FiraGOLightItalic from "@shakil-design/asset/src/fonts/FiraGO-LightItalic.ttf";
import FiraGOMedium from "@shakil-design/asset/src/fonts/FiraGO-Medium.ttf";
import FiraGOMediumItalic from "@shakil-design/asset/src/fonts/FiraGO-MediumItalic.ttf";
import FiraGORegular from "@shakil-design/asset/src/fonts/FiraGO-Regular.ttf";
import FiraGOSemiBold from "@shakil-design/asset/src/fonts/FiraGO-SemiBold.ttf";
import FiraGOSemiBoldItalic from "@shakil-design/asset/src/fonts/FiraGO-SemiBoldItalic.ttf";
import FiraGOThin from "@shakil-design/asset/src/fonts/FiraGO-Thin.ttf";
import FiraGOThinItalic from "@shakil-design/asset/src/fonts/FiraGO-ThinItalic.ttf";
import FiraGOTwo from "@shakil-design/asset/src/fonts/FiraGO-Two.ttf";
import FiraGOTwoItalic from "@shakil-design/asset/src/fonts/FiraGO-TwoItalic.ttf";
import FiraGOUltraLight from "@shakil-design/asset/src/fonts/FiraGO-UltraLight.ttf";
export { FiraBold };
export var fontWeights = {
    light: 100,
    regular: 400,
    medium: 500,
    bold: 700,
};
export var fontSizes = {
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
export var fonts = {
    bold: {
        name: "FiraBold",
        url: FiraBold,
        format: "truetype",
    },
    BoldItalic: {
        name: "FiraBoldItalic",
        url: FiraBoldItalic,
        format: "truetype",
    },
    Book: {
        name: "FiroGoBook",
        url: FiroGoBook,
        format: "truetype",
    },
    BookItalic: {
        name: "FiroGoBookItalic",
        url: FiroGoBookItalic,
        format: "truetype",
    },
    Eight: {
        name: "FiraGOEight",
        url: FiraGOEight,
        format: "truetype",
    },
    EightItalic: {
        name: "FiraGOEightItalic",
        url: FiraGOEightItalic,
        format: "truetype",
    },
    Four: {
        name: "FiraGOFour",
        url: FiraGOFour,
        format: "truetype",
    },
    FourItalic: {
        name: "FiraGOFourItalic",
        url: FiraGOFourItalic,
        format: "truetype",
    },
    Hair: {
        name: "FiraGOHair",
        url: FiraGOHair,
        format: "truetype",
    },
    HairItalic: {
        name: "FiraGOHairItalic",
        url: FiraGOHairItalic,
        format: "truetype",
    },
    HeavyItalic: {
        name: "FiraGOHeavyItalic",
        url: FiraGOHeavyItalic,
        format: "truetype",
    },
    Italic: {
        name: "FiraGOItalic",
        url: FiraGOItalic,
        format: "truetype",
    },
    Light: {
        name: "FiraGOLight",
        url: FiraGOLight,
        format: "truetype",
    },
    LightItalic: {
        name: "FiraGOLightItalic",
        url: FiraGOLightItalic,
        format: "truetype",
    },
    Medium: {
        name: "FiraGOMedium",
        url: FiraGOMedium,
        format: "truetype",
    },
    MediumItalic: {
        name: "FiraGOMediumItalic",
        url: FiraGOMediumItalic,
        format: "truetype",
    },
    Regular: {
        name: "FiraGORegular",
        url: FiraGORegular,
        format: "truetype",
    },
    SemiBold: {
        name: "FiraGOSemiBold",
        url: FiraGOSemiBold,
        format: "truetype",
    },
    SemiBoldItalic: {
        name: "FiraGOSemiBoldItalic",
        url: FiraGOSemiBoldItalic,
        format: "truetype",
    },
    Thin: {
        name: "FiraGOThin",
        url: FiraGOThin,
        format: "truetype",
    },
    ThinItalic: {
        name: "FiraGOThinItalic",
        url: FiraGOThinItalic,
        format: "truetype",
    },
    Two: {
        name: "FiraGOTwo",
        url: FiraGOTwo,
        format: "truetype",
    },
    TwoItalic: {
        name: "FiraGOTwoItalic",
        url: FiraGOTwoItalic,
        format: "truetype",
    },
    UltraLight: {
        name: "FiraGOUltraLight",
        url: FiraGOUltraLight,
        format: "truetype",
    },
};
var _useFonts;
var useFonts = function () {
    var _a;
    if (!_useFonts) {
        _useFonts = createUseStyles(__assign(__assign({}, Object.fromEntries(Object.entries(fonts).map(function (_a) {
            var key = _a[0], name = _a[1].name;
            return [
                key,
                {
                    fontFamily: name,
                },
            ];
        }))), (_a = {}, _a["@font-face"] = Object.values(fonts).map(function (_a) {
            var format = _a.format, name = _a.name, url = _a.url;
            return ({
                fontFamily: name,
                src: "url(".concat(url, ") format('").concat(format, "')"),
            });
        }), _a)), { name: "text" });
    }
    return _useFonts();
};
export { useFonts };
//# sourceMappingURL=style.js.map