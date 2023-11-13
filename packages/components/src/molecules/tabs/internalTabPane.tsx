import { pxToVh } from "@shakil-design/utils";
import classNames from "classnames";
import { ReactNode } from "react";
import { BaseIcon, Text } from "../../atoms";
import { useTheme } from "../../theme";
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
      <div className={classes["tab-pane-title"]}>
        {typeof renderTitle === "string" ? (
          <Text size={14} theme={"Regular"} color={textColor}>
            {renderTitle}
          </Text>
        ) : typeof renderTitle === "function" ? (
          renderTitle({ id, isActive })
        ) : null}
      </div>
      {closable && (
        <BaseIcon
          wrapperClassName={classes["tab-pane-close"]}
          color={"#575757"}
          name="Table-_-Cross-Icon-for-erasing-all-of-filters"
          size={{ height: 10, width: 10 }}
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
