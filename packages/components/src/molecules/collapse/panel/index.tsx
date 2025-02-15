import React, { useContext, useLayoutEffect } from "react";
import { motion } from "framer-motion";

import { BaseIcon } from "../../../atoms/baseIcon";
import { CollapseContext } from "../context";
import { Text } from "../../../atoms/text";
import { useTheme } from "../../../theme";
import { useStyles } from "./style";

export interface PanelProps {
  children: React.ReactNode;
  title: ((args: { isOpen: boolean }) => React.ReactNode) | string;
  id: string;
}

const Panel = ({ children, title, id }: PanelProps) => {
  const classes = useStyles();
  const { collapse: { closePanel, openPanel } = {} } = useTheme();
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
              color={isOpen ? openPanel : closePanel}
              ellipsis
            >
              {title}
            </Text>
          ) : (
            title({ isOpen })
          )}
        </div>
        <motion.div
          style={{ marginRight: 10 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          <BaseIcon
            color={isOpen ? openPanel : closePanel}
            name={"Amount-Boxes_Decrease"}
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
