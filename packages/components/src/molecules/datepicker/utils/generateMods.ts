import {
  GREGORIAN_DAY_FORMAT,
  GREGORIAN_DAY_SHORT_FORMAT,
  GREGORIAN_FULL_DATE_FORMAT,
  GREGORIAN_FULL_TIME_FORMAT,
  GREGORIAN_MONTH,
  GREGORIAN_MONTH_NAME_FORMAT,
  GREGORIAN_MONTH_NUMBER_FORMAT,
  GREGORIAN_YEAR,
  GREGORIAN_YEAR_FORMAT,
  PERSIAN_DAY_FORMAT,
  PERSIAN_DAY_SHORT_FORMAT,
  PERSIAN_FULL_DATE_FORMAT,
  PERSIAN_FULL_TIME_FORMAT,
  PERSIAN_MONTH,
  PERSIAN_MONTH_NAME_FORMAT,
  PERSIAN_MONTH_NUMBER_FORMAT,
  PERSIAN_YEAR,
  PERSIAN_YEAR_FORMAT,
} from "./calendarMode";

export const generateMods = (isPersian: boolean) => {
  const YEAR_FORMAT = isPersian ? PERSIAN_YEAR_FORMAT : GREGORIAN_YEAR_FORMAT;

  const YEAR = isPersian ? PERSIAN_YEAR : GREGORIAN_YEAR;

  const MONTH_NAME_FORMAT = isPersian
    ? PERSIAN_MONTH_NAME_FORMAT
    : GREGORIAN_MONTH_NAME_FORMAT;

  const MONTH_NUMBER_FORMAT = isPersian
    ? PERSIAN_MONTH_NUMBER_FORMAT
    : GREGORIAN_MONTH_NUMBER_FORMAT;

  const DAY_FORMAT = isPersian ? PERSIAN_DAY_FORMAT : GREGORIAN_DAY_FORMAT;

  const FULL_DATE_FORMAT = isPersian
    ? PERSIAN_FULL_DATE_FORMAT
    : GREGORIAN_FULL_DATE_FORMAT;

  const FULL_TIME_FORMAT = isPersian
    ? PERSIAN_FULL_TIME_FORMAT
    : GREGORIAN_FULL_TIME_FORMAT;

  const MONTH = isPersian ? PERSIAN_MONTH : GREGORIAN_MONTH;

  const SHORT_DAY_FORMAT = isPersian
    ? PERSIAN_DAY_SHORT_FORMAT
    : GREGORIAN_DAY_SHORT_FORMAT;

  return {
    YEAR_FORMAT,
    YEAR,
    MONTH_NAME_FORMAT,
    MONTH_NUMBER_FORMAT,
    DAY_FORMAT,
    FULL_DATE_FORMAT,
    FULL_TIME_FORMAT,
    MONTH,
    SHORT_DAY_FORMAT,
  };
};
