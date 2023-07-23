import classNames from "classnames";
import { ReactNode } from "react";
import { BaseIcon, Text } from "../../atoms";
import { useTheme } from "../../theme/context";
import { useStyles } from "./style";

export interface InternalTabPaneProps {
  id: string;
  renderTitle:
    | React.ReactNode
    | (({ id, isActive }: { id: string; isActive: boolean }) => ReactNode);
  closable: boolean;
  onClick: (id: string) => void;
  isActive: boolean;
  onClose?: (id: string) => void;
}

function InternalTabPane({
  id,
  renderTitle,
  closable,
  onClick,
  isActive,
  onClose,
}: InternalTabPaneProps) {
  const classes = useStyles();
  const { color_white, color_primary_3, color_primary_4 } = useTheme();
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        onClick(id);
      }}
      className={classNames(classes["tab"], isActive && classes["tabActive"])}
      key={id}
    >
      <div className={classes["tabsTitleWrapper"]}>
        {typeof renderTitle === "string" ? (
          <Text
            size={14}
            theme={"Regular"}
            color={isActive ? color_white : color_primary_3}
          >
            {renderTitle}
          </Text>
        ) : typeof renderTitle === "function" ? (
          renderTitle({ id, isActive })
        ) : null}
      </div>
      {closable && (
        <BaseIcon
          wrapperStyle={{
            width: 16,
          }}
          color={color_primary_4}
          name="Table-_-Cross-Icon-for-erasing-all-of-filters"
          size={{ height: 10, width: 10 }}
          unit={"pixel"}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            onClose?.(id);
          }}
        />
      )}
    </div>
  );
}

export { InternalTabPane };
