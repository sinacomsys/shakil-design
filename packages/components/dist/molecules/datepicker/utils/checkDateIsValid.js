import moment from "moment-jalaali";
export var checkIsDateValid = function (date) {
    try {
        return moment(date, "jYYYY/jMM/jDD").isValid();
    }
    catch (_a) {
        return false;
    }
};
//# sourceMappingURL=checkDateIsValid.js.map