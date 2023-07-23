import classNames from "classnames";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { PopperProps, usePopper } from "react-popper";
import { useOnClickOutSide } from "@sina-base/utils";
import { useStyles } from "./style";

export interface TooltipProps {
  trigger?: "click" | "hover";
  children: React.ReactNode;
  content: React.ReactNode;
  arrowColor: string;
  placement?: PopperProps<unknown>["placement"];
  hasMask?: boolean;
  maskStyle?: React.CSSProperties;
  isVisible?: boolean;
}

const Tooltip = ({
  children,
  content,
  trigger = "hover",
  arrowColor,
  placement = "top",
  hasMask,
  maskStyle,
  isVisible: isVisibleProp,
}: TooltipProps) => {
  const classes = useStyles();
  const body = useRef<HTMLElement | null>(null);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null,
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const timerDelay = useRef<null | NodeJS.Timeout>(null);

  const { styles, attributes, state } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: placement,
      strategy: "fixed",
      modifiers: [
        { name: "arrow", options: { element: arrowElement } },
        { name: "offset", options: { offset: [0, 10] } },
      ],
    },
  );

  const currentPlacement = state?.placement;

  const handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    fireEvents("onClick", e);
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    body.current = document.body;
  }, []);

  const handleOnMouseLeave = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    fireEvents("onMouseLeave", e);
    timerDelay.current = setTimeout(() => {
      setVisible(false);
    }, 100);
  };

  const handleOnMouseEnter = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    fireEvents("onMouseEnter", e);
    setVisible(true);
  };

  const newChildProps: HTMLAttributes<HTMLElement> & {
    key: string;
    ref: React.LegacyRef<HTMLDivElement>;
  } = {
    key: "trigger",
    ref: setReferenceElement,
  };

  if (trigger === "click") {
    newChildProps.onClick = handleOnClick;
  }
  if (trigger === "hover") {
    newChildProps.onMouseLeave = handleOnMouseLeave;
    newChildProps.onMouseEnter = handleOnMouseEnter;
  }

  const anchor = React.isValidElement(children) ? (
    React.cloneElement(children, newChildProps)
  ) : (
    <span {...newChildProps}>{children}</span>
  );

  useOnClickOutSide({
    element: popperElement,
    extraElement: referenceElement,
    handler() {
      if (trigger === "click") {
        setVisible(false);
      }
    },
  });

  const handlePopupMouseLeave = () => {
    if (trigger === "hover") {
      setVisible(false);
    }
  };

  const handlePopupMouseEnter = () => {
    if (timerDelay.current) {
      clearTimeout(timerDelay.current);
    }
  };

  const fireEvents = (
    type: string,
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    const childCallback = (children as React.ReactElement).props[type];
    if (childCallback) {
      childCallback(e);
    }
  };
  const arrow = (
    <div
      className={classes["arrow"]}
      ref={setArrowElement}
      style={{
        ...styles.arrow,
        transform: `${styles.arrow.transform} rotate(45deg)`,
        backgroundColor: arrowColor,
        ...(currentPlacement === "top" && { bottom: -4 }),
        ...(currentPlacement === "bottom" && { top: -4 }),
        ...(currentPlacement === "left" && { right: -4 }),
        ...(currentPlacement === "right" && { left: -4 }),
      }}
    />
  );

  const mask =
    trigger === "click" ? (
      <div
        className={classNames(classes["mask"], classes["maskVisible"])}
        style={{ ...maskStyle }}
      />
    ) : null;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _isVisible = isVisibleProp !== undefined ? isVisibleProp : isVisible;

  return (
    <>
      {anchor}
      {body.current && _isVisible && content
        ? ReactDOM.createPortal(
            <>
              {hasMask ? mask : null}
              <div
                onMouseEnter={handlePopupMouseEnter}
                onMouseLeave={handlePopupMouseLeave}
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
              >
                {content}
                {arrow}
              </div>
            </>,
            body.current,
          )
        : null}
    </>
  );
};

export { Tooltip };
