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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/button/index.tsx";
import classNames from "classnames";
import _ from "lodash";
import React, { useMemo, useState } from "react";
import { Spinner } from "../../atoms";
import { Text } from "../../atoms/text";
import { useTheme } from "../../theme";
import { useStyles } from "./style";
import { pxToVh } from "@shakil-design/utils";
var Button = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.mode, mode = _b === void 0 ? "main" : _b, _c = _a.htmlType, htmlType = _c === void 0 ? "button" : _c, form = _a.form, className = _a.className, isLoading = _a.isLoading, disabled = _a.disabled, onClick = _a.onClick, _d = _a.unit, unit = _d === void 0 ? "pixel" : _d, size = _a.size, ghost = _a.ghost, rest = __rest(_a, ["children", "mode", "htmlType", "form", "className", "isLoading", "disabled", "onClick", "unit", "size", "ghost"]);
    var _e = useTheme().button, _f = _e === void 0 ? {} : _e, dangerColor = _f.danger, mainColor = _f.main, successColor = _f.success;
    var classes = useStyles();
    var _g = useState([]), ripples = _g[0], setRipples = _g[1];
    var showRipple = function (e) {
        if (isLoading)
            return;
        var rippleContainer = e.currentTarget;
        var size = rippleContainer.offsetWidth;
        var pos = rippleContainer.getBoundingClientRect();
        var x = e.pageX - pos.x - size / 2;
        var y = e.pageY - pos.y - size / 2;
        var spanStyles = {
            top: y + "px",
            left: x + "px",
            height: size + "px",
            width: size + "px",
            id: Date.now(),
        };
        setRipples(function (prev) {
            return __spreadArray(__spreadArray([], prev, true), [spanStyles], false);
        });
    };
    var handleOnClick = function (e) {
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    var renderRipple = function () {
        if (ripples.length > 0) {
            return ripples.map(function (_a) {
                var id = _a.id, rest = __rest(_a, ["id"]);
                return (_jsxDEV("span", { style: __assign({}, rest), className: classes["ripple"] }, id, false, { fileName: _jsxFileName, lineNumber: 91, columnNumber: 19 }, _this));
            });
        }
    };
    var onDebounce = useMemo(function () {
        return _.debounce(function () {
            setRipples([]);
        }, 1000);
    }, []);
    var height = size === "small" ? 32 : 40;
    var fontSize = unit === "viewport" ? "".concat(pxToVh(16), "vh") : 16;
    var isMainGhost = ghost && mode === "main";
    var isSuccessGhost = ghost && mode === "success";
    var isDangerGhost = ghost && mode === "danger";
    var spinnerColor = isMainGhost
        ? mainColor
        : isSuccessGhost
            ? successColor
            : isDangerGhost
                ? dangerColor
                : "black";
    return (_jsxDEV("button", __assign({}, rest, { style: __assign(__assign({}, rest.style), { height: unit === "viewport" ? "".concat(pxToVh(height), "vh") : height, cursor: disabled || isLoading ? "not-allowed" : "pointer" }), ref: ref, form: form, type: htmlType, onMouseDown: showRipple, onMouseUp: onDebounce, onClick: handleOnClick, disabled: disabled || isLoading, className: classNames(classes["button"], mode === "main" && classes["buttonMain"], mode === "success" && classes["buttonSuccess"], mode === "danger" && classes["buttonDanger"], isMainGhost && classes["ghostMain"], isSuccessGhost && classes["ghostSuccess"], isDangerGhost && classes["ghostDanger"], className) }, { children: [_jsxDEV("div", __assign({ className: classes["textContainer"], style: {
                    visibility: isLoading ? "hidden" : "visible",
                } }, { children: typeof children !== "object" ? (_jsxDEV(Text, __assign({ style: { color: "inherit" }, size: fontSize }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 153, columnNumber: 44 }, _this)) : (children) }), void 0, false, { fileName: _jsxFileName, lineNumber: 147, columnNumber: 9 }, _this), isLoading ? (_jsxDEV("div", __assign({ className: classes["loadingContainer"] }, { children: _jsxDEV(Spinner, { spinerColor: spinnerColor, size: "medium" }, void 0, false, { fileName: _jsxFileName, lineNumber: 163, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 161, columnNumber: 23 }, _this)) : null, (isLoading || disabled) && _jsxDEV("div", { className: classes["cover"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 166, columnNumber: 36 }, _this), renderRipple()] }), void 0, true, { fileName: _jsxFileName, lineNumber: 121, columnNumber: 13 }, _this));
});
Button.displayName = "Button";
export { Button };
//# sourceMappingURL=index.js.map