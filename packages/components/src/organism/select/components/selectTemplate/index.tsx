import { useOnClickOutSide } from "@shakil-design/utils/src";
import { useEffect, useMemo, useRef, useState } from "react";
import { isInclude } from "@shakil-design/utils";
import { usePopper } from "react-popper";
import classNames from "classnames";
import ReactDOM from "react-dom";

import { TextInput } from "../../../../molecules";
import { BaseIcon } from "../../../../atoms";
import { SelectProps } from "../../types";
import { FleshIcon } from "../fleshIcon";
import { useStyles } from "../../style";

interface TemplateProps<T extends Record<string, any>> extends SelectProps<T> {
  displayValue: string;
  renderOverlay: ({
    onClose,
    filteredData,
  }: {
    onClose: () => void;
    filteredData: T[];
  }) => React.ReactNode;
}

const Template = <T extends Record<string, any>>({
  onClear,
  disabled,
  allowClear,
  AddonAfter,
  addonAfterClassName,
  addonAfterStyle,
  addonBefore,
  addonBeforeClassName,
  addonBeforeStyle,
  className,
  onBlur,
  onFocus,
  placeholder,
  style,
  wrapperClassName,
  wrapperStyle,
  popupClassName,
  popupStyles,
  hasSearch = true,
  onMouseEnter,
  onMouseLeave,
  testid,
  errorMessage,
  errorMessageClassName,
  hasError,
  clearIconColor,
  isLoading,
  displayValue,
  renderOverlay,
  data,
  labelExtractor,
  onFilter,
}: TemplateProps<T>) => {
  const classes = useStyles();
  const [isVisible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const body = useRef<HTMLElement | null>(null);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null,
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    body.current = document.body;
  }, []);
  const { styles: poperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: "bottom",
      strategy: "fixed",
      modifiers: [{ name: "offset", options: { offset: [0, 2] } }],
    },
  );

  const handleOnClick = () => {
    if (disabled || isLoading) return;
    setVisible((prev) => !prev);
  };

  const [width, setWidth] = useState(0);

  const handleRefOfRefrenceElement = (node: HTMLDivElement) => {
    setWidth(node?.getBoundingClientRect().width);
    setReferenceElement(node);
  };

  useOnClickOutSide({
    element: popperElement,
    extraElement: referenceElement,
    handler() {
      setVisible(false);
    },
  });

  const handleOnSearch = (value: string) => {
    setSearchValue(value);
  };

  const onCloseOverlay = () => {
    setVisible(false);
  };

  const filteredData = useMemo(() => {
    if (onFilter && typeof onFilter === "function") {
      return onFilter({ data: data, searchedValue: searchValue }).filterdData;
    } else {
      return data?.filter((item) => {
        return isInclude(labelExtractor?.(item), searchValue);
      });
    }
  }, [data, labelExtractor, onFilter, searchValue]);

  const onClearSearchInput = () => {
    setSearchValue("");
  };

  return (
    <>
      <div ref={handleRefOfRefrenceElement}>
        <TextInput
          data-testid={testid?.input}
          {...{
            AddonAfter,
            addonAfterClassName,
            addonAfterStyle,
            addonBefore,
            addonBeforeClassName,
            addonBeforeStyle,
            onBlur,
            onFocus,
            wrapperClassName,
            wrapperStyle,
            onMouseEnter,
            onMouseLeave,
            errorMessage,
            errorMessageClassName,
            hasError,
            clearIconColor,
            isLoading,
            disabled,
          }}
          onClear={onClear}
          onClick={handleOnClick}
          value={displayValue}
          style={{
            ...style,
          }}
          className={classNames(
            classes["text-input"],
            isLoading && `${classes["text-input"]}--loading`,
            className,
          )}
          placeholder={placeholder}
          allowClear={allowClear}
          AddonAfter={<FleshIcon isVisible={isVisible} />}
        />
      </div>

      {body.current && isVisible
        ? ReactDOM.createPortal(
            <>
              <div
                ref={setPopperElement}
                style={poperStyles.popper}
                {...attributes.popper}
              >
                <div
                  data-testid={testid?.overlay}
                  style={{ width, ...popupStyles }}
                  className={classNames(popupClassName, classes["overlay"])}
                >
                  {hasSearch ? (
                    <div className={classes["inputWrapper"]}>
                      <TextInput
                        allowClear
                        value={searchValue}
                        placeholder="Search"
                        AddonAfter={
                          <BaseIcon
                            color={"#d1d1d1"}
                            name="Table_Search-Icon"
                            size={{ height: 15, width: 15 }}
                          />
                        }
                        onClear={onClearSearchInput}
                        onChangeText={handleOnSearch}
                      />
                    </div>
                  ) : null}
                  {renderOverlay({ onClose: onCloseOverlay, filteredData })}
                </div>
              </div>
            </>,
            body.current,
          )
        : null}
    </>
  );
};

export { Template };
