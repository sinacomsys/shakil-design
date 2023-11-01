"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsDateValid = void 0;
const moment_jalaali_1 = __importDefault(require("moment-jalaali"));
const checkIsDateValid = (date) => {
    try {
        return (0, moment_jalaali_1.default)(date, "jYYYY/jMM/jDD").isValid();
    }
    catch (_a) {
        return false;
    }
};
exports.checkIsDateValid = checkIsDateValid;
//# sourceMappingURL=checkDateIsValid.js.map