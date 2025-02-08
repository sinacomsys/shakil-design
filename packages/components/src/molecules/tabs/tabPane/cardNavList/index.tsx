import { TabsProps } from "../../tabs.type";
import { Card } from "../card";
import { useStyles } from "./style";

const CardNavList = ({
  items,
  onChange,
  onClose,
  activeTab,
}: Pick<TabsProps, "items" | "onChange" | "onClose" | "activeTab">) => {
  const classes = useStyles();
  return (
    <div className={classes["wrapper"]}>
      {items.map(({ title, id, closeable }) => {
        const isActive = activeTab === id;
        return (
          <Card
            title={title}
            isActive={isActive}
            onChange={onChange}
            key={id}
            id={id}
            onClose={onClose}
            closeable={Boolean(closeable)}
          />
        );
      })}
    </div>
  );
};

export { CardNavList };
