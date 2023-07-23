import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";
import { Text } from "../../atoms/text";
import { pxToVh, useHorizontalScroll } from "@sina-base/utils";
import { InternalTabPane } from "./internalTabPane";
import { useStyles } from "./style";
import { useTheme } from "../../theme/context";
interface TabItem {
  id: string;
  content: React.ReactNode;
  renderTitle:
    | React.ReactNode
    | (({ id, isActive }: { id: string; isActive: boolean }) => ReactNode);
  closeable: boolean;
}
export interface TabsProps {
  activeTab?: string;
  onChange?: (id: string) => void;
  onClose?: (id: string) => void;
  className?: string;
  TabsTitle?: string | React.ReactNode;
  noContent?: React.ReactNode;
  items: TabItem[];
}

const Tabs = ({
  activeTab: activeTabProp,
  onChange,
  onClose,
  className,
  TabsTitle,
  noContent,
  items,
}: TabsProps) => {
  const classes = useStyles();
  const { color_white, color_primary_2 } = useTheme();
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [openedTabs, setOpenedTabs] = useState<string[]>([]);
  const tabListRef = useHorizontalScroll();

  const handleOnChange = (id: string) => {
    onChange?.(id);
    if (activeTabProp) return;
    setActiveTab(id);
  };

  const handleOnClose = (id: string) => {
    onClose?.(id);
  };

  let _activeTab: string | null = null;
  if (activeTabProp) {
    _activeTab = activeTabProp;
  } else {
    _activeTab = activeTab;
  }

  useEffect(() => {
    if (items?.length > 0) {
      setActiveTab(items[0].id);
      setOpenedTabs(() => {
        return [items[0].id];
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activeTabProp) {
      setOpenedTabs((prev) => {
        const alreadyExist = prev.find((item) => item === activeTabProp);
        if (alreadyExist) return prev;
        return [...prev, activeTabProp];
      });
    }
  }, [activeTabProp]);

  return (
    <div className={classNames(classes["tabs"], className)}>
      <div className={classes["tabsContainer"]}>
        {TabsTitle ? (
          <div
            style={{
              backgroundColor: color_white,
              borderTopLeftRadius: 20,
            }}
          >
            {typeof TabsTitle === "string" ? (
              <div className={classes["tabsTitle"]}>
                <Text
                  theme="Regular"
                  size={`${pxToVh(20)}vh`}
                  color={color_primary_2}
                >
                  {TabsTitle}
                </Text>
              </div>
            ) : typeof TabsTitle === "object" ? (
              TabsTitle
            ) : null}
          </div>
        ) : null}

        <div ref={tabListRef} className={classes["tabsList"]}>
          {items?.map(({ id, renderTitle, closeable }) => {
            const isActive = id === _activeTab;
            return (
              <InternalTabPane
                renderTitle={renderTitle}
                isActive={isActive}
                onClick={handleOnChange}
                key={id}
                id={id}
                onClose={handleOnClose}
                closable={Boolean(closeable)}
              />
            );
          })}
        </div>
      </div>

      <div className={classes["tabsContentContainer"]}>
        {noContent ? (
          <div style={{ height: "100%" }}>{noContent}</div>
        ) : (
          openedTabs.map((_id) => {
            const tab = items?.find(({ id }) => id === _id);
            return (
              <div
                key={_id}
                style={{
                  display: tab?.id === _activeTab ? "block" : "none",
                  height: "100%",
                }}
              >
                {tab?.content}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export { Tabs };
