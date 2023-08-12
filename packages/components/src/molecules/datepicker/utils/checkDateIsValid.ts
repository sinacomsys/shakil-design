import moment from "moment-jalaali";

export const checkIsDateValid = (date: string) => {
  try {
    return moment(date, "jYYYY/jMM/jDD").isValid();
  } catch {
    return false;
  }
};
