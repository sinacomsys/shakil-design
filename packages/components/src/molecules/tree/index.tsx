import { findGrandParents, flatData } from "@shakil-design/utils";
import { useContext } from "react";
import { Collapse } from "./collapse";
import { LevelContext } from "./context/levelProvider";
import { TreeBasicType, TreeProps } from "./types";
import { TreeContext } from "./context/treeProvider";
import { useStyle } from "./style";
import classNames from "classnames";
import { PX_UNIT, VIEW_PORT_UNIT } from "../../types";

const Tree = <T extends TreeBasicType<T>>({
  data,
  onSelectItem,
  onLoadData,
  activeItemId,
  defaultSeletedItem,
}: TreeProps<T>) => {
  const level = useContext(LevelContext);
  const { unit } = useContext(TreeContext);
  const flat = flatData(data);
  const grandPrents = findGrandParents(defaultSeletedItem, flat);
  const classes = useStyle();

  return (
    <div
      className={classNames(
        classes["wrapper"],
        level > 1 && unit === "pixel"
          ? `${classes["wrapper"]}${PX_UNIT}`
          : level > 1 &&
              unit === "viewport" &&
              `${classes["wrapper"]}${VIEW_PORT_UNIT}`,
      )}
    >
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

const TreeWrapper = <T extends TreeBasicType<T>>({
  unit = "viewport",
  ...props
}: TreeProps<T>) => {
  return (
    <TreeContext.Provider value={{ unit }}>
      <Tree {...props} />
    </TreeContext.Provider>
  );
};

export { TreeWrapper as Tree };
