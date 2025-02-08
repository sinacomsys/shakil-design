import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import { useHorizontalScroll } from "@shakil-design/utils/src";
import { useStyles } from "./style";
import { TabsProps } from "./tabs.type";
import { CardNavList } from "./tabPane/cardNavList";
import { LineNavList } from "./tabPane/lineNavList";

const Tabs = ({
  activeTab: activeTabProp,
  onChange,
  onClose,
  className,
  noContent,
  items,
  type,
  tabBarExtraContent,
}: TabsProps) => {
  const classes = useStyles();
  const [extraActionWidth, setExtraActionWidth] = useState<number>(0);
  const [navBarWidth, setNavBarWidth] = useState<number>(0);
  const [activeTabState, setActiveTabState] = useState<string | undefined>(
    undefined,
  );
  const [openedTabs, setOpenedTabs] = useState<string[]>([]);
  const tabListRef = useHorizontalScroll();
  const handleOnChange = (id: string) => {
    onChange?.(id);
    if (activeTabProp) return;
    setActiveTabState(id);
  };
  const handleOnClose = (id: string) => {
    onClose?.(id);
  };
  let _activeTab: string | undefined = undefined;
  if (activeTabProp) {
    _activeTab = activeTabProp;
  } else {
    _activeTab = activeTabState;
  }

  useEffect(() => {
    if (activeTabProp) return;
    if (items?.length > 0) {
      setActiveTabState(items[0].id);
      setOpenedTabs(() => {
        return [items[0].id];
      });
    }
  }, [activeTabProp, items]);

  useEffect(() => {
    if (activeTabProp) {
      setOpenedTabs((prev) => {
        const alreadyExist = prev.find((item) => item === activeTabProp);
        if (alreadyExist) return prev;
        return [...prev, activeTabProp];
      });
    }
  }, [activeTabProp]);

  const getExtraActionWidth = useCallback((body: HTMLDivElement) => {
    setExtraActionWidth(body?.clientWidth || 0);
  }, []);

  const getNavListWidth = (body: HTMLDivElement) => {
    setNavBarWidth(body?.clientWidth);
  };

  return (
    <div className={classNames(classes["tabs"], className)}>
      <div className={classes["nav-list-wrapper"]} ref={getNavListWidth}>
        <div
          className={classes["nav-list"]}
          ref={tabListRef}
          style={{ width: navBarWidth - extraActionWidth }}
        >
          {type === "card" ? (
            <CardNavList
              items={items}
              activeTab={_activeTab}
              onChange={handleOnChange}
              onClose={handleOnClose}
            />
          ) : (
            <LineNavList
              items={items}
              activeTab={_activeTab}
              onChange={handleOnChange}
              onClose={handleOnClose}
            />
          )}
        </div>
        <div ref={getExtraActionWidth} style={{ height: "100%" }}>
          {tabBarExtraContent}
        </div>
      </div>
      <div className={classes["content-holder"]}>
        {noContent ? (
          <div className={classes["no-content"]}>{noContent}</div>
        ) : (
          openedTabs.map((_id) => {
            const tab = items?.find(({ id }) => id === _id);
            return (
              <div
                className={classNames(
                  classes["tab-content"],
                  tab?.id === _activeTab
                    ? `${classes["tab-content"]}--active`
                    : `${classes["tab-content"]}--not-active`,
                )}
                key={_id}
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
