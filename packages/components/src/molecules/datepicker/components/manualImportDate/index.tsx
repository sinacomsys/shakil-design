import { useReducer } from "react";
import { TextInput } from "../../..";
import { Text } from "../../../../atoms";
import { Button } from "../../..";
import moment, { Moment } from "moment-jalaali";
import { checkIsDateValid } from "../../utils/checkDateIsValid";
import { useStyles } from "./style";
import classNames from "classnames";

type CountActionKind = "YEAR" | "MONTH" | "DAY";
interface CountAction {
  type: CountActionKind;
  payload: string;
}
interface CountState {
  year: string;
  month: string;
  day: string;
}

interface ManualImportDateProps {
  onSelectDate: (args: Moment) => void;
  onSetCurrentDate: (args: Moment) => void;
  goToday: () => void;
}

const reducer = (state: CountState, action: CountAction) => {
  if (action.type === "YEAR") {
    return { ...state, year: action.payload };
  } else if (action.type === "MONTH") {
    return { ...state, month: action.payload };
  } else if (action.type === "DAY") {
    return { ...state, day: action.payload };
  } else return state;
};

export const ManualImportDate = ({
  goToday,
  onSelectDate,
  onSetCurrentDate,
}: ManualImportDateProps) => {
  const [{ day, month, year }, dispatch] = useReducer(reducer, {
    year: "",
    month: "",
    day: "",
  });

  const onConfirm = () => {
    const date = `${year}/${month}/${day}`;
    const isDateValid = checkIsDateValid(date);
    if (isDateValid) {
      const date = moment(`${year}/${month}/${day}`, "jYYYY/jMM/jDD");
      onSetCurrentDate(date);
      onSelectDate(date);
    }
  };
  const classes = useStyles();

  return (
    <>
      <div className={classes["wrapper"]}>
        <Text className={classes["title"]} color={"#ABABAB"}>
          Date
        </Text>
        <div style={{ display: "flex" }}>
          <div className={classes["input"]}>
            <TextInput
              value={year}
              style={{ textAlign: "center" }}
              onChangeText={(value) => {
                if (value.length === 5) return;
                dispatch({ payload: value, type: "YEAR" });
              }}
            />
          </div>
          <div className={classNames(classes["minute"], classes["input"])}>
            <TextInput
              value={month}
              onChangeText={(value) => {
                if (value.length === 3) return;
                dispatch({ payload: value, type: "MONTH" });
              }}
              style={{ textAlign: "center" }}
            />
          </div>
          <div className={classes["input"]}>
            <TextInput
              value={day}
              onChangeText={(value) => {
                if (value.length === 3) return;
                dispatch({ payload: value, type: "DAY" });
              }}
              style={{ textAlign: "center" }}
            />
          </div>
        </div>
      </div>
      <div className={classes["wrapper"]}>
        <Text className={classes["title"]} color={"#ABABAB"}>
          Time
        </Text>
        <div style={{ display: "flex" }}>
          <div className={classes["input"]}>
            <TextInput style={{ textAlign: "center" }} />
          </div>
          <div className={classNames(classes["input"], classes["minute"])}>
            <TextInput style={{ textAlign: "center" }} />
          </div>
          <Button className={classes["input"]} size="small" onClick={onConfirm}>
            ok
          </Button>
        </div>
      </div>
      <Button className={classes["submit"]} size="small" onClick={goToday}>
        Go Today!
      </Button>
    </>
  );
};
