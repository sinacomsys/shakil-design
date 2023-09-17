import classNames from "classnames";
import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { useStyles } from "./style";

export interface ModalProps {
  getContainer?: HTMLElement | null;
  isVisible: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  centered?: boolean;
  destroyOnClose?: boolean;
  maskCloseable?: boolean;
}

const Modal = ({
  getContainer,
  isVisible,
  onClose,
  children,
  style,
  className,
  centered,
  destroyOnClose,
  maskCloseable = true,
}: ModalProps) => {
  const classes = useStyles();
  const [bodyRef, setBodyRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setBodyRef(document.body);
  }, []);

  const modalContainerElement = useMemo(() => {
    if (
      getContainer &&
      getContainer?.style.position &&
      getContainer?.style.position !== "static"
    ) {
      return getContainer;
    } else return bodyRef;
  }, [getContainer, bodyRef]);

  const drawerPositionStrategy: React.CSSProperties["position"] =
    modalContainerElement?.localName === "body" ? "fixed" : "absolute";

  const mask = (
    <div
      onClick={() => {
        isVisible && maskCloseable && onClose?.();
      }}
      className={classes.mask}
    />
  );
  const content = (
    <div
      className={classNames(
        classes.modalContainer,
        centered && classes.centerd,
        className,
      )}
      style={{
        position: drawerPositionStrategy,
        display: isVisible ? "block" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );

  return (
    <>
      {modalContainerElement ? (
        <>
          {ReactDOM.createPortal(
            <>
              {isVisible ? mask : null}
              {!isVisible && destroyOnClose ? null : content}
            </>,
            modalContainerElement,
          )}
        </>
      ) : null}
    </>
  );
};

export { Modal };
