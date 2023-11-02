define(["require", "exports", "react"], function (require, exports, react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const useFileInput = (register) => {
        const [label, setLabel] = (0, react_1.useState)(null);
        const fileChangeHandler = (event) => {
            var _a;
            register === null || register === void 0 ? void 0 : register.onChange(event);
            if (!((_a = event.target.files) === null || _a === void 0 ? void 0 : _a.length)) {
                setLabel(null);
                return;
            }
            setLabel(event.target.files[0].name);
        };
        return { label, fileChangeHandler };
    };
    exports.default = useFileInput;
});
//# sourceMappingURL=useFileInput.js.map