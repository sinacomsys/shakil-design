var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react-jss", "@shakil-design/asset/src/fonts/FiraGO-Bold.ttf", "@shakil-design/asset/src/fonts/FiraGO-BoldItalic.ttf", "@shakil-design/asset/src/fonts/FiraGO-Book.ttf", "@shakil-design/asset/src/fonts/FiraGO-BookItalic.ttf", "@shakil-design/asset/src/fonts/FiraGO-Eight.ttf", "@shakil-design/asset/src/fonts/FiraGO-EightItalic.ttf", "@shakil-design/asset/src/fonts/FiraGO-Four.ttf", "@shakil-design/asset/src/fonts/FiraGO-FourItalic.ttf", "@shakil-design/asset/src/fonts/FiraGO-Hair.ttf", "@shakil-design/asset/src/fonts/FiraGO-HairItalic.ttf", "@shakil-design/asset/src/fonts/FiraGO-HeavyItalic.ttf", "@shakil-design/asset/src/fonts/FiraGO-Italic.ttf", "@shakil-design/asset/src/fonts/FiraGO-Light.ttf", "@shakil-design/asset/src/fonts/FiraGO-LightItalic.ttf", "@shakil-design/asset/src/fonts/FiraGO-Medium.ttf", "@shakil-design/asset/src/fonts/FiraGO-MediumItalic.ttf", "@shakil-design/asset/src/fonts/FiraGO-Regular.ttf", "@shakil-design/asset/src/fonts/FiraGO-SemiBold.ttf", "@shakil-design/asset/src/fonts/FiraGO-SemiBoldItalic.ttf", "@shakil-design/asset/src/fonts/FiraGO-Thin.ttf", "@shakil-design/asset/src/fonts/FiraGO-ThinItalic.ttf", "@shakil-design/asset/src/fonts/FiraGO-Two.ttf", "@shakil-design/asset/src/fonts/FiraGO-TwoItalic.ttf", "@shakil-design/asset/src/fonts/FiraGO-UltraLight.ttf"], function (require, exports, react_jss_1, FiraGO_Bold_ttf_1, FiraGO_BoldItalic_ttf_1, FiraGO_Book_ttf_1, FiraGO_BookItalic_ttf_1, FiraGO_Eight_ttf_1, FiraGO_EightItalic_ttf_1, FiraGO_Four_ttf_1, FiraGO_FourItalic_ttf_1, FiraGO_Hair_ttf_1, FiraGO_HairItalic_ttf_1, FiraGO_HeavyItalic_ttf_1, FiraGO_Italic_ttf_1, FiraGO_Light_ttf_1, FiraGO_LightItalic_ttf_1, FiraGO_Medium_ttf_1, FiraGO_MediumItalic_ttf_1, FiraGO_Regular_ttf_1, FiraGO_SemiBold_ttf_1, FiraGO_SemiBoldItalic_ttf_1, FiraGO_Thin_ttf_1, FiraGO_ThinItalic_ttf_1, FiraGO_Two_ttf_1, FiraGO_TwoItalic_ttf_1, FiraGO_UltraLight_ttf_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useFonts = exports.fonts = exports.fontSizes = exports.fontWeights = exports.FiraBold = void 0;
    FiraGO_Bold_ttf_1 = __importDefault(FiraGO_Bold_ttf_1);
    FiraGO_BoldItalic_ttf_1 = __importDefault(FiraGO_BoldItalic_ttf_1);
    FiraGO_Book_ttf_1 = __importDefault(FiraGO_Book_ttf_1);
    FiraGO_BookItalic_ttf_1 = __importDefault(FiraGO_BookItalic_ttf_1);
    FiraGO_Eight_ttf_1 = __importDefault(FiraGO_Eight_ttf_1);
    FiraGO_EightItalic_ttf_1 = __importDefault(FiraGO_EightItalic_ttf_1);
    FiraGO_Four_ttf_1 = __importDefault(FiraGO_Four_ttf_1);
    FiraGO_FourItalic_ttf_1 = __importDefault(FiraGO_FourItalic_ttf_1);
    FiraGO_Hair_ttf_1 = __importDefault(FiraGO_Hair_ttf_1);
    FiraGO_HairItalic_ttf_1 = __importDefault(FiraGO_HairItalic_ttf_1);
    FiraGO_HeavyItalic_ttf_1 = __importDefault(FiraGO_HeavyItalic_ttf_1);
    FiraGO_Italic_ttf_1 = __importDefault(FiraGO_Italic_ttf_1);
    FiraGO_Light_ttf_1 = __importDefault(FiraGO_Light_ttf_1);
    FiraGO_LightItalic_ttf_1 = __importDefault(FiraGO_LightItalic_ttf_1);
    FiraGO_Medium_ttf_1 = __importDefault(FiraGO_Medium_ttf_1);
    FiraGO_MediumItalic_ttf_1 = __importDefault(FiraGO_MediumItalic_ttf_1);
    FiraGO_Regular_ttf_1 = __importDefault(FiraGO_Regular_ttf_1);
    FiraGO_SemiBold_ttf_1 = __importDefault(FiraGO_SemiBold_ttf_1);
    FiraGO_SemiBoldItalic_ttf_1 = __importDefault(FiraGO_SemiBoldItalic_ttf_1);
    FiraGO_Thin_ttf_1 = __importDefault(FiraGO_Thin_ttf_1);
    FiraGO_ThinItalic_ttf_1 = __importDefault(FiraGO_ThinItalic_ttf_1);
    FiraGO_Two_ttf_1 = __importDefault(FiraGO_Two_ttf_1);
    FiraGO_TwoItalic_ttf_1 = __importDefault(FiraGO_TwoItalic_ttf_1);
    FiraGO_UltraLight_ttf_1 = __importDefault(FiraGO_UltraLight_ttf_1);
    exports.FiraBold = FiraGO_Bold_ttf_1.default;
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
    let _useFonts;
    const useFonts = () => {
        if (!_useFonts) {
            _useFonts = (0, react_jss_1.createUseStyles)(Object.assign(Object.assign({}, Object.fromEntries(Object.entries(exports.fonts).map(([key, { name }]) => [
                key,
                {
                    fontFamily: name,
                },
            ]))), { ["@font-face"]: Object.values(exports.fonts).map(({ format, name, url }) => ({
                    fontFamily: name,
                    src: `url(${url}) format('${format}')`,
                })) }), { name: "text" });
        }
        return _useFonts();
    };
    exports.useFonts = useFonts;
});
//# sourceMappingURL=style.js.map