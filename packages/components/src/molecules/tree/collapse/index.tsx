import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Measure from "react-measure";
import { CollapseProps, TreeBasicType } from "../types";
import { Item } from "../item";
import { useStyles } from "./style";

const Collapse = <T extends TreeBasicType<T>>({
  title,
  children,
  level,
  backgroundColor,
  textColor,
  data,
  onLoadData,
  onClick,
  activeItemId,
  id,
  defaultOpen,
}: CollapseProps<T>) => {
  const ref = useRef<HTMLDivElement>(null);
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

  return (
    <div style={{ paddingTop: 20 }}>
      <Item
        data={data}
        isActive={id === activeItemId}
        isLoading={isLoading}
        textColor={textColor}
        backgroundColor={backgroundColor}
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
                className={classes["animationWrapper"]}
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
