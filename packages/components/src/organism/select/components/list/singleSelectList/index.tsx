import { Option } from "../../option";
import { ScrollView, Text } from "../../../../../atoms";
import { Radio } from "../../../../../molecules";
import { theming } from "../../../../../theme";
import { createUseStyles } from "react-jss";
import { SingleSelectProps } from "../../singleSelect";

const { useTheme } = theming;

export interface SingleSelectList<T extends Record<string, any>>
  extends Pick<
    SingleSelectProps<T>,
    "data" | "valueExtractor" | "labelExtractor"
  > {
  onClick: (value: T[keyof T]) => void;
  internalValue: T | undefined;
}

export const SingleSelectList = <T extends Record<string, any>>({
  data,
  onClick,
  labelExtractor,
  internalValue,
  valueExtractor,
}: SingleSelectList<T>) => {
  const { disableText } = useTheme();
  const selectedItem = data.find((item) => {
    return valueExtractor?.(item) === internalValue;
  });
  const classes = useStyles();
  return (
    <ScrollView style={{ flex: 1 }}>
      {internalValue ? (
        <div className={classes["radio"]}>
          <Radio value="selected" checked />
          <Text ellipsis size={16} theme={"Regular"} color={"#575757"}>
            {selectedItem && labelExtractor?.(selectedItem)}
          </Text>
        </div>
      ) : null}
      {internalValue ? (
        <div style={{ height: 1, backgroundColor: disableText }} />
      ) : null}
      {data
        .filter((item) => valueExtractor?.(item) !== internalValue)
        .map((item, index) => {
          const isSelected = internalValue === valueExtractor?.(item);
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
        })}
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
