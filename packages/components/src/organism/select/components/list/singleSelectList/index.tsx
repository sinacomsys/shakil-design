import { Option } from "../../option";
import { ScrollView, Text } from "../../../../../atoms";
import { Radio } from "../../../../../molecules";
import { theming } from "../../../../../theme";
import { createUseStyles } from "react-jss";
import { SingleSelectProps } from "../../singleSelect";
import { NoData } from "../noData";

const { useTheme } = theming;

export interface SingleSelectList<T extends Record<string, any>>
  extends Pick<
    SingleSelectProps<T>,
    "data" | "valueExtractor" | "labelExtractor"
  > {
  onClick: (value: T[keyof T]) => void;
  selectedItem: T | undefined;
  filteredData: T[];
}

export const SingleSelectList = <T extends Record<string, any>>({
  data,
  onClick,
  labelExtractor,
  selectedItem,
  valueExtractor,
  filteredData,
}: SingleSelectList<T>) => {
  const { disableText } = useTheme();
  const _selectedItem = data.find((item) => {
    return valueExtractor?.(item) === selectedItem;
  });
  const classes = useStyles();
  return (
    <ScrollView style={{ flex: 1 }}>
      {selectedItem ? (
        <div className={classes["radio"]}>
          <Radio value="selected" checked />
          <Text ellipsis size={16} theme={"Regular"} color={"#575757"}>
            {_selectedItem && labelExtractor?.(_selectedItem)}
          </Text>
        </div>
      ) : null}
      {selectedItem ? (
        <div style={{ height: 1, backgroundColor: disableText }} />
      ) : null}
      {!filteredData || filteredData.length === 0 ? (
        <NoData />
      ) : (
        filteredData
          .filter((item) => valueExtractor?.(item) !== selectedItem)
          .map((item, index) => {
            const isSelected = selectedItem === valueExtractor?.(item);
            return (
              <Option
                multiple={false}
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

const useStyles = createUseStyles(
  {
    radio: {
      marginInline: 20,
      display: "flex",
      paddingBlock: 10,
    },
  },
  { theming, name: "singe-select" },
);
