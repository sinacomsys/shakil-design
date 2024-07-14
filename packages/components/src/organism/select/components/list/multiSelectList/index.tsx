import { ScrollView } from "../../../../../atoms";
import { Option } from "../../option";
import { theming } from "../../../../../theme";
import { MultiSelectProps } from "../../multiSelect";
import { isNullish } from "@shakil-design/utils/src";
import { NoData } from "../noData";

const { useTheme } = theming;

export interface MultiSelectList<T extends Record<string, any>>
  extends Pick<MultiSelectProps<T>, "valueExtractor" | "labelExtractor"> {
  onClick: (value: T[keyof T]) => void;
  value: T[keyof T][];
  rawData: T[];
  filteredData: T[];
}

const MultiSelectList = <T extends Record<string, any>>({
  rawData,
  labelExtractor,
  valueExtractor,
  onClick,
  value,
  filteredData,
}: MultiSelectList<T>) => {
  const { disableText } = useTheme();
  const isNotSelectedItems = filteredData.filter((item) => {
    const isSelected = value?.find((_item) => {
      return valueExtractor?.(item) === _item;
    });
    return isNullish(isSelected);
  });

  return (
    <ScrollView style={{ flex: 1 }}>
      {(value || [])?.map((item, index) => {
        const selectedItem = rawData.find(
          (_item) => valueExtractor?.(_item) === item,
        );
        return (
          <Option
            key={index}
            multiple={true}
            isSelected
            onClick={() => {
              onClick(item);
            }}
          >
            {selectedItem && labelExtractor?.(selectedItem)}
          </Option>
        );
      })}

      {(value || []).length ? (
        <div style={{ height: 1, backgroundColor: disableText }} />
      ) : null}

      {!isNotSelectedItems || isNotSelectedItems.length === 0 ? (
        <NoData />
      ) : (
        isNotSelectedItems.map((item, index) => {
          const isSelected =
            Array.isArray(value) &&
            Boolean(value.find((_item) => _item === valueExtractor?.(item)));

          return (
            <Option
              multiple={true}
              isSelected={isSelected}
              onClick={() => {
                valueExtractor && onClick(valueExtractor?.(item));
              }}
              key={index}
            >
              {labelExtractor?.(item)}
            </Option>
          );
        })
      )}
    </ScrollView>
  );
};

export { MultiSelectList };
