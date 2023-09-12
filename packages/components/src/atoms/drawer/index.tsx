import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { useStyle } from "./style";
import React from "react";

export interface DrawerProps {
  isVisible: boolean;
  children: React.ReactNode;
  onClose: () => void;
  getContainer?: HTMLElement | null;
  placement?: "top" | "right" | "bottom" | "left";
  width?: number;
  height?: number;
  destroyOnClose?: boolean;
  maskCloseable?: boolean;
}

type DrawerRect = {
  width: number | string;
  height: number | string;
};

type DrawerPosition = {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
};

type DrawerDimentions = {
  rect: DrawerRect;
  initial: DrawerPosition;
  animateTo: DrawerPosition;
};

const Drawer = ({
  isVisible,
  children,
  onClose,
  getContainer,
  placement = "bottom",
  height,
  width,
  destroyOnClose,
  maskCloseable = true,
}: DrawerProps) => {
  const classes = useStyle();
  const [bodyRef, setBodyRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setBodyRef(document.body);
  }, []);

  const mask = (
    <div
      onClick={() => {
        isVisible && maskCloseable && onClose();
      }}
      className={classNames(classes["mask"])}
    />
  );

  const portalContainerElement = useMemo(() => {
    if (
      getContainer &&
      getContainer?.style.position &&
      getContainer?.style.position !== "static" &&
      getContainer.style.overflow === "hidden"
    ) {
      return getContainer;
    } else return bodyRef;
  }, [getContainer, bodyRef]);

  const drawerPositionStrategy: React.CSSProperties["position"] =
    portalContainerElement?.localName === "body" ? "fixed" : "absolute";

  const dimentions = useMemo((): DrawerDimentions | undefined => {
    const portalContainerElementRect =
      portalContainerElement?.getBoundingClientRect();

    const containerHeight = portalContainerElementRect?.height;
    const containerWidth = portalContainerElementRect?.width;

    if (!containerHeight || !containerWidth) return;
    else if (placement === "bottom") {
      const _height = height || containerHeight - 100;
      return {
        rect: { width: "100%", height: _height },
        initial: { bottom: -_height, left: 0 },
        animateTo: { bottom: 0, left: 0 },
      };
    } else if (placement === "right") {
      const _width = width || containerWidth - 100;
      return {
        rect: { height: "100%", width: _width },
        initial: { bottom: 0, right: -_width },
        animateTo: { bottom: 0, right: 0 },
      };
    } else if (placement === "top") {
      const _height = height || containerHeight - 100;
      return {
        rect: { width: "100%", height: _height },
        initial: { left: 0, top: -_height },
        animateTo: { top: 0, left: 0 },
      };
    } else if (placement === "left") {
      const _width = width || containerWidth - 100;
      return {
        rect: { height: "100%", width: _width },
        initial: { top: 0, left: -_width },
        animateTo: { top: 0, left: 0 },
      };
    }
  }, [height, placement, portalContainerElement, width]);

  const content = (
    <motion.div
      initial={{ ...dimentions?.initial, opacity: 0 }}
      animate={{
        ...(isVisible && dimentions?.animateTo),
        opacity: isVisible ? 1 : 0,
      }}
      exit={{ ...dimentions?.initial, opacity: 0 }}
      style={{
        position: drawerPositionStrategy,
        backgroundColor: "white",
        ...dimentions?.rect,
      }}
    >
      {children}
    </motion.div>
  );

  return (
    <>
      {portalContainerElement
        ? ReactDOM.createPortal(
            <>
              {isVisible ? mask : null}
              <AnimatePresence>
                {!isVisible && destroyOnClose ? null : content}
              </AnimatePresence>
            </>,
            portalContainerElement,
          )
        : null}
    </>
  );
};

export { Drawer };
