import { Option } from "../../option";
import { ScrollView, Text } from "../../../../../atoms";
import { ListPorps } from "../types";
import { Default } from "../../../types";
import { Radio } from "../../../../../molecules";
import { theming } from "../../../../../theme";
import { createUseStyles } from "react-jss";

const { useTheme } = theming;

export const SingleSelectList = <T extends Default>({
  data,
  onClick,
  labelExtractor,
  internalValue,
  valueExtractor,
}: Omit<ListPorps<T>, "multiple">) => {
  const { disableText } = useTheme();
  const selectedItem = data.find((item) => {
    return valueExtractor?.(item) === internalValue;
  });
  const classes = useStyles();
  return (
    <ScrollView style={{ flex: 1 }}>
      {internalValue ? (
        <div className={classes["radio"]}>
          <Radio value="test" checked>
            <Text size={16} theme={"Regular"} color={"#575757"}>
              {selectedItem && labelExtractor?.(selectedItem)}
            </Text>
          </Radio>
        </div>
      ) : null}
      {internalValue ? (
        <div style={{ height: 1, backgroundColor: disableText }} />
      ) : null}
      {data
        .filter((item) => valueExtractor?.(item) !== internalValue)
        .map((item) => {
          const isSelected = internalValue === valueExtractor?.(item);
          return (
            <Option
              multiple={false}
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

const useStyles = createUseStyles(
  {
    radio: {
      marginInlineStart: 20,
    },
  },
  { theming, name: "singe-select" },
);
