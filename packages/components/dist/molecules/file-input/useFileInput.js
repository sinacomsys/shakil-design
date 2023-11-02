"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useFileInput = function (register) {
    var _a = (0, react_1.useState)(null), label = _a[0], setLabel = _a[1];
    var fileChangeHandler = function (event) {
        var _a;
        register === null || register === void 0 ? void 0 : register.onChange(event);
        if (!((_a = event.target.files) === null || _a === void 0 ? void 0 : _a.length)) {
            setLabel(null);
            return;
        }
        setLabel(event.target.files[0].name);
    };
    return { label: label, fileChangeHandler: fileChangeHandler };
};
exports.default = useFileInput;
//# sourceMappingURL=useFileInput.js.map