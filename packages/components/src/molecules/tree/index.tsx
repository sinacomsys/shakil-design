import { findGrandParents, flatData } from "@shakil-design/utils";
import { useContext } from "react";
import { Collapse } from "./collapse";
import { LevelContext } from "./context/levelProvider";
import { TreeBasicType, TreeProps } from "./types";

const Tree = <T extends TreeBasicType<T>>({
  data,
  onSelectItem,
  onLoadData,
  activeItemId,
  defaultSeletedItem,
}: TreeProps<T>) => {
  const level = useContext(LevelContext);
  const flat = flatData(data);
  const grandPrents = findGrandParents(defaultSeletedItem, flat);
  return (
    <div style={{ paddingInlineStart: level > 1 ? 30 : 0 }}>
      {data.map((child) => {
        const isExist = grandPrents.find((item) => item.id === child.id);
        return (
          <Collapse
            onClick={onSelectItem}
            data={child}
            title={child.title}
            level={level}
            key={child.id}
            onLoadData={onLoadData}
            id={child.id}
            activeItemId={activeItemId}
            defaultOpen={Boolean(isExist)}
          >
            {child?.children?.length ? (
              <LevelContext.Provider value={level + 1}>
                <Tree
                  onSelectItem={onSelectItem}
                  data={child.children}
                  onLoadData={onLoadData}
                  activeItemId={activeItemId}
                  defaultSeletedItem={defaultSeletedItem}
                />
              </LevelContext.Provider>
            ) : null}
          </Collapse>
        );
      })}
    </div>
  );
};

export { Tree };
