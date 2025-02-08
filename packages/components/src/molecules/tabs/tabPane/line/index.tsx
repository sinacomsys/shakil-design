import { useTheme } from "../../../../theme";
import { useStyles } from "./style";
import { InternalTabPaneProps } from "../../tabs.type";
import { TitleMutualDefaultContent } from "../titleMutualDefaultContent";

const Line = ({ id, isActive, onChange, title }: InternalTabPaneProps) => {
  const { tab: { line } = {} } = useTheme();
  const classes = useStyles();

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        onChange?.(id);
      }}
      style={{ cursor: "pointer" }}
    >
      <div className={classes["title-wrapper"]} key={id}>
        {typeof title === "string" ? (
          <TitleMutualDefaultContent
            color={line?.tabColor}
            title={title}
            theme={isActive ? "bold" : "Regular"}
          />
        ) : typeof title === "function" ? (
          <>{title({ id, isActive })}</>
        ) : null}
      </div>
      <div
        className={classes["line"]}
        style={{
          backgroundColor: isActive ? line?.lineColor : "transparent",
        }}
      />
    </div>
  );
};
export { Line };
