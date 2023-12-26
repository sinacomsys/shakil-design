import { SelectProps } from "../../types";
import { MultiSelectList } from "../list/multiSelectList";
import { Template } from "../selectTemplate";

export interface MultiSelectProps<T extends Record<string, any>>
  extends Omit<SelectProps<T>, "data"> {
  value?: T[keyof T][];
  onChange?: (item: T[keyof T][]) => void;
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
  ...props
}: MultiSelectProps<T>) => {
  // const [internalValue, setInternalValue] = useState<T[keyof T][]>([]);

  const handleOnChange = (selectedItemValue: T[keyof T]) => {
    const alreadyExist = value?.find((item) => item === selectedItemValue);
    if (alreadyExist) {
      const items = (value || []).filter((item) => {
        return item !== selectedItemValue;
      });
      onChange?.(items);
      // !value && setInternalValue(items);
    } else {
      onChange?.([...(value || []), selectedItemValue]);
      // !value && setInternalValue([...(internalValue || []), selectedItemValue]);
    }
  };

  const displayValue = (value || []).length
    ? `${value?.length} Items Selected`
    : "";

  // useEffect(() => {
  //   setInternalValue(value || []);
  // }, [value]);

  return (
    <Template
      {...props}
      displayValue={displayValue}
      data={data}
      renderOverlay={() => {
        return (
          <MultiSelectList
            labelExtractor={labelExtractor}
            valueExtractor={valueExtractor}
            value={value || []}
            onClick={handleOnChange}
            //@ts-ignore
            data={data}
          />
        );
      }}
    />
  );
};

export { MultiSelect };
