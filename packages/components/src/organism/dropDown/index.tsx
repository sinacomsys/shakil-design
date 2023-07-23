import classNames from "classnames";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { PopperProps, usePopper } from "react-popper";
import { Text } from "../../atoms/text";
import { useTheme } from "../../theme/context";
import { useOnClickOutSide } from "@sina-base/utils";
import { useStyles } from "./style";

type Value = string | number | null | undefined;
type Default = {
  value?: Value;
  label?: React.ReactNode;
};

interface DropDownProps<T extends Default> {
  trigger?: "click" | "hover";
  children: React.ReactNode;
  placement?: PopperProps<unknown>["placement"];
  hasMask?: boolean;
  maskStyle?: React.CSSProperties;
  isVisible?: boolean;
  items: T[];
  value?: Value;
  onChange?: (value: T) => void;
}

const DropDown = <T extends Default>({
  children,
  trigger = "hover",
  placement = "bottom",
  isVisible: isVisibleProp,
  items,
  onChange,
  value: propValue,
}: DropDownProps<T>) => {
  const classes = useStyles();
  const { color_primary_1 } = useTheme();
  const [internalValue, setInternalValue] = useState<Value | null>(null);
  const body = useRef<HTMLElement | null>(null);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null,
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const timerDelay = useRef<null | NodeJS.Timeout>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement,
    strategy: "fixed",
  });

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

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _isVisible = isVisibleProp !== undefined ? isVisibleProp : isVisible;

  const onSelectItem = (value: T) => {
    setInternalValue(value.value);
    setVisible(false);
    onChange?.(value);
  };

  const _value = propValue || internalValue;

  const list = (
    <div className={classes["overlay"]}>
      {items.map((item) => {
        return (
          <div
            onClick={() => onSelectItem(item)}
            className={classNames(
              classes["item"],
              _value === item.value && classes["itemSelected"],
            )}
            key={item.value}
          >
            <Text size={14} color={color_primary_1}>
              {item.label}
            </Text>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      {anchor}
      {body.current && _isVisible
        ? ReactDOM.createPortal(
            <>
              <div
                onMouseEnter={handlePopupMouseEnter}
                onMouseLeave={handlePopupMouseLeave}
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
              >
                {list}
              </div>
            </>,
            body.current,
          )
        : null}
    </>
  );
};

export { DropDown };
