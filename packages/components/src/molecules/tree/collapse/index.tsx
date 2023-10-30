import { motion } from "framer-motion";
import { useEffect, useRef, useState, useContext } from "react";
import Measure from "react-measure";
import { CollapseProps, TreeBasicType } from "../types";
import { Item } from "../item";
import { useStyles } from "./style";
import { TreeContext } from "../context/treeProvider";
import { pxToVhString } from "@shakil-design/utils";

const Collapse = <T extends TreeBasicType<T>>({
  title,
  children,
  level,
  data,
  onLoadData,
  onClick,
  activeItemId,
  id,
  defaultOpen,
}: CollapseProps<T>) => {
  const ref = useRef<HTMLDivElement>(null);
  const { unit } = useContext(TreeContext);
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleOnClick = () => {
    onClick?.({ data, level });
    if (children) {
      setOpen((prev) => !prev);
    }
    if (typeof onLoadData === "undefined") return;
    setLoading(true);
    onLoadData?.({ data, level })?.finally(() => {
      setLoading(false);
      if (!children) {
        setOpen(true);
      }
    });
  };

  useEffect(() => {
    if (defaultOpen) {
      ref.current?.scrollIntoView({ block: "center", behavior: "smooth" });
      setOpen(true);
    }
  }, [defaultOpen]);
  const itemPaddingTop = unit === "viewport" ? pxToVhString(20) : 20;

  return (
    <div style={{ paddingTop: itemPaddingTop }}>
      <Item
        data={data}
        isActive={id === activeItemId}
        isLoading={isLoading}
        level={level}
        title={title}
        onClick={handleOnClick}
        arrowDirection={children ? (isOpen ? "up" : "down") : undefined}
        ref={ref}
      />
      {children ? (
        <Measure bounds>
          {({ contentRect, measureRef }) => {
            const height = contentRect.bounds?.height ?? 0;
            return (
              <motion.div
                className={classes["animation-wrapper"]}
                animate={{
                  height: isOpen ? "auto" : 0,
                }}
              >
                <div ref={measureRef}>
                  {children}
                  <div
                    className={classes["dots"]}
                    style={{
                      height: height - 15,
                    }}
                  />
                </div>
              </motion.div>
            );
          }}
        </Measure>
      ) : null}
    </div>
  );
};

export { Collapse };
