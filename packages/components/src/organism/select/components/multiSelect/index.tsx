import { DefaultValue, SelectProps } from "../../types";
import { MultiSelectList } from "../list/multiSelectList";
import { Template } from "../selectTemplate";
import { isNullish } from "@shakil-design/utils/src";

export interface MultiSelectProps<T extends Record<string, any> = DefaultValue>
  extends Omit<SelectProps<T>, "data"> {
  value?: T[keyof T][];
  onChange?: (item: T[keyof T][] | null) => void;
  mode?: "multi";
  data: T[];
}

export type InternalValue<T> = T[];

const MultiSelect = <T extends Record<string, any>>({
  onChange,
  value,
  data,
  valueExtractor = (item) => item.value,
  labelExtractor = (item) => item.label,
  onClear,
  ...props
}: MultiSelectProps<T>) => {
  const handleOnChange = (selectedItemValue: T[keyof T]) => {
    const alreadyExist = value?.find((item) => item === selectedItemValue);
    console.log({ alreadyExist });
    if (!isNullish(alreadyExist)) {
      const items = (value || []).filter((item) => {
        return item !== selectedItemValue;
      });
      onChange?.(items);
    } else {
      onChange?.([...(value || []), selectedItemValue]);
    }
  };

  const displayValue = (value || []).length
    ? `${value?.length} Items Selected`
    : "";

  const handleOnClear = () => {
    onClear?.();
    onChange?.(null);
  };

  return (
    <Template
      {...props}
      onClear={handleOnClear}
      displayValue={displayValue}
      data={data}
      renderOverlay={() => {
        return (
          <MultiSelectList
            labelExtractor={labelExtractor}
            valueExtractor={valueExtractor}
            value={value || []}
            onClick={handleOnChange}
            data={data}
          />
        );
      }}
    />
  );
};

export { MultiSelect };
