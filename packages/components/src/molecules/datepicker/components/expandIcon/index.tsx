import { useContext } from "react";

import { DatePickerContext } from "../../context";
import { BaseIcon } from "../../../../atoms";
import { useStyles } from "./style";

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
      <BaseIcon
        wrapperClassName={`${classes["wrapper"]}--more-choices`}
        color={"#eeeeee"}
        name="Amount-Boxes_Decrease"
        size={{ height: 5, width: 9 }}
      />
      <BaseIcon
        wrapperStyle={{ cursor: "pointer" }}
        onClick={handleOnClick}
        color="#eeeeee"
        name="Table-_-Calendar"
        size={{
          width: 18,
          height: 18,
        }}
      />
    </div>
  );
};
