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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react/jsx-dev-runtime", "react", "react-jss"], function (require, exports, jsx_dev_runtime_1, react_1, react_jss_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.theming = exports.ThemeProvider = exports.rest = exports.ShakilDesignThemeProvider = exports.Colors = void 0;
    react_1 = __importDefault(react_1);
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/theme/context.tsx";
    exports.Colors = {
        primary: "#374775",
        checkbox: {
            borderSelected: "#374775",
            squareSelected: "#58cc87",
            unselectedBorder: "#8e8e8e",
            unselectedSquare: "#e9e9e9",
            deactive: "#b4b4b4",
        },
        radio: {
            enableInnerCircleSelected: "#58cc87",
            enableInnerCircleUnselected: "#E9E9E9",
            enableStroke: "#374775",
            disableInnerCircleSelected: "#b4b4b4",
            disableInnerCricleUnselected: "#e9e9e9",
            disableStroke: "#8e8e8e",
        },
        textInput: {
            fieldColor: "#ebedf2",
        },
        button: {
            main: "#324775",
            danger: "#c65161",
            success: "#58cc87",
        },
        tab: {
            selectedTab: "#FFFFFF",
            textColor: "#6C7797",
            unSelectedTab: "#E3E6F1",
        },
        fileInput: "red",
        table: {
            header: "#374775",
            divider: "#c2c9db",
            filterIcon: "#48e580",
            filtersTab: "#6c7797",
            rowHover: "#ebedf2",
            selectedRow: "#e3f6eb",
            selectedRowBookmark: "#58cc87",
            sortArrow: "#48e580",
        },
        select: {
            hover: "#ebedf2",
            backgroundColor: "#ebedf2",
            selected: "#959db8",
            clearIcon: "#575757",
            fleshIcon: "#575757",
        },
        disableField: "#eeeeee",
        disableText: "#d1d1d1",
        tree: {
            dotLine: "#6c7797",
            activeItem: "#374775",
        },
        collapse: {
            panel: "red",
            openPanel: "blue",
            closePanel: "purple",
        },
        switch: {
            checked: "#58cc87",
            unchecked: "#ff8946",
        },
        noContent: "red",
    };
    const ThemeContext = react_1.default.createContext(exports.Colors);
    // Creating a namespaced theming object.
    const theming = (0, react_jss_1.createTheming)(ThemeContext);
    exports.theming = theming;
    const { ThemeProvider } = theming, rest = __rest(theming, ["ThemeProvider"]);
    exports.ThemeProvider = ThemeProvider;
    exports.rest = rest;
    const ShakilDesignThemeProvider = ({ children, colors, }) => {
        return ((0, jsx_dev_runtime_1.jsxDEV)(react_jss_1.JssProvider, Object.assign({ generateId: (rule, sheet) => { var _a; return `shakil-${(_a = sheet === null || sheet === void 0 ? void 0 : sheet.options) === null || _a === void 0 ? void 0 : _a.classNamePrefix}${rule.key}`; } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(ThemeProvider, Object.assign({ theme: colors }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 153, columnNumber: 7 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 147, columnNumber: 11 }, this));
    };
    exports.ShakilDesignThemeProvider = ShakilDesignThemeProvider;
});
//# sourceMappingURL=context.js.map