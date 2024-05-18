import classNames from "classnames";
import { BaseIcon, Text } from "../../atoms";
import { useTheme } from "../../theme";
import { useStyles } from "./style";
import { TabItem } from ".";

export interface InternalTabPaneProps extends Omit<TabItem, "content"> {
  onClick: (id: string) => void;
  isActive: boolean;
  onClose?: (id: string) => void;
}

function InternalTabPane({
  id,
  renderTitle,
  onClick,
  isActive,
  onClose,
  closeable,
}: InternalTabPaneProps) {
  const classes = useStyles();
  const { tab: { textColor } = {} } = useTheme();
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        onClick(id);
      }}
      className={classNames(
        classes["tab"],
        isActive && classes["active-tab-pane"],
      )}
      key={id}
    >
      <>
        {typeof renderTitle === "string" ? (
          <div className={classes["tab-pane-title"]}>
            <Text size={14} theme={"Regular"} color={textColor}>
              {renderTitle}
            </Text>
          </div>
        ) : typeof renderTitle === "function" ? (
          <div className={classes["rendered-title-wrap"]}>
            {renderTitle({ id, isActive })}
          </div>
        ) : null}
      </>
      {!!closeable && (
        <div className={classes["tab-pane-close"]}>
          <BaseIcon
            color={"#575757"}
            name="Table-_-Cross-Icon-for-erasing-all-of-filters"
            size={{ height: 10, width: 10 }}
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              onClose?.(id);
            }}
          />
        </div>
      )}
    </div>
  );
}

export { InternalTabPane };
