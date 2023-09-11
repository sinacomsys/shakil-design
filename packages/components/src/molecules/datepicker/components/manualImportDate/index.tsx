import { useReducer } from "react";
import { TextInput } from "../../..";
import { Text } from "../../../../atoms";
import { Button } from "../../..";
import moment, { Moment } from "moment-jalaali";
import { checkIsDateValid } from "../../utils/checkDateIsValid";

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

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
        <Text color={"#ABABAB"} style={{ marginRight: 13 }}>
          Date
        </Text>
        <div style={{ display: "flex" }}>
          <div style={{ width: 44 }}>
            <TextInput
              unit="pixel"
              value={year}
              style={{ textAlign: "center" }}
              onChangeText={(value) => {
                if (value.length === 5) return;
                dispatch({ payload: value, type: "YEAR" });
              }}
            />
          </div>
          <div style={{ width: 44, marginInline: 6 }}>
            <TextInput
              unit="pixel"
              value={month}
              onChangeText={(value) => {
                if (value.length === 3) return;
                dispatch({ payload: value, type: "MONTH" });
              }}
              style={{ textAlign: "center" }}
            />
          </div>
          <div style={{ width: 44 }}>
            <TextInput
              unit="pixel"
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
      <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
        <Text style={{ marginRight: 12 }} color={"#ABABAB"}>
          Time
        </Text>
        <div style={{ display: "flex" }}>
          <div style={{ width: 44 }}>
            <TextInput unit="pixel" style={{ textAlign: "center" }} />
          </div>
          <div style={{ width: 44, marginInline: 6 }}>
            <TextInput unit="pixel" style={{ textAlign: "center" }} />
          </div>
          <Button size="small" style={{ width: 44 }} onClick={onConfirm}>
            ok
          </Button>
        </div>
      </div>

      <Button style={{ marginLeft: 42 }} size="small" onClick={goToday}>
        Go Today!
      </Button>
    </div>
  );
};
