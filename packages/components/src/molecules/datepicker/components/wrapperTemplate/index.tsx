import { Moment } from "moment-jalaali";
import { BaseIcon, Text } from "../../../../atoms";
import { useStyles } from "./style";
import { Button } from "../../../button";

const WrapperTemplate = ({
  children,
  value,
  onFinalConfirm,
  disable,
}: {
  children: React.ReactNode;
  value?: Moment | null;
  onFinalConfirm?: (arg: { value: Moment | null | undefined }) => void;
  disable: boolean;
}) => {
  const classes = useStyles();

  const handleConfirm = () => {
    if (disable) return;
    onFinalConfirm?.({ value });
  };

  // const onGoToDay = () => {
  //   const current = moment();
  //   const isPersian = calendarMode === "persian";
  //   const year = isPersian ? current.jYear() : current.year();
  //   const month = isPersian ? current.jMonth() : current.month();
  //   const date = isPersian ? current.jDate() : current.date();
  //   const hour = current.hour();
  //   const minute = current.minute();
  //   setValue("day", date as unknown as string);
  //   setValue("hour", hour as unknown as string);
  //   setValue("minute", minute as unknown as string);
  //   setValue("month", (month + 1) as unknown as string);
  //   setValue("year", year as unknown as string);
  // };

  return (
    <div className={classes["wrapper"]}>
      {children}
      <Button className={classes["go-today"]} size="small">
        <Text size={14} color={"#FFFFFF"}>
          Go Today!
        </Text>
      </Button>
      <div className={classes["footer-icons"]}>
        <BaseIcon
          wrapperStyle={{ cursor: "pointer" }}
          name="Calendar-_-Close"
          size={{ height: 24, width: 24 }}
        />
        <BaseIcon
          onClick={handleConfirm}
          name="Calendar-_-Apply-Changes"
          size={{ height: 24, width: 24 }}
          wrapperStyle={{ cursor: disable ? "not-allowed" : "pointer" }}
        />
      </div>
    </div>
  );
};

export { WrapperTemplate };
