import { DatePickerContext } from "../../context";
import { useContext } from "react";
import { ManualImportDate } from "../manualImportDate";
import { useStyle } from "./style";
import { Calendar } from "../calendar";
import { ExpandIcon } from "../expandIcon";

export const DatePickerPanel = () => {
  const classes = useStyle();
  const { isDisable, onEditAgain, isConfirmed, onConfirmDate } =
    useContext(DatePickerContext);

  const handleOnOkDate = () => {
    onConfirmDate(true);
  };

  const handleOndisproveDate = () => {
    onConfirmDate(false);
    onEditAgain?.();
  };

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _isDisable = isDisable || isConfirmed;

  return (
    <>
      <Calendar />
      <div className={classes["manualInput"]}>
        <ManualImportDate
          onConfirmDate={handleOnOkDate}
          isConfirmed={_isDisable}
        />
        <div className={classes["expand"]}>
          <ExpandIcon handleOndisproveDate={handleOndisproveDate} />
        </div>
        {_isDisable ? (
          <div onClick={handleOndisproveDate} className={classes["overlay"]} />
        ) : null}
      </div>
    </>
  );
};
