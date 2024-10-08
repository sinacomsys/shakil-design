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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.theming = exports.ThemeProvider = exports.rest = exports.ShakilDesignThemeProvider = exports.UnitContext = exports.Colors = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_jss_1 = require("react-jss");
var converPxToVp_1 = require("./converPxToVp");
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
        errorMessage: "#c65161",
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
        clearFilterIcon: "#ffffff",
        rowBorder: "#eeeeee",
        headerCheckBox: {
            borderSelected: "#ffffff",
            squareSelected: "#48e580",
            unselectedBorder: "#ffffff",
            unselectedSquare: "#959db8",
        },
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
var ThemeContext = react_1.default.createContext(exports.Colors);
exports.UnitContext = react_1.default.createContext({});
var theming = (0, react_jss_1.createTheming)(ThemeContext);
exports.theming = theming;
var ThemeProvider = theming.ThemeProvider, rest = __rest(theming, ["ThemeProvider"]);
exports.ThemeProvider = ThemeProvider;
exports.rest = rest;
var ShakilDesignThemeProvider = function (_a) {
    var children = _a.children, colors = _a.colors, _b = _a.unit, unit = _b === void 0 ? "viewport" : _b;
    if (unit === "viewport") {
        react_jss_1.jss.use({
            onProcessStyle: converPxToVp_1.convertPxToVp,
        });
    }
    return ((0, jsx_runtime_1.jsx)(react_jss_1.JssProvider, __assign({ generateId: function (rule, sheet) { var _a; return "shakil-".concat((_a = sheet === null || sheet === void 0 ? void 0 : sheet.options) === null || _a === void 0 ? void 0 : _a.classNamePrefix).concat(rule.key); } }, { children: (0, jsx_runtime_1.jsx)(exports.UnitContext.Provider, __assign({ value: { unit: unit } }, { children: (0, jsx_runtime_1.jsx)(ThemeProvider, __assign({ theme: colors }, { children: children })) })) })));
};
exports.ShakilDesignThemeProvider = ShakilDesignThemeProvider;
//# sourceMappingURL=context.js.map