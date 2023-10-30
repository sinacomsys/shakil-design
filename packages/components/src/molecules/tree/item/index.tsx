import classNames from "classnames";
import React, { useContext } from "react";
import { useStyle } from "./style";
import { ItemProps, TreeBasicType } from "../types";
import { TreeContext } from "../context/treeProvider";
import { PX_UNIT, VIEW_PORT_UNIT } from "../../../types";
import { DefaultNode } from "./defaultNode";

const Item = <T extends TreeBasicType<T>>(
  {
    onClick,
    level,
    data,
    isLoading,
    fontSize,
    isActive,
    arrowDirection,
    title,
  }: ItemProps<T>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const classes = useStyle();
  const { unit } = useContext(TreeContext);

  const isLevelUpperOne = level && level > 1;
  const isPXunit = unit === "pixel";
  const isViewPortUnit = unit === "viewport";
  return (
    <div
      ref={ref}
      onClick={() => onClick?.()}
      className={classNames(
        classes["wrapper"],
        isViewPortUnit && `${classes["wrapper"]}${VIEW_PORT_UNIT}`,
        isPXunit && `${classes["wrapper"]}${PX_UNIT}`,
        isLevelUpperOne && classes["dot-line"],
        isLevelUpperOne && isPXunit && `${classes["dot-line"]}${PX_UNIT}`,
        isLevelUpperOne &&
          isViewPortUnit &&
          `${classes["dot-line"]}${VIEW_PORT_UNIT}`,
      )}
    >
      {typeof data.renderItemContent === "function" ? (
        data.renderItemContent({ data, level })
      ) : (
        <DefaultNode
          {...{
            fontSize,
            isActive,
            arrowDirection,
            title,
            data,
            level,
            isLoading,
          }}
        />
      )}
    </div>
  );
};

const RefWrapper = React.forwardRef(Item) as <T extends TreeBasicType<T>>(
  p: ItemProps<T> & { ref?: React.Ref<HTMLDivElement> },
) => React.ReactElement;

export { RefWrapper as Item };
