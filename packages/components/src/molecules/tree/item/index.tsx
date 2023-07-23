import classNames from "classnames";
import { Loading, Text } from "../../../atoms";
import { BaseIcon } from "../../../atoms/baseIcon";
import React from "react";
import { useTheme } from "../../../theme/context";
import { useStyle } from "./style";
interface ItemProps {
  title?: string;
  arrowDirection?: "up" | "down";
  level: number;
  backgroundColor: string;
  isActive?: boolean;
  textColor: string;
  fontSize?: number;
  isLoading: boolean;
  onClick?: () => void;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  (
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
    },
    ref,
  ) => {
    const { color_primary_1, color_warning_1, color_primary_2 } = useTheme();
    const classes = useStyle();
    return (
      <div
        ref={ref}
        onClick={() => onClick?.()}
        style={{
          cursor: "pointer",
          backgroundColor: isActive ? color_primary_1 : backgroundColor,
        }}
        className={classNames(
          classes["wrapper"],
          level && level > 1 && classes["dotLine"],
        )}
      >
        <div className={classes["statusLine"]} />
        <div className={classes["content"]}>
          <Text theme="Regular" size={fontSize} color={textColor}>
            {title}
          </Text>
          {isLoading ? (
            <div style={{ marginInlineStart: "auto" }}>
              <Loading size="small" spinnerColor={color_warning_1} />
            </div>
          ) : null}
          {arrowDirection !== undefined ? (
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
    );
  },
);

Item.displayName = "Item";

export { Item };
