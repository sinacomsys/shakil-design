import { Text, Button } from "@shakil-design/component";
import { useStyles } from "./style";
import { DatePickerProviderProps } from "../types";
import { ApplyChangesIcon } from "../icons/applyChanges";
import { CloseIcon } from "../icons/close";

interface WrapperTemplateProps extends Pick<DatePickerProviderProps, "testid"> {
  children: React.ReactNode;
  onFinalConfirm?: () => void;
  disable: boolean;
  onGoToday: () => void;
}

const WrapperTemplate = ({
  children,
  onFinalConfirm,
  disable,
  onGoToday,
  testid,
}: WrapperTemplateProps) => {
  const { goToday, confirm } = testid || {};

  const classes = useStyles();
  const handleConfirm = () => {
    if (disable) return;
    onFinalConfirm?.();
  };

  return (
    <div className={classes["wrapper"]}>
      {children}
      <Button
        data-testid={goToday}
        onClick={onGoToday}
        className={classes["go-today"]}
        size="small"
      >
        <Text size={14} color={"#FFFFFF"}>
          Go Today!
        </Text>
      </Button>
      <div className={classes["footer-icons"]}>
        <CloseIcon />
        <ApplyChangesIcon />
      </div>
    </div>
  );
};

export { WrapperTemplate };
