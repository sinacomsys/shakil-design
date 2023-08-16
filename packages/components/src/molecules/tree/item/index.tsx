import classNames from "classnames";
import { Spinner, Text } from "../../../atoms";
import { BaseIcon } from "../../../atoms/baseIcon";
import React from "react";
import { useTheme } from "../../../theme/context";
import { useStyle } from "./style";
import { ItemProps, TreeBasicType } from "../types";

const Item = <T extends TreeBasicType<T>>(
  {
    title,
    onClick,
    arrowDirection,
    level,
    backgroundColor,
    isActive,
    textColor,
    fontSize = 16,
    isLoading,
    data,
  }: ItemProps<T>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { color_primary_1, color_warning_1, color_primary_2 } = useTheme();
  const classes = useStyle();

  return (
    <div
      ref={ref}
      onClick={() => onClick?.()}
      style={{
        cursor: "pointer",
        backgroundColor: data.backgroundColor
          ? data.backgroundColor
          : isActive
          ? color_primary_1
          : backgroundColor,
      }}
      className={classNames(
        classes["wrapper"],
        level && level > 1 && classes["dotLine"],
      )}
    >
      <div className={classes["statusLine"]} />
      <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <div className={classes["content"]}>
          {typeof data.renderItemContent === "function" ? (
            data.renderItemContent({ data, level })
          ) : (
            <div
              style={{
                marginInlineStart: 24,
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Text theme="Regular" size={fontSize} color={textColor}>
                {title}
              </Text>
            </div>
          )}
        </div>
        <div className={classes["spinnerWrapper"]}>
          {isLoading ? (
            <Spinner size="small" spinerColor={color_warning_1} />
          ) : null}
          {!isLoading && arrowDirection !== undefined ? (
            <BaseIcon
              wrapperClassName={classNames(
                classes["arrowDown"],
                arrowDirection === "up" && classes["arrowUp"],
              )}
              name={"Amount-Boxes_Decrease"}
              size={{ height: 6, width: 12 }}
              wrapperStyle={{ marginInlineStart: "auto" }}
              color={color_primary_2}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

// Cast the output
const RefWrapper = React.forwardRef(Item) as <T extends TreeBasicType<T>>(
  p: ItemProps<T> & { ref?: React.Ref<HTMLDivElement> },
) => React.ReactElement;

export { RefWrapper as Item };
