import { TitleMutualDefaultContent } from "../titleMutualDefaultContent";
import { InternalTabPaneProps } from "../../tabs.type";
import { useTheme } from "../../../../theme";
import { BaseIcon } from "../../../../atoms";
import { useStyles } from "./style";

const Card = ({
  id,
  isActive,
  title,
  onClose,
  closeable,
  onChange,
}: InternalTabPaneProps) => {
  const { tab: { card } = {} } = useTheme();
  const classes = useStyles({ isActive });
  return (
    <div
      className={classes["title-wrapper"]}
      onClick={(e) => {
        e.preventDefault();
        onChange?.(id);
      }}
    >
      <div className={classes["default-title"]}>
        {typeof title === "string" ? (
          <TitleMutualDefaultContent
            color={isActive ? card?.activeColor : card?.color}
            title={title}
            theme={isActive ? "bold" : "Regular"}
          />
        ) : typeof title === "function" ? (
          <>{title({ id, isActive })}</>
        ) : null}
      </div>
      {closeable ? (
        <BaseIcon
          color={isActive ? card?.activeCross : card?.cross}
          name="Performance-_-Table-Setting-_-Cross-icon-for-Delete-Item"
          size={{ height: 10, width: 10 }}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            onClose?.(id);
          }}
        />
      ) : null}
    </div>
  );
};
export { Card };
