import { ScrollView } from "../../../../../atoms";
import { Option } from "../../option";
import { Default, Value } from "../../../types";
import { theming } from "../../../../../theme";
import { ListPorps } from "../types";

const { useTheme } = theming;

const MultiSelectList = <T extends Default>({
  data,
  labelExtractor,
  valueExtractor,
  onClick,
  internalValue,
}: ListPorps<T>) => {
  const { disableText } = useTheme();
  const isNotSelectedItems = data.filter((item) => {
    return !((internalValue as Value[]) || [])?.find((_item) => {
      return valueExtractor?.(item) === _item;
    });
  });

  return (
    <ScrollView style={{ flex: 1 }}>
      {((internalValue as Value[]) || [])?.map((item) => {
        const selectedItem = data.find(
          (_item) => valueExtractor?.(_item) === item,
        );
        return (
          <Option
            multiple={true}
            isSelected
            value={{
              label: item as any,
              value: item,
            }}
            onClick={onClick}
            key={item}
          >
            {selectedItem && labelExtractor?.(selectedItem)}
          </Option>
        );
      })}

      {((internalValue as Value[]) || []).length ? (
        <div style={{ height: 1, backgroundColor: disableText }} />
      ) : null}

      {isNotSelectedItems.map((item) => {
        const isSelected =
          Array.isArray(internalValue) &&
          Boolean(
            internalValue.find((_item) => _item === valueExtractor?.(item)),
          );

        return (
          <Option
            multiple={true}
            isSelected={isSelected}
            value={{
              label: labelExtractor?.(item) || "",
              value: valueExtractor?.(item),
            }}
            onClick={onClick}
            key={valueExtractor?.(item)}
          >
            {labelExtractor?.(item)}
          </Option>
        );
      })}
    </ScrollView>
  );
};

export { MultiSelectList };
