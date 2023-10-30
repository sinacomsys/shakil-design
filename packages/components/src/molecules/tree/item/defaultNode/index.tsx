import classNames from "classnames";
import { useStyles } from "./style";
import { ItemProps, TreeBasicType } from "../../types";
import { TreeContext } from "../../context/treeProvider";
import { useContext } from "react";
import { BaseIcon, Spinner, Text } from "../../../../atoms";
import { PX_UNIT, VIEW_PORT_UNIT } from "../../../../types";

const DefaultNode = <T extends TreeBasicType<T>>({
  data,
  isLoading,
  level,
  arrowDirection,
  fontSize,
  isActive,
  title,
}: ItemProps<T>) => {
  const classes = useStyles();
  const { unit } = useContext(TreeContext);
  const isPXunit = unit === "pixel";
  const isViewPortUnit = unit === "viewport";

  return (
    <div
      style={{
        backgroundColor:
          data?.renderBackgroundColor &&
          data.renderBackgroundColor({ data, level }),
      }}
      className={classNames(
        classes["wrapper"],
        isPXunit
          ? `${classes["wrapper"]}${PX_UNIT}`
          : `${classes["wrapper"]}${VIEW_PORT_UNIT}`,
        isActive && `${classes["wrapper"]}--active`,
      )}
    >
      {data.renderStatusColor && (
        <div
          className={classNames(
            classes["status-line"],
            isPXunit
              ? `${classes["status-line"]}${PX_UNIT}`
              : `${classes["status-line"]}${VIEW_PORT_UNIT}`,
          )}
        >
          {data.renderStatusColor({ data, level })}
        </div>
      )}
      <div className={classes["item-content"]}>
        {typeof data.renderTitle === "function" ? (
          data.renderTitle({ data, level })
        ) : (
          <div
            className={classNames(
              classes["default-item-content"],
              isPXunit && `${classes["default-item-content"]}${PX_UNIT}`,
              isViewPortUnit &&
                `${classes["default-item-content"]}${VIEW_PORT_UNIT}`,
            )}
          >
            <Text theme="Regular" size={fontSize} color={"#575757"}>
              {title}
            </Text>
          </div>
        )}
      </div>
      <div className={classes["spinner-wrapper"]}>
        {isLoading ? <Spinner size="small" spinerColor={"white"} /> : null}
        {!isLoading && arrowDirection !== undefined ? (
          <BaseIcon
            wrapperClassName={classNames(
              classes["arrow-down"],
              arrowDirection === "up" && classes["arrow-up"],
            )}
            name={"Amount-Boxes_Decrease"}
            size={{ height: 6, width: 12 }}
            wrapperStyle={{ marginInlineStart: "auto" }}
            color={"#575757"}
          />
        ) : null}
      </div>
    </div>
  );
};
export { DefaultNode };
