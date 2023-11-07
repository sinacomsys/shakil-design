import classNames from "classnames";
import { BaseIcon } from "../../../../atoms";
import { useTheme } from "../../../../theme";
import { Unit } from "../../../../types";
import { pxToVh } from "@shakil-design/utils";
import { useStyles } from "./style";

const FleshIcon = ({ isVisible, unit }: { isVisible: boolean; unit: Unit }) => {
  const { select: { fleshIcon } = {} } = useTheme();
  const classes = useStyles();

  return (
    <BaseIcon
      color={fleshIcon}
      name={"Every-Boxes-_-Flesh-Icon-for-more-choices"}
      size={{
        height: unit === "viewport" ? pxToVh(7) : 7,
        width: unit === "viewport" ? pxToVh(12) : 12,
      }}
      unit={unit}
      wrapperClassName={classNames(
        classes["rotate-animation"],
        isVisible && `${classes["rotate-animation"]}--selected`,
      )}
    />
  );
};

export { FleshIcon };
