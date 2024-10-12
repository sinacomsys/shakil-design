import { useEffect, useState } from "react";
import { SelectProps } from "../../types";
import { SingleSelectList } from "../list/singleSelectList";
import { Template } from "../selectTemplate";

export interface SingleSelectProps<T extends Record<string, any>>
  extends SelectProps<T> {
  value?: T[keyof T];
  onChange?: (item: SingleSelectProps<T>["value"]) => void;
  mode: "single";
}

const SingleSelect = <T extends Record<string, any>>({
  valueExtractor = (item) => item.value,
  labelExtractor = (item) => item.label,
  data,
  value,
  onChange,
  onClear,
  onFilter,
  ...props
}: SingleSelectProps<T>) => {
  const [selectedItem, setSelectedItem] = useState<T[keyof T] | undefined>(
    undefined,
  );

  useEffect(() => {
    setSelectedItem(value);
  }, [value]);

  const handleOnChange = (selectedItemValue: T[keyof T]) => {
    !value && setSelectedItem(selectedItemValue);
    onChange?.(selectedItemValue);
  };

  const _value = data.find((item) => valueExtractor?.(item) === selectedItem);
  const displayValue = _value ? labelExtractor?.(_value) : "";

  const handleOnClear = () => {
    onClear?.();
  };

  return (
    <Template
      {...props}
      displayValue={displayValue || ""}
      data={data}
      onClear={handleOnClear}
      labelExtractor={labelExtractor}
      renderOverlay={({ onClose, filteredData }) => {
        return (
          <SingleSelectList
            data={data}
            filteredData={filteredData}
            labelExtractor={labelExtractor}
            valueExtractor={valueExtractor}
            selectedItem={selectedItem}
            onClick={(value) => {
              handleOnChange(value);
              onClose();
            }}
          />
        );
      }}
    />
  );
};

export { SingleSelect };
