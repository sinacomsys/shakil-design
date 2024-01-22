import { DatePickerContext } from "../../context";
import { useContext } from "react";
import { ManualImportDate } from "../manualImportDate";
import { useStyle } from "./style";
import { Calendar } from "../calendar";
import { ExpandIcon } from "../expandIcon";

export const DatePickerPanel = () => {
  const classes = useStyle();
  const { isConfirmed, onEditAgain } = useContext(DatePickerContext);

  return (
    <>
      <Calendar />
      <div className={classes["manualInput"]}>
        <ManualImportDate />
        <div className={classes["expand"]}>
          <ExpandIcon />
        </div>
        {isConfirmed ? (
          <div onClick={onEditAgain} className={classes["overlay"]} />
        ) : null}
      </div>
    </>
  );
};
