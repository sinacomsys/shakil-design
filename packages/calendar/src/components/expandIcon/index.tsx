import { useContext } from "react";
import { BaseIcon } from "@shakil-design/component";
import { useStyles } from "./style";
import { DatePickerContext } from "../../context";
import { CalendarIcon } from "../icons/calendar";
import { MoreChoicesIcon } from "../icons/moreChoices";

export const ExpandIcon = () => {
  const classes = useStyles();
  const { onExtendMatrix, onShrinkMatrix, isMatrixOpen } =
    useContext(DatePickerContext);

  const handleOnClick = () => {
    if (isMatrixOpen) {
      onShrinkMatrix();
    } else {
      onExtendMatrix();
    }
  };

  return (
    <div className={classes["wrapper"]}>
      <MoreChoicesIcon className={`${classes["wrapper"]}--more-choices`} />
      <CalendarIcon onClick={handleOnClick} />
    </div>
  );
};
