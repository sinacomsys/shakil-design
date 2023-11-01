"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioContext = void 0;
var react_1 = require("react");
var initialValue = {
    value: undefined,
    onChange: function () { return ({}); },
    name: undefined,
    // mode: "light",
};
var RadioContext = (0, react_1.createContext)(initialValue);
exports.RadioContext = RadioContext;
//# sourceMappingURL=context.js.map