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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.theming = exports.ThemeProvider = exports.rest = exports.ShakilDesignThemeProvider = exports.UnitContext = exports.Colors = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/theme/context.tsx";
var utils_1 = require("@shakil-design/utils");
var react_1 = __importDefault(require("react"));
var react_jss_1 = require("react-jss");
var xAxis = ["inline", "width", "left", "right"];
var yAxis = ["block", "height", "top", "bottm"];
var bothAxis = ["margin", "padding", "border"];
var isInclude = function (a, b) {
    var _a;
    return a === null || a === void 0 ? void 0 : a.toLowerCase().includes(((_a = (b || "")) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || "");
};
var findAxis = function (value) {
    var isXAxis = xAxis.find(function (item) {
        return isInclude(value, item);
    });
    var isYAxis = yAxis.find(function (item) {
        return isInclude(value, item);
    });
    var both = bothAxis.find(function (item) {
        return isInclude(value, item);
    });
    if (isXAxis)
        return "x";
    else if (isYAxis)
        return "y";
    else if (both)
        return "both";
};
var convertXaxis = function (value) {
    if (isInclude(value, "important")) {
        return value;
    }
    else if (isInclude(value, "calc")) {
        return value;
    }
    return value
        .split(" ")
        .map(function (i) {
        if (isInclude(i, "px")) {
            return " ".concat((0, utils_1.pxToVwString)(parseInt(i, 10)));
        }
        return i;
    })
        .join(" ");
};
var convertYaxis = function (value) {
    if (isInclude(value, "important")) {
        return value;
    }
    else if (isInclude(value, "calc")) {
        return value;
    }
    return value
        .split(" ")
        .map(function (i) {
        if (isInclude(i, "px")) {
            return "".concat(parseInt(i, 10) / 10.8, "vh");
        }
        return i;
    })
        .join(" ");
};
var convertBothAxis = function (value) {
    var splited = value.split(" ");
    var lenght = splited.length;
    if (lenght === 1 && isInclude(value, "px")) {
        return "".concat((0, utils_1.pxToVhString)(parseInt(value)));
    }
    else if (lenght === 2) {
        var first = isInclude(splited[0], "px")
            ? "".concat((0, utils_1.pxToVhString)(parseInt(splited[0])))
            : splited[0];
        var second = isInclude(splited[1], "px")
            ? "".concat((0, utils_1.pxToVwString)(parseInt(splited[1])))
            : splited[1];
        return "".concat(first, " ").concat(second);
    }
    else if (lenght === 3) {
        var first = isInclude(splited[0], "px")
            ? "".concat((0, utils_1.pxToVhString)(parseInt(splited[0])))
            : splited[0];
        var second = isInclude(splited[1], "px")
            ? "".concat((0, utils_1.pxToVwString)(parseInt(splited[1])))
            : splited[1];
        var third = isInclude(splited[2], "px")
            ? "".concat((0, utils_1.pxToVhString)(parseInt(splited[2])))
            : splited[2];
        return "".concat(first, " ").concat(second, " ").concat(third);
    }
    else if (lenght === 4) {
        var first = isInclude(splited[0], "px")
            ? "".concat((0, utils_1.pxToVhString)(parseInt(splited[0])))
            : splited[0];
        var second = isInclude(splited[1], "px")
            ? "".concat((0, utils_1.pxToVwString)(parseInt(splited[1])))
            : splited[1];
        var third = isInclude(splited[2], "px")
            ? "".concat((0, utils_1.pxToVhString)(parseInt(splited[2])))
            : splited[2];
        var forth = isInclude(splited[3], "px")
            ? "".concat((0, utils_1.pxToVhString)(parseInt(splited[3])))
            : splited[3];
        return "".concat(first, " ").concat(second, " ").concat(third, " ").concat(forth);
    }
};
var convertPxToVp = function (style) {
    if (Array.isArray(style)) {
        return style.map(function (i) { return convertPxToVp(i); });
    }
    for (var property in style) {
        var axis = findAxis(property);
        var propertyValue = style[property];
        if (!isInclude(propertyValue, "px")) {
            continue;
        }
        else if (axis === "x") {
            style[property] = convertXaxis(propertyValue);
        }
        else if (axis === "y") {
            style[property] = convertYaxis(propertyValue);
        }
        else if (axis === "both") {
            style[property] = convertBothAxis(propertyValue);
        }
        else if (property === "font-size") {
            var isInPxUnit = isInclude(propertyValue, "px");
            style[property] = isInPxUnit
                ? "".concat((0, utils_1.pxToVhString)(parseInt(propertyValue)))
                : propertyValue;
        }
    }
    return style;
};
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
        clearFilterIcon: "#ffffff",
        rowBorder: "#eeeeee",
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
// Creating a namespaced theming object.
var theming = (0, react_jss_1.createTheming)(ThemeContext);
exports.theming = theming;
var ThemeProvider = theming.ThemeProvider, rest = __rest(theming, ["ThemeProvider"]);
exports.ThemeProvider = ThemeProvider;
exports.rest = rest;
var ShakilDesignThemeProvider = function (_a) {
    var children = _a.children, colors = _a.colors, _b = _a.unit, unit = _b === void 0 ? "viewport" : _b;
    if (unit === "viewport") {
        react_jss_1.jss.use({
            onProcessStyle: convertPxToVp,
        });
    }
    return ((0, jsx_dev_runtime_1.jsxDEV)(react_jss_1.JssProvider, __assign({ generateId: function (rule, sheet) { var _a; return "shakil-".concat((_a = sheet === null || sheet === void 0 ? void 0 : sheet.options) === null || _a === void 0 ? void 0 : _a.classNamePrefix).concat(rule.key); } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(exports.UnitContext.Provider, __assign({ value: { unit: unit } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(ThemeProvider, __assign({ theme: colors }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 302, columnNumber: 9 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 301, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 295, columnNumber: 11 }, _this));
};
exports.ShakilDesignThemeProvider = ShakilDesignThemeProvider;
//# sourceMappingURL=context.js.map