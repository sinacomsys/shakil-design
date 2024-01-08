"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInclude = void 0;
var isInclude = function (a, b) {
    var _a;
    return a === null || a === void 0 ? void 0 : a.toLowerCase().includes(((_a = (b || "")) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || "");
};
exports.isInclude = isInclude;
//# sourceMappingURL=isInclude.js.map