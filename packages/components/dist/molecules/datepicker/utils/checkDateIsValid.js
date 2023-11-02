var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "moment-jalaali"], function (require, exports, moment_jalaali_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.checkIsDateValid = void 0;
    moment_jalaali_1 = __importDefault(moment_jalaali_1);
    const checkIsDateValid = (date) => {
        try {
            return (0, moment_jalaali_1.default)(date, "jYYYY/jMM/jDD").isValid();
        }
        catch (_a) {
            return false;
        }
    };
    exports.checkIsDateValid = checkIsDateValid;
});
//# sourceMappingURL=checkDateIsValid.js.map