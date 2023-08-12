import { Text } from "../../../../atoms";
import { useStyle } from "./style";

const daysOfWeek = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
export const DaysOfWeekTitle = () => {
  const classes = useStyle();
  return (
    <div className={classes["container"]}>
      {daysOfWeek.map((item, index) => {
        return (
          <div key={index} className={classes["day"]}>
            <Text theme="Regular" size={14} color="white">
              {item}
            </Text>
          </div>
        );
      })}
    </div>
  );
};
