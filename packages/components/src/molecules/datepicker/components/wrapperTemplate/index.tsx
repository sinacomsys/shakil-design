import { BaseIcon, Text } from "../../../../atoms";
import { useStyles } from "./style";
import { Button } from "../../../button";

const WrapperTemplate = ({
  children,

  onFinalConfirm,
  disable,
  onGoToday,
}: {
  children: React.ReactNode;

  onFinalConfirm?: () => void;
  disable: boolean;
  onGoToday: () => void;
}) => {
  const classes = useStyles();

  const handleConfirm = () => {
    if (disable) return;
    onFinalConfirm?.();
  };

  return (
    <div className={classes["wrapper"]}>
      {children}
      <Button onClick={onGoToday} className={classes["go-today"]} size="small">
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
