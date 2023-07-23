import { motion } from "framer-motion";
import React, { useContext, useLayoutEffect } from "react";
import { BaseIcon } from "../../../atoms/baseIcon";
import { Text } from "../../../atoms/text";
import { useTheme } from "../../../theme/context";
import { CollapseContext } from "../context";
import { useStyles } from "./style";

export interface PanelProps {
  children: React.ReactNode;
  title: React.ReactNode;
  id: string;
}

const Panel = ({ children, title, id }: PanelProps) => {
  const classes = useStyles();
  const { color_primary_1, color_primary_3 } = useTheme();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { openedPanels, onClickPanel, defaultOpen, handleDefaultOpen } =
    useContext(CollapseContext);

  const handleOnClick = () => {
    onClickPanel(id);
  };

  useLayoutEffect(() => {
    if (defaultOpen) {
      handleDefaultOpen(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isOpen = Boolean(openedPanels.find((item) => item === id));

  return (
    <div style={{ marginBottom: 16 }}>
      <div className={classes["titleWrapper"]} onClick={handleOnClick}>
        <div className={classes["title"]}>
          {typeof title === "string" ? (
            <Text
              theme="Regular"
              size={16}
              color={isOpen ? color_primary_1 : color_primary_3}
              ellipsis
            >
              {title}
            </Text>
          ) : (
            title
          )}
        </div>
        <motion.div
          style={{ marginRight: 10 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          <BaseIcon
            color={isOpen ? color_primary_1 : color_primary_3}
            name={"Every-Boxes-_-Flesh-Icon-for-more-choices"}
            size={{ height: 6, width: 12 }}
          />
        </motion.div>
      </div>

      <motion.div
        style={{ overflow: "hidden", height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export { Panel };
