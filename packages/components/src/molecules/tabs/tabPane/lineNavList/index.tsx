import { TabsProps } from "../../tabs.type";
import { Line } from "../line";
import { useStyles } from "./style";

const LineNavList = ({
  items,
  activeTab,
  onChange,
  onClose,
}: Pick<TabsProps, "items" | "onChange" | "onClose" | "activeTab">) => {
  const classes = useStyles();
  return (
    <div className={classes["wrapper"]}>
      {items.map(({ id, title }) => {
        const isActive = activeTab === id;
        return (
          <Line
            key={id}
            id={id}
            isActive={isActive}
            onChange={onChange}
            onClose={onClose}
            title={title}
          />
        );
      })}
    </div>
  );
};

export { LineNavList };
