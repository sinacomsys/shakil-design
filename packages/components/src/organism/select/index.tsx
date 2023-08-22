import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { usePopper } from "react-popper";
import { BaseIcon, ScrollView } from "../../atoms";
import { TextInput } from "../../molecules/textInput";
import { useOnClickOutSide } from "@shakil-design/utils";
import { Option } from "./option";
import { useStyles } from "./style";
import { Default, OptionValue, SelectProps, Value } from "./types";
import classnames from "classnames";
import { Clear } from "./clear";

const Select = <T extends Record<string, unknown> = Default>({
  data,
  value: propValue,
  labelExtractor = (item: T) => item.label as string,
  valueExtractor = (item: T) => item.value as Value,
  onChange,
  onClear,
  disabled,
  unit = "viewport",
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
}: SelectProps<T>) => {
  const classes = useStyles();
  const [internalValue, setInternalValue] = useState<OptionValue | null>(null);
  const body = useRef<HTMLElement | null>(null);
  const [width, setWidth] = useState(0);
  const [isHoverd, setIsHovered] = useState(false);

  const [isVisible, setVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null,
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  const { styles: poperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: "bottom",
      strategy: "fixed",
      modifiers: [{ name: "offset", options: { offset: [0, 2] } }],
    },
  );

  useEffect(() => {
    body.current = document.body;
  }, []);

  const handleOnClick = () => {
    if (disabled) return;
    setVisible((prev) => !prev);
  };

  const handleRefOfRefrenceElement = (node: HTMLDivElement) => {
    setWidth(node?.getBoundingClientRect().width);
    setReferenceElement(node);
  };

  const _value = propValue || internalValue?.value;

  const handleOnChange = (selectedItemValue: OptionValue) => {
    setVisible(false);
    if (!propValue) {
      setInternalValue(selectedItemValue);
      onChange?.(selectedItemValue.value);
    } else if (propValue) {
      const selectedItem = data.find(
        (item) => selectedItemValue.value === valueExtractor(item),
      );

      if (selectedItem) {
        const _selectedItem = valueExtractor(selectedItem);
        onChange?.(_selectedItem);
      }
    }
  };

  const handleOnClear = () => {
    setInternalValue(null);
    setVisible(false);
    onClear?.();
    onChange?.(null);
  };

  useOnClickOutSide({
    element: popperElement,
    extraElement: referenceElement,
    handler() {
      setVisible(false);
    },
  });

  const onMouseEnter = () => {
    if (disabled) return;
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    if (disabled) return;
    setIsHovered(false);
  };

  return (
    <>
      <TextInput
        {...{
          AddonAfter,
          addonAfterClassName,
          addonAfterStyle,
          addonBefore,
          addonBeforeClassName,
          addonBeforeStyle,
          className,
          onBlur,
          onFocus,
          wrapperClassName,
          wrapperStyle,
        }}
        onClear={handleOnClear}
        ref={handleRefOfRefrenceElement}
        onClick={handleOnClick}
        value={internalValue?.label}
        style={{
          textAlign: "center",
          caretColor: "transparent",
          cursor: "pointer",
          ...style,
        }}
        unit={unit}
        placeholder={placeholder}
        allowClear={allowClear}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        AddonAfter={
          <Clear
            handleOnClear={handleOnClear}
            whatVisible={
              isHoverd && _value
                ? "cross"
                : !isHoverd || !_value
                ? "arrow"
                : null
            }
            isVisible={isVisible}
          />
        }
      />

      {body.current && isVisible
        ? ReactDOM.createPortal(
            <>
              <div
                ref={setPopperElement}
                style={poperStyles.popper}
                {...attributes.popper}
              >
                <div
                  style={{ width, ...popupStyles }}
                  className={classnames(popupClassName, classes["overlay"])}
                >
                  <div className={classes["inputWrapper"]}>
                    <TextInput
                      placeholder="Search"
                      unit="pixel"
                      AddonAfter={
                        <BaseIcon
                          color={"#d1d1d1"}
                          name="Search-Box_Search-Icon"
                          unit="pixel"
                          size={{ height: 15, width: 15 }}
                        />
                      }
                    />
                  </div>
                  <ScrollView style={{ flex: 1 }}>
                    {data.map((item) => {
                      return (
                        <Option
                          isSelected={_value === valueExtractor(item)}
                          value={{
                            label: labelExtractor(item),
                            value: valueExtractor(item),
                          }}
                          onClick={handleOnChange}
                          key={valueExtractor(item)}
                        >
                          {labelExtractor(item)}
                        </Option>
                      );
                    })}
                  </ScrollView>
                </div>
              </div>
            </>,
            body.current,
          )
        : null}
    </>
  );
};

export { Select };
