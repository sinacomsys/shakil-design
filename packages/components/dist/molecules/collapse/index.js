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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/collapse/index.tsx";
import { useState } from 'react';
import { CollapseContext } from './context';
import { Panel } from './panel';
var Collapse = function (_a) {
    var children = _a.children, accordion = _a.accordion, onChange = _a.onChange, activeKey = _a.activeKey, defaultOpen = _a.defaultOpen;
    var _b = useState([]), openedPanels = _b[0], setOpenPanel = _b[1];
    var _openedPanels = [];
    if (activeKey) {
        _openedPanels = activeKey;
    }
    else {
        _openedPanels = openedPanels;
    }
    var handleDefaultOpen = function (id) {
        setOpenPanel(function (prev) { return __spreadArray(__spreadArray([], prev, true), [id], false); });
    };
    var handleOnClickPanel = function (id) {
        if (activeKey) {
            onChange === null || onChange === void 0 ? void 0 : onChange({ activePanelsKey: [id], clickedPanelKey: id });
            return;
        }
        var alreadyExist = openedPanels.find(function (item) { return item === id; });
        var _openedPanels = [];
        if (!accordion) {
            if (alreadyExist) {
                _openedPanels = openedPanels.filter(function (item) { return item !== alreadyExist; });
                setOpenPanel(_openedPanels);
            }
            else if (!alreadyExist) {
                _openedPanels = __spreadArray(__spreadArray([], openedPanels, true), [id], false);
                setOpenPanel(_openedPanels);
            }
        }
        else if (accordion) {
            _openedPanels = alreadyExist ? [] : [id];
            setOpenPanel(_openedPanels);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange({ activePanelsKey: _openedPanels, clickedPanelKey: id });
    };
    return (_jsxDEV(CollapseContext.Provider, __assign({ value: {
            onClickPanel: handleOnClickPanel,
            openedPanels: _openedPanels,
            defaultOpen: defaultOpen || false,
            handleDefaultOpen: handleDefaultOpen,
        } }, { children: _jsxDEV("div", { children: children }, void 0, false, { fileName: _jsxFileName, lineNumber: 69, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 60, columnNumber: 11 }, _this));
};
Collapse.Panel = Panel;
export { Collapse };
//# sourceMappingURL=index.js.map