import classNames from "classnames";
import { BaseIcon } from "../../../../atoms";
import { useTheme } from "../../../../theme";
import { useStyles } from "./style";

const FleshIcon = ({ isVisible }: { isVisible: boolean }) => {
  const { select: { fleshIcon } = {} } = useTheme();
  const classes = useStyles();

  return (
    <BaseIcon
      color={fleshIcon}
      name={"Every-Boxes-_-Flesh-Icon-for-more-choices"}
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
