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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tabs/index.tsx";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { Text } from "../../atoms/text";
import { pxToVh, useHorizontalScroll } from "@shakil-design/utils";
import { InternalTabPane } from "./internalTabPane";
import { useStyles } from "./style";
import { useTheme } from "../../theme";
var Tabs = function (_a) {
    var activeTabProp = _a.activeTab, onChange = _a.onChange, onClose = _a.onClose, className = _a.className, TabsTitle = _a.TabsTitle, noContent = _a.noContent, items = _a.items;
    var classes = useStyles();
    var _b = useTheme().tab, _c = _b === void 0 ? {} : _b, textColor = _c.textColor;
    var _d = useState(null), activeTab = _d[0], setActiveTab = _d[1];
    var _e = useState([]), openedTabs = _e[0], setOpenedTabs = _e[1];
    var tabListRef = useHorizontalScroll();
    var handleOnChange = function (id) {
        onChange === null || onChange === void 0 ? void 0 : onChange(id);
        if (activeTabProp)
            return;
        setActiveTab(id);
    };
    var handleOnClose = function (id) {
        onClose === null || onClose === void 0 ? void 0 : onClose(id);
    };
    var _activeTab = null;
    if (activeTabProp) {
        _activeTab = activeTabProp;
    }
    else {
        _activeTab = activeTab;
    }
    useEffect(function () {
        if ((items === null || items === void 0 ? void 0 : items.length) > 0) {
            setActiveTab(items[0].id);
            setOpenedTabs(function () {
                return [items[0].id];
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(function () {
        if (activeTabProp) {
            setOpenedTabs(function (prev) {
                var alreadyExist = prev.find(function (item) { return item === activeTabProp; });
                if (alreadyExist)
                    return prev;
                return __spreadArray(__spreadArray([], prev, true), [activeTabProp], false);
            });
        }
    }, [activeTabProp]);
    return (_jsxDEV("div", __assign({ className: classNames(classes["tabs"], className) }, { children: [_jsxDEV("div", __assign({ className: classes["tabsContainer"] }, { children: [TabsTitle ? (_jsxDEV("div", __assign({ style: {
                            backgroundColor: "white",
                            borderTopLeftRadius: 20,
                        } }, { children: typeof TabsTitle === "string" ? (_jsxDEV("div", __assign({ className: classes["tabsTitle"] }, { children: _jsxDEV(Text, __assign({ theme: "Regular", size: "".concat(pxToVh(20), "vh"), color: textColor }, { children: TabsTitle }), void 0, false, { fileName: _jsxFileName, lineNumber: 90, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 88, columnNumber: 47 }, _this)) : typeof TabsTitle === "object" ? (TabsTitle) : null }), void 0, false, { fileName: _jsxFileName, lineNumber: 81, columnNumber: 23 }, _this)) : null, _jsxDEV("div", __assign({ ref: tabListRef, className: classes["tabsList"] }, { children: items === null || items === void 0 ? void 0 : items.map(function (_a) {
                            var id = _a.id, renderTitle = _a.renderTitle, closeable = _a.closeable;
                            var isActive = id === _activeTab;
                            return (_jsxDEV(InternalTabPane, { renderTitle: renderTitle, isActive: isActive, onClick: handleOnChange, id: id, onClose: handleOnClose, closable: Boolean(closeable) }, id, false, { fileName: _jsxFileName, lineNumber: 107, columnNumber: 21 }, _this));
                        }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 104, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 80, columnNumber: 7 }, _this), _jsxDEV("div", __assign({ className: classes["tabsContentContainer"] }, { children: noContent ? (_jsxDEV("div", __assign({ style: { height: "100%" } }, { children: noContent }), void 0, false, { fileName: _jsxFileName, lineNumber: 123, columnNumber: 23 }, _this)) : (openedTabs.map(function (_id) {
                    var tab = items === null || items === void 0 ? void 0 : items.find(function (_a) {
                        var id = _a.id;
                        return id === _id;
                    });
                    return (_jsxDEV("div", __assign({ style: {
                            display: (tab === null || tab === void 0 ? void 0 : tab.id) === _activeTab ? "block" : "none",
                            height: "100%",
                        } }, { children: tab === null || tab === void 0 ? void 0 : tab.content }), _id, false, { fileName: _jsxFileName, lineNumber: 128, columnNumber: 21 }, _this));
                })) }), void 0, false, { fileName: _jsxFileName, lineNumber: 122, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 78, columnNumber: 11 }, _this));
};
export { Tabs };
//# sourceMappingURL=index.js.map