import classNames from "classnames";

import { useTheme } from "../../../../theme";
import { BaseIcon } from "../../../../atoms";
import { useStyles } from "./style";

const FleshIcon = ({ isVisible }: { isVisible: boolean }) => {
  const { select: { fleshIcon } = {} } = useTheme();
  const classes = useStyles();

  return (
    <BaseIcon
      color={fleshIcon}
      name={"Amount-Boxes_Decrease"}
      size={{
        height: 7,
        width: 12,
      }}
      wrapperClassName={classNames(
        classes["rotate-animation"],
        isVisible && `${classes["rotate-animation"]}--selected`,
      )}
    />
  );
};

export { FleshIcon };
