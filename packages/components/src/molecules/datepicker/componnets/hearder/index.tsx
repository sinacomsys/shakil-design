import { BaseIcon, Text } from "../../../../atoms";
import { DatePickerContext } from "../../context";
import { useContext } from "react";
import { useStyle } from "./style";

export const Header = () => {
  const {
    currentDate,
    onAddMonth,
    onAddYear,
    onSubtractMonth,
    onSubtractYear,
  } = useContext(DatePickerContext);
  const classes = useStyle();
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        marginBottom: 16,
      }}
    >
      <BaseIcon
        onClick={onAddMonth}
        wrapperClassName={classes["nextMonth"]}
        name="Table-_-Sort-Icon_A-to-Z"
        size={{
          width: 9,
          height: 16,
        }}
        color={["white"]}
      />
      <BaseIcon
        onClick={onSubtractMonth}
        wrapperClassName={classes["prevMonth"]}
        name="Table-_-Sort-Icon_A-to-Z"
        size={{
          width: 9,
          height: 16,
        }}
        color={["white"]}
      />
      <div className={classes["month"]}>
        <Text size={14} color={"white"} theme="Regular">
          {currentDate.format("jMMMM")}
        </Text>
        <div style={{ display: "flex", alignItems: "center", marginTop: 5 }}>
          <BaseIcon
            name="Calendar-_-Year-_-Previous-Year"
            size={{ width: 9, height: 5 }}
            color={["white"]}
            onClick={onSubtractYear}
            wrapperStyle={{ cursor: "pointer" }}
          />
          <Text
            style={{ marginInline: 10, width: 40, textAlign: "center" }}
            color={"white"}
            size={14}
          >
            {currentDate.format("jYYYY")}
          </Text>
          <BaseIcon
            name="Calendar-_-Year-_-Next-Year"
            size={{ width: 9, height: 5 }}
            color={["white"]}
            onClick={onAddYear}
            wrapperStyle={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};
