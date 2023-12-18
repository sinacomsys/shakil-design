import { useContext } from "react";
import { BaseIcon } from "../../../../atoms";
import { useStyles } from "./style";
import { DatePickerContext } from "../../context";

export const ExpandIcon = ({
  handleOndisproveDate,
}: {
  handleOndisproveDate: () => void;
}) => {
  const classes = useStyles();
  const { onExtendMatrix, onShrinkMatrix, isMatrixOpen } =
    useContext(DatePickerContext);

  const handleOnClick = () => {
    handleOndisproveDate();
    if (isMatrixOpen) {
      onShrinkMatrix();
    } else {
      onExtendMatrix();
    }
  };

  return (
    <div className={classes["wrapper"]}>
      <BaseIcon
        wrapperClassName={`${classes["wrapper"]}--more-choices`}
        color={"#eeeeee"}
        name="Every-Boxes-_-Flesh-Icon-for-more-choices"
        size={{ height: 5, width: 9 }}
      />
      <BaseIcon
        wrapperStyle={{ cursor: "pointer" }}
        onClick={handleOnClick}
        color="#eeeeee"
        name="Calendar-_-Calendar-Icon"
        size={{
          width: 18,
          height: 18,
        }}
      />
    </div>
  );
};
