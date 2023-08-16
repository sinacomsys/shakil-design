import { findGrandParents, flatData } from "@shakil-design/utils";
import { useContext } from "react";
import { useTheme } from "../../theme/context";
import { Collapse } from "./collapse";
import { LevelContext } from "./context/levelProvider";
export interface TreeBasicType<T> {
  title: string;
  id: string;
  parentId?: string | null;
  children?: T[];
}

export type OnSelectItemProps<T> = {
  data: T;
  level: number;
};

export type OnLoadData<T> = (value: OnSelectItemProps<T>) => Promise<void>;
export interface TreeProps<T> {
  data: T[];
  onSelectItem?: (value: OnSelectItemProps<T>) => void;
  onLoadData?: (value: OnSelectItemProps<T>) => Promise<void>;
  activeItemId?: string;
  defaultSeletedItem?: string;
}

const Tree = <T extends TreeBasicType<T>>({
  data,
  onSelectItem,
  onLoadData,
  activeItemId,
  defaultSeletedItem,
}: TreeProps<T>) => {
  const {
    color_secondary_3,
    color_primary_6,
    color_secondary_1,
    color_primary_1,
    color_white,
    color_primary_3,
  } = useTheme();
  const level = useContext(LevelContext);
  const backgourndColor =
    level === 1
      ? color_secondary_3
      : level === 2
      ? color_primary_6
      : level === 3
      ? color_primary_3
      : color_primary_3;

  const textColor =
    level === 1
      ? color_secondary_1
      : level === 2
      ? color_primary_1
      : level === 3
      ? color_white
      : color_white;

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
            textColor={textColor as string}
            backgroundColor={backgourndColor as string}
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
